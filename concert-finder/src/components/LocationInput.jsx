import React, { useState } from 'react';

const LocationInput = ({ onSearch, isLoading }) => {
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (location.trim()) {
            onSearch(location);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="location-form" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <input
                    type="text"
                    placeholder="Enter city or zip code (e.g., New York, NY)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    disabled={isLoading}
                />
                <button type="submit" className="btn" disabled={isLoading}>
                    {isLoading ? 'Searching...' : 'Find Concerts'}
                </button>
            </div>
        </form>
    );
};

export default LocationInput;
