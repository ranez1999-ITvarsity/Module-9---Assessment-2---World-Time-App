function updateTime() {
    const timezones = {
        "new-york-time": "America/New_York",
        "london-time": "Europe/London",
        "tokyo-time": "Asia/Tokyo",
        "sydney-time": "Australia/Sydney",
        "sao-paulo-time": "America/Sao_Paulo",
        "new-delhi-time": "Asia/Kolkata",
        "moscow-time": "Europe/Moscow",
        "berlin-time": "Europe/Berlin",
        "beijing-time": "Asia/Shanghai",
        "johannesburg-time": "Africa/Johannesburg",
        "toronto-time": "America/Toronto"
    };

    for (const [id, timezone] of Object.entries(timezones)) {
        const timeElement = document.getElementById(id);
        const now = new Date().toLocaleTimeString("en-US", { timeZone: timezone });
        timeElement.textContent = now;
    }
}

setInterval(updateTime, 1000);
updateTime();