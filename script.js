// var issueContainer = $('#issues');
const formContainerEl = document.querySelector('#formContainer');
const inputTextEl = document.querySelector('#inputText');
const searchBtnEl = document.querySelector('#searchBtn');
const searchLogEl = document.querySelector('#searchLogPlaceholder');
const weatherEl = document.querySelector('#weatherPlaceholder');
const fiveDayEl = document.querySelector('#fiveDayPlaceholder');
// let currentDay = moment().format("MMMM Do YYYY, h:mm:ss a");
// put currentDay on index

const api_key = "673915a845190fbcf5deefda622274f1";
let lat = '34.009289';
let lon = '-81.037086';
var units = '&units=imperial'


// function for current city selected
// figure out lat/long var for city selected
function getOnecall() {
  let onecallURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + api_key + units;
  
  fetch(onecallURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // data here
      // put city name ?
      let temp = (data.current.temp);
      let wind = (data.current.wind_speed);
      let humidity = (data.current.humidity);
      let uv = (data.current.uvi);
      // improve UVI, place data in html. jquery or link to stuff in index?

      
    })
    .catch(function (err) {
      console.log(err);
    });
}
console.log(getOnecall());


// 5 day forecast
function getForecast() {
  let forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + api_key + units;
  
  fetch(forecastURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // data here
      let temp = (data.current.temp);
      let wind = (data.current.wind_speed);
      let humidity = (data.current.humidity);
      // UVI not needed in 5day forecast, place data in html. make array/loop/itterate data for position?

      
    })
    .catch(function (err) {
      console.log(err);
    });
}
