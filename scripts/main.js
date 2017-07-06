var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/penguin.jpg') {
      myImage.setAttribute ('src','images/penguin2.jpg');
    } else {
      myImage.setAttribute ('src','images/penguin.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myButton.onclick = function() {
  setUserName();
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'This is Merp the penguin, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'This is Merp the penguin, ' + storedName;
}
