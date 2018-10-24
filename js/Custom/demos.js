function demo1(inp){
	console.log(inp);
	if (inp == "idle"){
		speak("idling");
	}else if (inp == "walk"){
		speak("Walking")
	}else{
		speak(inp);
	}
}