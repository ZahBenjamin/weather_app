const app_key = "673915a845190fbcf5deefda622274f1";
// var issueContainer = $('#issues');
const formContainerEl = document.querySelector('#formContainer');
const inputTextEl = document.querySelector('#inputText');
const searchBtnEl = document.querySelector('#searchBtn');
const searchLogEl = document.querySelector('#searchLogPlaceholder');
const weatherEl = document.querySelector('#weatherPlaceholder');
const fiveDayEl = document.querySelector('#fiveDayPlaceholder');


function getApi() {
  var requestUrl = 'api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=' + app_key;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    }
    
    .catch(function (err) {
      console.log(err);
    });
}

fetchButton.addEventListener('click', getApi);


  // sample loop below
      // for (var i = 0; i < data.length; i++) {

      //   //1 Make a piece of HTML!!
      //   var userName = $('<h3>')
      //   var issueTitle = $('<p>');

      //   //2 DRESS that html up how you want it!!
      //   userName.text(data[i].user.login)
      //   issueTitle.text(data[i].title)
        

      //   // //3 Chuck that piece of html onto the page!!!
      //   issueContainer.append(userName);
      //   issueContainer.append(issueTitle);

      // }