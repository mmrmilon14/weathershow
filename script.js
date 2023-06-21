document.getElementById('weather__form').addEventListener('submit', function(e) {
    e.preventDefault();
    const location = document.getElementById('location').value;

    if (location) {
      getWeatherData(location);
    }
  });

  function getWeatherData(location) {
    const apiKey = 'fd3e6d97b7caa99551dca5692bea9301';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + apiKey + '&units=metric';

    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        displayWeather(data);
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
  }

  function displayWeather(data) {
    const locationName = document.getElementById('locationName');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');

    locationName.textContent = data.name;
    temperature.textContent =(data.main.temp).toFixed(2) + ' °C';
    humidity.textContent =(data.main.humidity) + ' %';
    description.textContent =data.weather[0].description;
  }
