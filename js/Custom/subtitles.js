//http://playground.babylonjs.com/#HSVQL
//http://www.html5gamedevs.com/topic/10917-2d-text-on-screen/
var textDiv;

function setUpSubtitles(){
    textDiv = document.createElement("div"); 
    var textNode = document.createTextNode(""); 
    textDiv.appendChild(textNode);
 
    textDiv.style.position= 'absolute';
    textDiv.style.left= '25%';
    textDiv.style.right= '25%';
    textDiv.style.top= '70%';
    textDiv.style.textAlign='center';
    textDiv.style.fontSize= '25px';
    textDiv.style.fontFamily = 'Arial, Helvetica, sans-serif';
    textDiv.style.color = 'white';
    document.body.appendChild(textDiv);
}

function updateSubtitles(textStr) {
    textDiv.textContent = textStr;
}