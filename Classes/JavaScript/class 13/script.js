const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location p");
const dateFiled = document.querySelector(".time_location span");
const iconField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");
const searchField = document.querySelector(".searchField");
const searchBtn = document.querySelector(".search");

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const cityName = searchField.value;

  if (cityName) {
    fetchWeather(cityName);
  }
});

async function fetchWeather(cityName) {
  try {
    const apiToken = "29a4726fe2esfss843543458c514023340se240102";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiToken}&q=${cityName}&aqi=no`
  
    const response = await fetch(url);
    const parsedJson = await response.json();
  
    const currentTemp = parsedJson.current.temp_c;
    const currentCondition = parsedJson.current.condition.text;
    const conditionIcon = parsedJson.current.condition.icon;
    const locationName = parsedJson.location.name;
    const localTime = parsedJson.location.localtime;
  
    updateDOM({ currentTemp, currentCondition, conditionIcon, locationName, localTime });
  } catch (error) {
    alert("Please, put a valid query");
    console.error(error);
  }
}

function updateDOM({ currentTemp, currentCondition, conditionIcon, locationName, localTime }) {
  temperatureField.innerText = `${currentTemp} Celcius`;
  cityField.innerText = locationName;
  dateFiled.innerText = localTime;
  iconField.setAttribute("src", conditionIcon);
  weatherField.innerText = currentCondition;
}