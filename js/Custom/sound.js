var voices;
var speaking = false;
var onEnd;
var msg;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function loadSpeech(){
	try {
	onEnd = function(event) {
		speaking = false;
		console.log('Finished in ' + event.elapsedTime + ' seconds.');
	};
	var loadVoices = function() {
		voices = window.speechSynthesis.getVoices();
		speak("Hi I am MedicalBot, Nice to meet you!");
	}
	if ((!!window.chrome)==false){
		loadVoices();
	}
	window.speechSynthesis.onvoiceschanged = function() {
		loadVoices();
	}

	setUpSpeechRec();
	} catch(err) { }
}

function loadSound(name,url,meshh){
	try{
	var sound = new BABYLON.Sound(name, url, scene, function () {
	if (meshh != ""){
		// Sound will now follow the mesh position
    	sound.attachToMesh(meshh);
	}
    //console.log("Sound ready to be played!");
	}, { loop: false, autoplay: false });
	return sound;
	} catch(err) { }
}


async function speak(message,voice=10, pitch=1.45, rate=0.9){
	try{
	while(speaking){await sleep(100);}
	speaking = true;
	msg = new SpeechSynthesisUtterance();
	msg.lang = 'en-US';
	msg.voiceURI = 'native';
	msg.volume = 1; // 0 to 1
	msg.rate = rate; // 0.1 to 10
	msg.pitch = pitch;
	msg.onend = onEnd;
	msg.voice = voices[voice]; // 6 is asian, 9 mediteranian/Dutch, 10 - Bot, 7 - Doctor*
	msg.text = message ;
	window.speechSynthesis.speak(msg);
	} catch(err) { }
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
	try{
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
	} catch(err) { }
}

