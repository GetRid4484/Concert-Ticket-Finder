import React, { useState } from 'react';
import LocationInput from './components/LocationInput';
import EventList from './components/EventList';
import { searchConcerts } from './services/concertApi';

function App() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async (location) => {
        setIsLoading(true);
        setHasSearched(true);

        if (!import.meta.env.VITE_TICKETMASTER_API_KEY) {
            alert("Please add your Ticketmaster API Key to the .env file and restart the server!");
            setIsLoading(false);
            return;
        }

        try {
            const results = await searchConcerts(location);
            setEvents(results);
        } catch (error) {
            console.error("Error fetching concerts:", error);
            // Handle error appropriately in a real app
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Concert Finder</h1>
                <p>Discover live music near you</p>
            </header>
            <main>
                <LocationInput onSearch={handleSearch} isLoading={isLoading} />

                {isLoading ? (
                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                        <p>Scanning the airwaves...</p>
                    </div>
                ) : (
                    hasSearched && <EventList events={events} />
                )}

                {!hasSearched && (
                    <div className="placeholder-content" style={{ textAlign: 'center', marginTop: '4rem', opacity: 0.5 }}>
                        <p>Enter your city to start exploring.</p>
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;
