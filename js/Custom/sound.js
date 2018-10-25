var msg;
var voices;
var speaking = false;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function loadSpeech(){
	msg = new SpeechSynthesisUtterance();
	msg.lang = 'en-US';
	msg.voiceURI = 'native';
	msg.volume = 1; // 0 to 1
	msg.rate = 0.85; // 0.1 to 10
	msg.pitch = 1.45; //0 to 2
	msg.onend = function(event) {
		console.log(msg);
		speaking = false;
		console.log(speaking);
		//console.log('Finished in ' + event.elapsedTime + ' seconds.');
	};
	var loadVoices = function() {
		voices = window.speechSynthesis.getVoices();
		speak("Hi I am MedicalBot, Nice to meet you");
	}
	if ((!!window.chrome)==false){
		loadVoices();
	}
	window.speechSynthesis.onvoiceschanged = function() {
		loadVoices();
	}

	
	//setUpSpeechRec();
}

function loadSound(name,url,meshh){
	var sound = new BABYLON.Sound(name, url, scene, function () {
	if (meshh != ""){
		// Sound will now follow the mesh position
    	sound.attachToMesh(meshh);
	}
    //console.log("Sound ready to be played!");
	}, { loop: false, autoplay: false });
	return sound;
}


async function speak(message,voice=10, pitch=1.45){
	console.log("meh");
	console.log(speaking);
	while(speaking){await sleep(100);}
	console.log("hereee");
	speaking = true;
	msg.pitch = pitch;
	msg.voice = voices[voice]; // Note: some voices don't support altering params, 6 is asian, 9 mediteranian, 10 - british child
	msg.text = message ;
	console.log("hereeee1");
	console.log(msg);
	window.speechSynthesis.speak(msg);
	/*Simplest example - var msg = new SpeechSynthesisUtterance('Hello World');
	window.speechSynthesis.speak(msg);*/
}




//Speech recognition

var recognition;
var speechRecognitionList
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent





function setUpSpeechRec(continuous=false,words=[]){
	recognition = new SpeechRecognition();
	//Takes a word list if one is supplied
	if (words.length > 0){
		speechRecognitionList = new SpeechGrammarList();
		var grammar = '#JSGF V1.0; grammar colors; public <words> = ' + words.join(' | ') + ' ;'
		speechRecognitionList.addFromString(grammar, 1);
		recognition.grammars = speechRecognitionList;
	}
	//Takes a word list if one is supplied*
	recognition.lang = 'en-US';
	recognition.interimResults = false;//Defines whether the speech recognition system should return interim results, or just final results.
	recognition.maxAlternatives = 1;//Sets the number of alternative potential matches that should be returned per result. This can sometimes be useful, say if a result is not completely clear and you want to display a list if alternatives for the user to choose the correct one from.	recognition.continuous = continuous;
	//recognition.start();
	recognition.onresult = function(event) {
		var last = event.results.length - 1;
		var color = event.results[last][0].transcript;
		console.log(color);
		console.log('Confidence: ' + event.results[0][0].confidence);
		recognition.stop();
	}


}
















