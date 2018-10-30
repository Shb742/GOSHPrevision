var recognizing;
//Audio Files
var audio1;
//Audio Files*
function setUpDemos(){
	//audio1 = loadSound("demo1","assets/sample_audio.mp3",robotMesh);
}

function testForSubstring(substrings, result){
	var matches = 0;
    var length = substrings.length;
	while(length--) {
	   if (result.indexOf(substrings[length])!=-1) {
	       matches +=1;
	   }
	}
	return matches*4;
}

async function demo1(){
	if (speaking){
		return ;
	}
	speak("I am going to pretend to be a 5 year old child who you have just diagnosed with asthma.",0,1,1);
	speak("Please explain to me what asthma is ?",10);
		speak("Hi MedicalBot, asthma is a problem some people have, it makes it difficult for them to breathe. But you don't have to be afraid, if you take your medicine when you feel uneasy everything will be ok.",7,1,0.95);
	speak("What is an inhaler ?",10);
		speak("An inhaler is the thing that has your medicine, if you press on the top of it and breathe in, that will make you feel better.",7,1,0.95);
	speak("When should I use it ?",10);
		speak("You should use it when you find it hard to breathe.",7,1,0.9);
	speak("Thank you for completing the exercise with me, you did well. You achieved a score of 10 out of 10, I have no further advice for you.",0,1,1);

}


function demo2(){
	if (speaking){
		return ;
	}
	speak("I am going to pretend to be a 5 year old child who you have just diagnosed with asthma.",0,1,1);
	speak("Please explain to me what asthma is ?",10);
		speak("Hi MedicalBot, Asthma is a common long-term inflammatory disease of the airways of the lungs. Symptoms include episodes of wheezing, coughing, chest tightness, and shortness of breath.",7,1,0.95);
	speak("I am sorry I did not understand what you were saying ? ",10);
	speak("Thank you for carrying out this exercise with me, you need to improve on diction when communicating with children. You achieved a score of 2 out of 10.",0,1,1);
}

function demo3(){
	if (speaking){
		return ;
	}
	audio1.play();
	
}

async function listen(){
	recognition.start();
	recognizing = true;
	mic_active.style = "opacity:1;";
	stopCurrentAnimation();
	robotCompute(true);
	while(recognizing){await sleep(100);}//wait for speaker to finish
	stopCurrentAnimation();
	robotIdle(true);
}

async function liveDemo(){
	if (speaking){
		return ;
	}
	recognizing = false;
	var state = 0;
	var points = 30;
	var BadList = ["condition","patient","disease","death","die","inflam","symptoms","airways","long term","long-term","biotic","steroid","histamine","irritant","nebulizer",
	"puffer", "managed"];
	var GoodList = ["difficult","uneasy","don't worry","calm down", "dont worry", "dont be afraid","good","better","happy","alright","ok","thing","hard","breathe", "care of"];
	recognition.onresult = function(event) {
		var last = event.results.length - 1;
		var result = event.results[last][0].transcript;
		result = result.toLowerCase();
		console.log(result);
		console.log('Confidence: ' + event.results[0][0].confidence);
		updateSubtitles(2, result);
		timeToFadeOut(curTextDiv,1300);
		recognition.stop();
		mic_active.style = "opacity:0.5;animation: none;";
		recognizing = false;
		points += testForSubstring(GoodList,result);
		points -= testForSubstring(BadList,result);
		if (state == 0){
			if (result.includes("asthma is")){
				points += 10;
			}
			if (result.includes("hard to breathe") || result.includes("difficult to breathe")) {
				points += 5;
			}
		}
		if (state == 1){
			if (result.includes("has medicine")){
				points += 5;
			}
			if (result.includes("helps you breathe")){
				points += 5;
			}
		}
		if (state == 2){
			if (result.includes("hard to breathe") || result.includes("difficult to breathe")) {
				points += 5;
			}
			if (result.includes("you will be")){
				points += 2;
			}
		}
		console.log(points);
		state +=1;
	}


	speak("I am going to pretend to be a 5 year old child who you have just diagnosed with asthma.",0,1,1);
	speak("Please explain to me what asthma is ?",10);
	while(speaking){await sleep(100);}//wait for speach to finish
	await listen();
	speak("What is an inhaler ?",10);
	while(speaking){await sleep(100);}//wait for speach to finish
	await listen();
	speak("When should I use it ?",10);
	while(speaking){await sleep(100);}//wait for speach to finish
	await listen();
	points = Math.min(parseInt(Math.round(points/10)),10);
	speak("Thank you for completing the exercise with me. You achieved a score of "+points+" out of 10",0,1,1);

}