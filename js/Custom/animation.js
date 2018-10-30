function robotIdle(loop=true,speed=1){
    if(robotAnimations){
        robotAnimations[0].start(loop,speed);
    }
}

function robotCompute(loop=false,speed=1){
    if(robotAnimations){
        robotAnimations[1]._from=4;
        robotAnimations[1].start(loop,speed);
        animationActive = true;
    }
}

function robotError(loop=false,speed=1){
    if(robotAnimations){
        robotAnimations[2]._from=6;
        robotAnimations[2].start(loop,speed);
        animationActive = true;
    }
}

function robotLove(loop=false,speed=1){
    if(robotAnimations){
        robotAnimations[3]._from = 8;
        robotAnimations[3].start(loop,speed);
        animationActive = true;
    }
}

function robotAlert(loop=false,speed=1){
    if(robotAnimations){
        robotAnimations[4]._from=11;
        robotAnimations[4].start(loop,speed);
        animationActive = true;
    }
}


function isAnimationRunning(){//other than idle
    for (var i in robotAnimations){
        if (i == 0){
            continue;
        }
        if (robotAnimations[i].isStarted){
            return true;
        }
    }
    return false;
}

function stopCurrentAnimation(){
    for (var i in robotAnimations){
        if (robotAnimations[i].isStarted){
            robotAnimations[i].stop();
        }
    }
}