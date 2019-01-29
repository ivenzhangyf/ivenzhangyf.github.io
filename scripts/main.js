var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/Nissan_GTR.jpg'){
		myImage.setAttribute('src','images/nissan.jpg');
	}else{
		myImage.setAttribute('src','images/Nissan_GTR.jpg');
	}
}



var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'See new attributes of 2019 GTR, ' + myName;
}


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'See new attributes of 2019 GTR, ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}
