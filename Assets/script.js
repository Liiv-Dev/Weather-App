// Renders page before running functions
$(document).ready(function() {

    // Array of cities for list buttons and to display forecast
    const cities = ['Albuquerque', 'Boston', 'Chicago', 'Columbus', 'Dallas', 'Fort Worth', 'Houston', 'Jacksonville', 'Las Vegas', 'Los Angeles', 'Madison', 'New York', 'Oklahoma City', 'Orlando', 'Philadelphia', 'Phoenix', 'Portland', 'San Diego', 'San Francisco'];

     // Loop through Cities Array
for (var i = 0; i < cities.length; i++) {
    // Create buttons for cities from array
    var citiesItem = $(`<button id='city' class='has-background-white has-text-black is-size-6'>`).html(cities[i]);
    // Append option to select element with city names
    $('.list-container').append(citiesItem);
    // Initially hide all buttons
    //citiesItem.hide();
}

// Add input event listener to the search input
$('#userSearch').on('input', function() {
    var searchTerm = $(this).val().toLowerCase(); // Get user input and convert to lowercase
    
    // Loop through cities and show/hide buttons based on matching characters
    cities.forEach(function(city) {
        var cityButton = $(`.list-container button:contains('${city}')`);
        if (city.toLowerCase().includes(searchTerm)) {
            cityButton.show();
        } else {
            cityButton.hide();
        }
    });
});
        
        // This function collects data from API and displays Information on page 
        // Attach click event handler to city buttons
    $('.list-container').on('click', 'button', function() {
        // Get the city name from the clicked button
        const city = $(this).text(); 

         // API key
        const apiKey = 'd9593fee53a8685d50e5bbf150c861b9';

        // API URL for forecast weather
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&units=metric&appid=${apiKey}`
        
        // API URL for current weather
        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&units=metric&appid=${apiKey}`
        
        // Fetch current weather data
$.ajax({
    url: currentWeatherUrl,
    method: 'GET',
    success: function(response) {
        // Handle the current weather data
        const cityName = response.name;
        const temperature = response.main.temp; // Note: convert C to F
        const windSpeed = response.wind.speed;
        const humidity = response.main.humidity;

        // Converts temperature from Celsius to Fahrenheit
        const temperatureFahrenheit = (temperature * 9/5) + 32;

        
        // Get current date using Day.js
        const currentDate = dayjs().format('MMMM D, YYYY'); 
        
        // Update page with weather data and current date
        $('#selected-city').text(`${cityName} - ${currentDate}`);
        $('#temp').text(`Temperature: ${temperatureFahrenheit.toFixed(2)}°F`);
        $('#wind').text(`Wind Speed: ${windSpeed} m/s`);
        $('#humidity').text(`Humidity: ${humidity}%`);
    },
    error: function(error) {
        // Handle errors here
        console.error('Error fetching current weather:', error);
    }
});

const weatherIcons = {
    '01d': 'fa-sun',   // clear sky (day)
    '01n': 'fa-moon',   // clear sky (night)
    '02d': 'fa-cloud-sun',   // few clouds (day)
    '02n': 'fa-cloud-moon',   // few clouds (night)
    '03d': 'fa-cloud',   // scattered clouds (day)
    '03n': 'fa-cloud',   // scattered clouds (night)
    '04d': 'fa-cloud',   // broken clouds (day)
    '04n': 'fa-cloud',   // broken clouds (night)
    '09d': 'fa-cloud-showers-heavy',   // shower rain (day)
    '09n': 'fa-cloud-showers-heavy',   // shower rain (night)
    '10d': 'fa-cloud-rain',   // rain (day)
    '10n': 'fa-cloud-rain',   // rain (night)
    '11d': 'fa-bolt',   // thunderstorm (day)
    '11n': 'fa-bolt',   // thunderstorm (night)
    '13d': 'fa-snowflake',   // snow (day)
    '13n': 'fa-snowflake',   // snow (night)
    '50d': 'fa-smog',   // mist (day)
    '50n': 'fa-smog'    // mist (night)
};


// Fetch forecast data
$.ajax({
    url: forecastUrl,
    method: 'GET',
    success: function(response) {
        // Handles the forecast weather data
        const dailyForecasts = response.list;

        // Get current date
        const currentDate = dayjs();

        // Display daily forecasts for the next 5 days
        for (let i = 0; i < 5; i++) {
            // Calculate the date for the next day
            const nextDate = currentDate.add(i, 'day');
            const formattedDate = nextDate.format('MM/DD/YYYY'); // Formatted the date as MM/DD/YYYY
            
            // Retrieve forecast data for the corresponding day
            const forecastData = dailyForecasts[i];
            const temperature = forecastData.main.temp;
            const windSpeed = forecastData.wind.speed;
            const humidity = forecastData.main.humidity;

            // Converts temperature into Fahrenheit
            const temperatureFahrenheit = (temperature * 9/5) + 32;

            
            // Update forecast cards with daily forecast data
            $(`#m-f-${i}`).text(formattedDate);
            $(`#weeklyTemp-${i}`).text(`Temperature: ${temperatureFahrenheit.toFixed(2)}°F`);
            $(`#weeklyWind-${i}`).text(`Wind Speed: ${windSpeed} m/s`);
            $(`#weeklyHumidity-${i}`).text(`Humidity: ${humidity}%`);

            // Get weather condition code for the day
            const weatherCode = forecastData.weather[0].icon;
            
            // Get corresponding weather icon class
            const weatherIconClass = weatherIcons[weatherCode] || 'fa-question'; // Default to question mark if icon is not found
            
            // Create an icon element with the weather icon class
            const iconElement = $(`<i class="fa ${weatherIconClass}"></i>`);

            // Update the DOM element with the corresponding index
            $(`#weather-icon-${i}`).empty().append(iconElement);
        }
    },
    error: function(error) {
        // Handle errors here
        console.error('Error fetching forecast weather:', error);
    }
});

    });
});