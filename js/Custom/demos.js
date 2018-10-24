//Audio Files
var demo11;
var demo2;
var demo3;
//Audio Files*
function setUpDemos(){
	demo11 = loadSound("demo1","assets/sample_audio.mp3",robotMesh);
}

function demo1(inp){
	console.log(inp);
	if (inp == "idle"){
		speak("idling");
	}else if (inp == "walk"){
		speak("I don't seem to understand what you're saying?")
	}else if ("run"){
		demo11.play();
	}else{
		speak(inp);
	}
}