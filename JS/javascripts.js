const introScreen = document.getElementById('introcard');
const graphicPort = document.getElementById('GraphicDesign');
const illusPort = document.getElementById('Illustrations');
const aboutMe = document.getElementById('aboutMe');
const digIllus = document.getElementById('digIllus');
const digIllus2 = document.getElementById('digIllus2');
const grafDes = document.getElementById('grafDes');
const grafDes2 = document.getElementById('grafDes2');
const body = document.getElementById('bawdy');

window.onbeforeunload = function () {
	window.scrollTo(0, 0);
  }

document.addEventListener('DOMContentLoaded', (e)=>{
	setTimeout(()=>{
		introScreen.classList.add('display-none');
		illusPort.classList.add('display');
		illusPort.classList.remove('display');

	},2000);
})

function displayOptions(){
	if(digIllus.classList.contains('display') == false){
		digIllus.classList.add('display');
		digIllus2.classList.add('dont-display');
		grafDes.classList.add('display');
		grafDes2.classList.add('dont-display');
	}else{
		body.classList.remove('scrollable');
		digIllus.classList.remove('display');
		digIllus2.classList.remove('dont-display');
		grafDes.classList.remove('display');
		grafDes2.classList.remove('dont-display');
		graphicPort.classList.remove('display');
		illusPort.classList.remove('display');
	}
}


function displayGraphic(){
	if(graphicPort.classList.contains('display') == false){
		body.classList.add('scrollable');
		illusPort.classList.remove('display');
		graphicPort.classList.add('display');
	}else{
		graphicPort.classList.remove('display');
		body.classList.remove('scrollable');
	}
}


function displayIllus(){

	if(illusPort.classList.contains('display') == false){
		body.classList.add('scrollable');
		graphicPort.classList.remove('display');
		illusPort.classList.add('display');
	}else{
		illusPort.classList.remove('display');
		body.classList.remove('scrollable');
	}
}



function displayAboutMe(){
	if(aboutMe.classList.contains('display') == false){
		aboutMe.classList.add('display');
	}else{
		aboutMe.classList.remove('display');
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
	headerbox[0].style.borderColor  = 'white';
for (let i = 0; i < switchoo.length; i++) {
    switchoo[i].style.color = 'white' 
}}else{
	document.getElementById('switch').innerHTML = 'light';
	body.classList.remove('dark');
	heading.classList.remove('dark');
	headerbox[0].style.borderColor  = 'black';
	for (let i = 0; i < switchoo.length; i++) {
		switchoo[i].style.color = 'black' 
	}
}}

