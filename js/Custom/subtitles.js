var textDiv;

function setUpSubtitle(){
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

function updateSubtitle(textStr) {
    textDiv.textContent = textStr;
}