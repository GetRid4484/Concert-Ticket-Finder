import React from 'react';
import EventCard from './EventCard';

const EventList = ({ events }) => {
    if (!events || events.length === 0) {
        return (
            <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--color-text-secondary)' }}>
                <p>No concerts found. Try searching for a location!</p>
            </div>
        );
    }

    return (
        <div className="event-list">
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    );
};

export default EventList;
