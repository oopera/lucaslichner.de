const fadein = document.getElementById('fadein');
const introScreen = document.getElementById('introcard');
const aboutMe = document.getElementById('aboutMe');
const digIllus = document.getElementById('digIllus');
const sofDev = document.getElementById('sofDev');
const ui = document.getElementById('ui');
const grafDes = document.getElementById('grafDes');
const illusPort = document.getElementById('Illustrations');
const graphicPort = document.getElementById('GraphicDesign');
const sofPort = document.getElementById('SoftwareDevelopment');
const email = document.getElementById('Email');
const container = document.getElementById('pageContainer');
const body = document.getElementById('bawdy');
const sidey = document.querySelector('.Sideinfo');
const abootme = document.querySelector('.abootme');

window.onbeforeunload = function () {
	window.scrollTo(0, 0);

  }

document.addEventListener('DOMContentLoaded', (e)=>{
	setTimeout(()=>{
		introScreen.classList.add('display-none');
	},2500);
}) 

function displayOptions(){
	if(sofDev.classList.contains('display') == false){
		sofDev.classList.add('display');
				digIllus.classList.add('display');
						grafDes.classList.add('display');
							ui.classList.add('display');
	}else{
		sofDev.classList.remove('display');
				digIllus.classList.remove('display');
						grafDes.classList.remove('display');
							ui.classList.remove('display');
		window.scrollTo(0, 0);
	}
}

function displaySof(){
	if(sofPort.classList.contains('display') == false){
		container.scrollTo(0, 0);
		container.classList.remove('scrollable');
		illusPort.classList.remove('display');
		graphicPort.classList.remove('display');
		sofPort.classList.add('display')
		aboutMe.classList.remove('display');
		email.classList.remove('display');
	}else{
		window.scrollTo(0, 0);
		sofPort.classList.remove('display');
	}
}



function displayAboutMe(){
	if(aboutMe.classList.contains('display') == false){
		aboutMe.classList.add('display');
	}else{
		aboutMe.classList.remove('display');
		email.classList.remove('display');
	}
}


function displayAbootMe(){
	if(abootme.classList.contains('display') == false){
		abootme.classList.add('display');
		illusPort.classList.remove('display');
		graphicPort.classList.remove('display');
		sofPort.classList.remove('display')
	}else{
		abootme.classList.remove('display');
		abootme.classList.remove('display');
	}
}

function hamburgerMenu(){
	const heado = document.querySelector('.Header-Container');
	const text = document.querySelector('.hamburger');
	if(heado.classList.contains('menu') == false){
		heado.classList.add('menu');
		text.innerHTML = "close";
	}else{
		heado.classList.remove('menu');
		text.innerHTML = "open";
	}
}



function displayEmail(){
	if(email.classList.contains('display') == false){
		email.classList.add('display');
	}else{
		email.classList.remove('display');
	}
}



function lightmode(){
var lightSwitch = document.getElementById('switch').innerHTML;
var switchoo = document.getElementsByClassName('paragraph');
var heading = document.getElementById('headertext');
var headerbox = document.getElementsByClassName("Header-Container");
if(lightSwitch == "light"){
	document.getElementById('switch').innerHTML = 'dark';
	body.classList.add('dark');
	heading.classList.add('dark');
	headerbox[0].classList.add('dark');
for (let i = 0; i < switchoo.length; i++) {
    switchoo[i].style.color = 'white' 
}}else{
	document.getElementById('switch').innerHTML = 'light';
	body.classList.remove('dark');
	heading.classList.remove('dark');
	headerbox[0].classList.remove('dark');
	for (let i = 0; i < switchoo.length; i++) {
		switchoo[i].style.color = 'black' 
	}
}}



function changePageContainerElement(elementToChange){
	var element = document.getElementById(elementToChange);
			
	if(element.classList.contains('display') === false){
			element.classList.add('display');

	}else{
		sofPort.classList.remove('display');
		element.classList.remove('display');
		container.classList.remove('scrollable');
		sofPort.classList.remove('display');
		abootme.classList.remove('display');
		document.getElementById('GraphicDesign').classList.remove('display');
		document.getElementById('Illustrations').classList.remove('display');
				container.scrollTo({
 				top: 0,
  				behavior: 'smooth',
				});
		}
	}


