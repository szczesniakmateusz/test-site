// Image switcher code
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/tree.png') {
      myImage.setAttribute ('src','images/tree2.png');
    } else {
      myImage.setAttribute ('src','images/tree.png');
    }
}

//Personalized welcome message code
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Take care of trees, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Take care of trees, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}