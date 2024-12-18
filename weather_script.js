async function getWeather(city, apiKey) {
    const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
    const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`; // Use 'imperial' for Fahrenheit

    try {
        const response = await fetch(url);
        if (response.ok) {
            const weatherData = await response.json();
            return weatherData;
        } else {
            console.error("Error fetching weather data:", response.statusText);
            return null;
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
}

async function main() {
    const city = prompt("Enter city name:");
    const apiKey = "your_api_key_here"; // Replace with your actual OpenWeatherMap API key
    const weatherData = await getWeather(city, apiKey);

    if (weatherData) {
        console.log(`City: ${weatherData.name}`);
        console.log(`Temperature: ${weatherData.main.temp}°C`);
        console.log(`Weather: ${weatherData.weather[0].description}`);
    } else {
        console.log("City not found or invalid API key");
    }
}

main();