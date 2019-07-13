var url = 'https://official-joke-api.appspot.com/random_joke'
var button = document.getElementById('show-joke');
var paragraph = document.getElementById('joke');
var paragraph1 = document.getElementById('joke1');

button.addEventListener('click', function(){
  showJoke();
});

(function() {
  showJoke();
})();

function showJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.setup;
    paragraph1.innerHTML = response.punchline;
  });
  xhr.send();
};