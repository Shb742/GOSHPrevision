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
	msg.onend = function(e) {
		speaking = false;
  		console.log('Finished in ' + event.elapsedTime + ' seconds.');
	};
	window.speechSynthesis.onvoiceschanged = function() {
		voices = window.speechSynthesis.getVoices();
		speak("Hi I am MedicalBot, Nice to meet you");
	}
	
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
	while(speaking){await sleep(100);}
	speaking = true;
	msg.pitch = pitch;
	msg.voice = voices[voice]; // Note: some voices don't support altering params, 6 is asian, 9 mediteranian, 10 - british child
	msg.text = message ;
	speechSynthesis.speak(msg);
	/*var msg = new SpeechSynthesisUtterance('Hello World');
	window.speechSynthesis.speak(msg);*/
}