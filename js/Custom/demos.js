//Audio Files
var audio1;
//Audio Files*
function setUpDemos(){
	audio1 = loadSound("demo1","assets/sample_audio.mp3",robotMesh);
}

function demo1(){
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

function liveDemo(){
	if (speaking){
		return ;
	}
}