const apikey = "bbd0ab207967fd1a782d4a0631c17013"

const cityIn = document.getElementById("city-input")
const getbtn = document.getElementById("get-button")
const weatherinfo = document.getElementById("weather-info")
const cityName = document.getElementById("city-name")
const temp = document.getElementById("temp")
const humid = document.getElementById("humidity")
const desc = document.getElementById("description")
const foreinfo = document.getElementById("forecast-info")
const forecastL = document.getElementById("forecast-list")

getbtn.addEventListener("click",getWeather)

function getWeather(){
    const city = cityIn.value.trim();

if(city === ""){
    alert("please enter a city name")
    return;
}
fetchWeatherData(city)
}

function fetchWeatherData(city){
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    const forecastUrl =  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`;

    fetch(currentWeatherUrl)
    .then((response) => response.json())
    .then((data)=>{
        cityName.textContent = `Weather in ${data.name}`
        temp.textContent = `temperature : ${data.main.temp}°C`;
        humid.textContent = `Humidity : ${data.main.humidity}%`;
        desc.textContent = `Description ${data.weather[0].description}`;

fetch(forecastUrl)
.then((response)=> response.json())
.then((forecastData)=>{
   displayForeCast(forecastData);
})
}).catch((error)=>{
      alert("Error fetching weather data",error)
})
}

function displayForeCast(forecastData){
   
    forecastL.innerHTML = "";

    for(let i = 0;i<forecastData.list.length;i+=8){
        const dayForeCast = forecastData.list[i];
        const listItem = document.createElement("li")
        listItem.textContent = `${new Date(dayForeCast.dt*1000).toLocaleString()} - ${dayForeCast.main.temp}°C - ${dayForeCast.weather[0].description}`

        forecastL.appendChild(listItem)
    }
    
}
// query paramstring -> key and value pair