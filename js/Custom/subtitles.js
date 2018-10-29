//http://playground.babylonjs.com/#HSVQL
//http://www.html5gamedevs.com/topic/10917-2d-text-on-screen/
var botTextDiv;
var humTextDiv;
var curTextDiv;
var fadeTimeout;

function setUpSubtitles(){
    botTextDiv = document.createElement("div");
    humTextDiv = document.createElement("div");

    botTextDiv.setAttribute("id", "botTextDiv");
    humTextDiv.setAttribute("id", "humTextDiv");

    var textNode = document.createTextNode(""); 
    botTextDiv.appendChild(textNode);
    humTextDiv.appendChild(textNode);
 
    botTextDiv.style.position= 'absolute';
    botTextDiv.style.left= '25%';
    botTextDiv.style.right= '25%';
    botTextDiv.style.top= '75%';
    botTextDiv.style.textAlign='center';
    botTextDiv.style.fontSize= '18px';
    botTextDiv.style.fontFamily = 'Arial, Helvetica, sans-serif';
    botTextDiv.style.color = '#33adff';

    humTextDiv.style.position= 'absolute';
    humTextDiv.style.left= '25%';
    humTextDiv.style.right= '25%';
    humTextDiv.style.top= '83%';
    humTextDiv.style.textAlign='center';
    humTextDiv.style.fontSize= '25px';
    humTextDiv.style.fontFamily = 'Arial, Helvetica, sans-serif';
    humTextDiv.style.color = 'white';

    document.body.appendChild(botTextDiv);
    document.body.appendChild(humTextDiv);
}

function updateSubtitles(type, textStr) {
    var divElement = null;

    if (type == 1) {
        divElement = botTextDiv;
    } else {
        divElement = humTextDiv;
    }

    if (curTextDiv == divElement) {
        clearTimeout(fadeTimeout);
    }

    curTextDiv = divElement;

    curTextDiv.style.opacity = 1;
    curTextDiv.textContent = textStr;
}


function timeToFadeOut(divElement) {
    fadeTimeout = setTimeout(function() {fadeOutEffect(divElement)}, 750);
}

function fadeOutEffect(divElement) {
    var fadeEffect = setInterval(function () {
        if (!divElement.style.opacity) {
            divElement.style.opacity = 1;
        }
        if (divElement.style.opacity > 0) {
            divElement.style.opacity -= 0.10;
        } else {
            clearInterval(fadeEffect);
        }
    }, 25);
}