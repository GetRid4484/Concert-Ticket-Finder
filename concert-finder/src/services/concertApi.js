const API_KEY = import.meta.env.VITE_TICKETMASTER_API_KEY;
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';

export const searchConcerts = async (location) => {
    if (!API_KEY) {
        console.warn("Ticketmaster API Key is missing. Please add it to your .env file.");
        // Fallback to empty array or throw error depending on UX preference
        // For now, we'll return an empty array so the UI doesn't crash
        return [];
    }

    const params = new URLSearchParams({
        apikey: API_KEY,
        keyword: location,
        segmentName: 'Music',
        sort: 'date,asc',
        size: '20' // Limit results
    });

    try {
        const response = await fetch(`${BASE_URL}?${params.toString()}`);
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();

        if (!data._embedded || !data._embedded.events) {
            return [];
        }

        // Map Ticketmaster data to our internal Event format
        return data._embedded.events.map(event => {
            const venue = event._embedded?.venues?.[0];
            const date = event.dates?.start?.localDate;
            const time = event.dates?.start?.localTime ? event.dates.start.localTime.slice(0, 5) : 'TBA'; // HH:MM

            return {
                id: event.id,
                artist: event.name,
                date: date,
                time: time,
                venue: venue?.name || 'Unknown Venue',
                city: venue?.city?.name || 'Unknown City',
                ticketUrl: event.url,
                description: event.info || event.pleaseNote || 'No description available.'
            };
        });

    } catch (error) {
        console.error("Failed to fetch concerts:", error);
        throw error;
    }
};
