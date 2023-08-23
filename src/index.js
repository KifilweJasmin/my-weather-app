let now = new Date();
function formatDate(currentDate) {
  let hours = now.getHours();
  if (hours < 10) {
    hours = 0 + hours;
  }
  let min = now.getMinutes();
  if (min < 10) {
    min = 0 + min;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = now.getDay();
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = `${days[day]},${hours}:${min}`;
}
formatDate();
function citySearch(event) {
  event.preventDefault();
  let typeCity = document.querySelector("#search-input");
  let cityValue = document.querySelector("#city");
  cityValue.innerHTML = typeCity.value;

  let apiKey = "2daf65f0cdaa917f11026e8a128ce271";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${typeCity.value}&appid=${apiKey}&units=${units}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
  console.log(citySearch);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", citySearch);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  console.log(position);
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=a33b693cfbefd271b0ed075f9a8f65f0`;
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");

  let cityValue = document.querySelector("#city");
  temperatureElement.innerHTML = temperature;
  cityValue.innerHTML = response.data.name;
  console.log(response);
  console.log(temperature);
}
let locationButton = document.querySelector("#location-button");
locationButton.addEventListener("click", getCurrentPosition);
