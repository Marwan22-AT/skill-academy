// clock-script.js

// Array of time zones for various cities
const timeZones = {
    "New York": "America/New_York",
    "London": "Europe/London",
    "Paris": "Europe/Paris",
    "Dubai": "Asia/Dubai",
    "Tokyo": "Asia/Tokyo",
    "Sydney": "Australia/Sydney",
    "Los Angeles": "America/Los_Angeles",
    "Singapore": "Asia/Singapore",
    "Toronto": "America/Toronto",
    "Mumbai": "Asia/Kolkata",
    "Berlin": "Europe/Berlin",
    "Hong Kong": "Asia/Hong_Kong"
};

let is24HourFormat = true; // default format

function toggleTimeFormat() {
    is24HourFormat = !is24HourFormat;
    updateClocks();
}

function formatTime(date) {
    if (is24HourFormat) {
        return date.toTimeString().split(' ')[0]; // HH:MM:SS
    } else {
        return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    }
}

function updateClocks() {
    const now = new Date();
    const clocksContainer = document.getElementById('clocks');
    clocksContainer.innerHTML = ''; // Clear existing clocks
    for (const city in timeZones) {
        const timeZoneDate = new Date(now.toLocaleString('en-US', { timeZone: timeZones[city] }));
        const formattedTime = formatTime(timeZoneDate);
        clocksContainer.innerHTML += `<div>${city}: ${formattedTime}</div>`;
    }
}

setInterval(updateClocks, 1000); // Update every second

// Initial call to display clocks on page load
updateClocks();