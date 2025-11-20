import React from 'react';
import { generateGoogleCalendarUrl } from '../services/calendar';

const EventCard = ({ event }) => {
    const { artist, date, time, venue, city, ticketUrl } = event;

    const calendarUrl = generateGoogleCalendarUrl(event);

    return (
        <div className="card event-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div className="event-info">
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>{artist}</h3>
                <p style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{date} @ {time}</p>
                <p style={{ color: 'var(--color-text-secondary)' }}>{venue}, {city}</p>
            </div>
            <div className="event-actions" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a
                    href={ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{ textAlign: 'center', textDecoration: 'none' }}
                >
                    Get Tickets
                </a>
                <a
                    href={calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                        textAlign: 'center',
                        textDecoration: 'none',
                        backgroundColor: 'transparent',
                        border: '1px solid var(--color-primary)',
                        color: 'var(--color-primary)'
                    }}
                >
                    Add to Calendar
                </a>
            </div>
        </div>
    );
};

export default EventCard;
