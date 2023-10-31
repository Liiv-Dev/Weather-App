// Renders page before running functions
$(document).ready(function() {
    // API key
    const apiKey = 'd9593fee53a8685d50e5bbf150c861b9';

    // Array of cities for list buttons and to display forecast
    const cities = ['Albuquerque', 'Boston', 'Chicago', 'Columbus', 'Dallas', 'Fort Worth', 'Houston', 'Jacksonville', 'Las Vegas', 'Los Angeles', 'Madison', 'New York', 'Oklahoma City', 'Philadelphia', 'Phoenix', 'Portland', 'San Diego', 'San Francisco']

     //Creates Search element for list container
     $('.list-container').append(`<input id="userSearch" class="input" type="text" placeholder="Search">`);

     // Loops through Cities Array
     for (var i = 0; i < cities.length; i++) {
         
         //Creates new option element
         var citiesItem = $(`<button class='has-background-white has-text-black is-size-6'>`).html(cities[i]);
         
         // Append <option> to select element with city names
          $('.list-container').append(citiesItem)
     }

    //API URLs for current weather and 5 day forecast
    const getWeatherData = city => {
        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${apiKey}`;
        const forecastUrl = `api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${apiKey}`; 
    }

    // function for fetching current weather based on city selected and display data
    const currentWeather = () => {
        
    }

    // function for fetching 5 day forecast based on city selected and display data
    const forecastWeather = () => {

    }
   

    
});