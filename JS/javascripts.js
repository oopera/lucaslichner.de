//These should probably only be initialized in Function, but this was easier at the time. 
const fadein = document.getElementById('fadein');
const introScreen = document.getElementById('introcard');
const aboutMe = document.getElementById('aboutMe');
const digIllus = document.getElementById('digIllus');
const sofDev = document.getElementById('sofDev');
const grafDes = document.getElementById('grafDes');
const illusPort = document.getElementById('Illustrations');
const graphicPort = document.getElementById('GraphicDesign');
const sofPort = document.getElementById('SoftwareDevelopment');
const email = document.getElementById('Email');
const container = document.getElementById('pageContainer');
const container = document.getElementById('bawdy');
const sidey = document.querySelector('.Sideinfo');


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
	}else{
		sofDev.classList.remove('display');
				digIllus.classList.remove('display');
						grafDes.classList.remove('display');
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
	sofPort.classList.remove('display');
	if(element.classList.contains('display') == false){

		container.classList.add('scrollable');
			if(elementToChange == 'Illustrations'){
				document.getElementById('GraphicDesign').classList.remove('display');
			}else{
				document.getElementById('Illustrations').classList.remove('display');
			}
			element.classList.add('display');

	}else{
		sofPort.classList.remove('display');
		element.classList.remove('display');
		container.classList.remove('scrollable');
				container.scrollTo({
 				top: 0,
  				behavior: 'smooth',
				});
		}
	}


/* <div class="topNav">
       <p style="text-decoration: underline;" class="paragraph" onclick="changePageContainerElement('Illustrations')"> <- Illustration</p> &nbsp;   <p  style="text-decoration: underline;" class="paragraph" onclick="changePageContainerElement('GraphicDesign')"> Grafikdesign -></p> 
    </div> */
