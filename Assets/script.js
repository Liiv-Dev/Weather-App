// Renders page before running functions
$(document).ready(function() {

    // API key
    const apiKey = 'd9593fee53a8685d50e5bbf150c861b9';

    // Array of cities for list buttons and to display forecast
    const cities = ['Albuquerque', 'Boston', 'Chicago', 'Columbus', 'Dallas', 'Fort Worth', 'Houston', 'Jacksonville', 'Las Vegas', 'Los Angeles', 'Madison', 'New York', 'Oklahoma City', 'Philadelphia', 'Phoenix', 'Portland', 'San Diego', 'San Francisco'];

     // Loops through Cities Array
     for (var i = 0; i < cities.length; i++) {
         
         //Creates buttons for cities from array
         var citiesItem = $(`<button id='city' class='has-background-white has-text-black is-size-6'>`).html(cities[i]);
         
         // Append <option> to select element with city names
          $('.list-container').append(citiesItem)
     }

    //API URLs for current weather and 5 day forecast
           // const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
        
        // Attach click event handler to city buttons
    $('.list-container').on('click', 'button', function() {
        const city = $(this).text(); // Get the city name from the clicked button
        
        // API URL for current weather
        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        
        // Fetch current weather data
        $.ajax({
            url: currentWeatherUrl,
            method: 'GET',
            success: function(response) {
                // Handle the current weather data here
                const cityName = response.name;
                const temperature = response.main.temp;
                const windSpeed = response.wind.speed;
                const humidity = response.main.humidity;

                // Update UI with weather data
                $('#selected-city').text(cityName);
                $('#temp').text(`Temperature: ${temperature}°C`);
                $('#wind').text(`Wind Speed: ${windSpeed} m/s`);
                $('#humidity').text(`Humidity: ${humidity}%`);
            },
            error: function(error) {
                // Handle errors here
                console.error('Error fetching current weather:', error);
            }
        });
    });

    $.ajax({
        url: forecastUrl,
        method: 'GET',
        success: function(response) {
            // Handle the current weather data here
            console.log(response);
        },
        error: function(error) {
            // Handle errors here
            console.error('Error fetching forecast weather:', error);
        }
    });

    
});