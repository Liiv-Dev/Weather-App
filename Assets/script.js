// Makes sure paage renders fully
$(document).ready(function() {
    const apiKey = 'd9593fee53a8685d50e5bbf150c861b9';

    const getWeatherData = city => {
        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${apiKey}`;
        const forecastUrl = `api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${apiKey}`; 
    }

    
});