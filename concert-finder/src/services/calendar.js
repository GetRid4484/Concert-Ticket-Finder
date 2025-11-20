export const generateGoogleCalendarUrl = (event) => {
    const { artist, date, time, venue, city, description } = event;

    // Format start and end times
    // Simple assumption: concerts last 3 hours
    const startDateTime = new Date(`${date}T${time}`).toISOString().replace(/-|:|\.\d\d\d/g, '');
    const endDateObj = new Date(`${date}T${time}`);
    endDateObj.setHours(endDateObj.getHours() + 3);
    const endDateTime = endDateObj.toISOString().replace(/-|:|\.\d\d\d/g, '');

    const dates = `${startDateTime}/${endDateTime}`;
    const text = encodeURIComponent(`${artist} Live at ${venue}`);
    const details = encodeURIComponent(`${description}\n\nVenue: ${venue}\nCity: ${city}`);
    const location = encodeURIComponent(`${venue}, ${city}`);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}`;
};
