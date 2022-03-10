// var issueContainer = $('#issues');
const formContainerEl = document.querySelector('#formContainer');
const inputTextEl = document.querySelector('#inputText');
const searchBtnEl = document.querySelector('#searchBtn');
const searchLogEl = document.querySelector('#searchLogPlaceholder');
const weatherEl = document.querySelector('#weatherPlaceholder');
const fiveDayEl = document.querySelector('#fiveDayPlaceholder');
// let currentDay = moment().format("MMMM Do YYYY, h:mm:ss a");
// put currentDay on index
var city = [];
var currentCity = [];

const api_key = "673915a845190fbcf5deefda622274f1";
let lat = '34.009289';
let lon = '-81.037086';
var units = '&units=imperial'




// function for current city selected
// improve UVI, place data in html. jquery or link to stuff in index?
function getOnecall() {
  let onecallURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + api_key + units;
  
  fetch(onecallURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // data here
    let temp = data.current.temp;
    let wind = data.current.wind_speed;
    let humidity = data.current.humidity;
    let uvi = data.current.uvi;  
    // console.log('TEMP', temp);
    // console.log('WIND', wind);
    // console.log('HUMIDITY', humidity);
    // console.log('UV INDEX', uvi);
  })
  .catch(function (err) {
    console.log(err);
  });
};
// console.log(getOnecall());


// 5 day forecast
// UVI not needed in 5day forecast, place data in html. make array/loop/itterate data for position?
function getForecast() {
  let forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + api_key + units;
  
  fetch(forecastURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // data here
    let temp = data.current.temp;
    let wind = data.current.wind_speed;
    let humidity = data.current.humidity;
  })
  .catch(function (err) {
    console.log(err);
  });
};



//  Getting city input
var geoHandler = function (city) {
  var geoURL = 'http://api.openweathermap.org/geo/1.0/direct?q=London' + '&appid=' + api_key;
  fetch(geoURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var lat = data[0].lat;
    var lon = data[0].lon;
    console.log('LAT HERE', lat);
    console.log('LONG HERE', lon);

  })
  .catch(function (err){
    console.log(err);
  });
};
console.log(geoHandler());

// submission handler / localStorage
var formSubmitHandler = function (event) {
  event.preventDefault();

  if (cityName) {
    geoHandler(cityName);
    // geoHistoryLog(cityName);
  }
};