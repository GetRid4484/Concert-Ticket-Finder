import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, '.env');

try {
    if (!fs.existsSync(envPath)) {
        console.error("❌ .env file does not exist at:", envPath);
        process.exit(1);
    }

    const envContent = fs.readFileSync(envPath, 'utf-8');
    console.log("File content length:", envContent.length);

    const lines = envContent.split('\n');
    let apiKey = null;

    for (const line of lines) {
        const parts = line.split('=');
        if (parts.length >= 2) {
            const key = parts[0].trim();
            const value = parts.slice(1).join('=').trim(); // Handle values with = in them
            if (key === 'VITE_TICKETMASTER_API_KEY') {
                apiKey = value;
                break;
            }
        }
    }

    if (!apiKey) {
        console.error("❌ Could not find VITE_TICKETMASTER_API_KEY in .env file");
        console.log("Keys found in file:");
        lines.forEach(line => {
            const parts = line.split('=');
            if (parts.length > 0 && parts[0].trim()) {
                console.log(` - ${parts[0].trim()}`);
            }
        });
        process.exit(1);
    }

    console.log("✅ Found API Key (length: " + apiKey.length + ")");
    // Check if it looks like a placeholder
    if (apiKey.includes("your_key_here") || apiKey.length < 10) {
        console.warn("⚠️ API Key looks suspicious (too short or placeholder).");
    }

    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&keyword=New York&size=1`;

    console.log("Testing API connection...");
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        console.log("✅ API Request Successful!");
        if (data._embedded && data._embedded.events) {
            console.log(`✅ Found ${data._embedded.events.length} event(s).`);
            console.log("First event:", data._embedded.events[0].name);
        } else {
            console.warn("⚠️ API returned 200 OK but no events found.");
            console.log("Full response:", JSON.stringify(data, null, 2));
        }
    } else {
        console.error(`❌ API Request Failed: ${response.status} ${response.statusText}`);
        const text = await response.text();
        console.error("Response body:", text);
    }

} catch (err) {
    console.error("❌ Error:", err.message);
}
