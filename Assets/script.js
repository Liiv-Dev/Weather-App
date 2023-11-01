// Renders page before running functions
$(document).ready(function() {
    // API key
    const apiKey = 'd9593fee53a8685d50e5bbf150c861b9';

    // Array of cities for list buttons and to display forecast
    const cities = ['Albuquerque', 'Boston', 'Chicago', 'Columbus', 'Dallas', 'Fort Worth', 'Houston', 'Jacksonville', 'Las Vegas', 'Los Angeles', 'Madison', 'New York', 'Oklahoma City', 'Philadelphia', 'Phoenix', 'Portland', 'San Diego', 'San Francisco']

    /*
     // variables get the input element and characters used in button cities
     var searchBar = $('#userSearch');
     var cityButtons = $('#city');

     // Function hides buttons if search input doesnt match button characters 
     searchBar.on('input', function(){
        var searchChar = $(this).input().toLowerCase()

        cityButtons.each(function() {
            var buttonChar = $(this).text().toLowerCase();
            if (buttonChar.includes(searchChar)) {
                $(this).show();
            } else {
                $(this).hide();
            }   
        })
     })
     */
     

     // Loops through Cities Array
     for (var i = 0; i < cities.length; i++) {
         
         //Creates new option element
         var citiesItem = $(`<button id='city' class='has-background-white has-text-black is-size-6'>`).html(cities[i]);
         
         // Append <option> to select element with city names
          $('.list-container').append(citiesItem)
     }

    //API URLs for current weather and 5 day forecast
    const getWeatherData = city => {
        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
        const forecastUrl = `api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${apiKey}`; 
    }

    // function for fetching current weather based on city selected and display data
    const currentWeather = () => {
        
    }

    // function for fetching 5 day forecast based on city selected and display data
    const forecastWeather = () => {

    }
   

    
});