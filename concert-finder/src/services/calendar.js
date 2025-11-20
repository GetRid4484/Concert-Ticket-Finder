export const generateGoogleCalendarUrl = (event) => {
    const { artist, date, time, venue, city, description } = event;

    // Handle cases where time is TBA or invalid
    let dates = '';
    if (time && time !== 'TBA') {
        try {
            // Format start and end times
            // Simple assumption: concerts last 3 hours
            const startDateTime = new Date(`${date}T${time}`).toISOString().replace(/-|:|\.\d\d\d/g, '');
            const endDateObj = new Date(`${date}T${time}`);
            endDateObj.setHours(endDateObj.getHours() + 3);
            const endDateTime = endDateObj.toISOString().replace(/-|:|\.\d\d\d/g, '');
            dates = `${startDateTime}/${endDateTime}`;
        } catch (e) {
            // If date parsing fails, use all-day event format
            const dateOnly = date.replace(/-/g, '');
            dates = `${dateOnly}/${dateOnly}`;
        }
    } else {
        // Use all-day event format for TBA times
        const dateOnly = date.replace(/-/g, '');
        dates = `${dateOnly}/${dateOnly}`;
    }

    const text = encodeURIComponent(`${artist} Live at ${venue}`);
    const details = encodeURIComponent(`${description || 'Concert event'}\n\nVenue: ${venue}\nCity: ${city}`);
    const location = encodeURIComponent(`${venue}, ${city}`);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}`;
};
