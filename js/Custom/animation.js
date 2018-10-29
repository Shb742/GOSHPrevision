var idleAnim;
var idleTwirlAnim;
var idleTwistAnim;
var confusedAnim;
var noAnim;
var yesAnim;
var twirlAnim;
var twistAnim;
var idling = true;
function setUpAnimations(){
    idleAnim = robotMesh.getAnimationRange("idle");
    idleTwirlAnim = robotMesh.getAnimationRange("idlespinY");
    idleTwistAnim = robotMesh.getAnimationRange("idlespinZ");
    confusedAnim = robotMesh.getAnimationRange("confused");
    noAnim = robotMesh.getAnimationRange("no");
    yesAnim = robotMesh.getAnimationRange("yes");
    twirlAnim = robotMesh.getAnimationRange("spinY");
    twistAnim = robotMesh.getAnimationRange("spinZ");
    //scene.animationTimeScale += 0.1;
    // IDLE
    if (idleAnim) scene.beginWeightedAnimation(robotMesh, idleAnim.from, idleAnim.to, 0.2, true);
    //if (idleAnim) scene.beginAnimation(robotMesh, idleAnim.from, idleAnim.to, true);
           
    /*// UI
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    var UiPanel = new BABYLON.GUI.StackPanel();
    UiPanel.width = "220px";
    UiPanel.fontSize = "14px";
    UiPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    UiPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
    advancedTexture.addControl(UiPanel);
    // ..
    var button = BABYLON.GUI.Button.CreateSimpleButton("but1", "Play Idle");
    button.paddingTop = "10px";
    button.width = "100px";
    button.height = "50px";
    button.color = "white";
    button.background = "green";
    button.onPointerDownObservable.add(()=> {
        if (idleRange) scene.beginAnimation(robotSkeleton, idleRange.from, idleRange.to, true);
    });
    UiPanel.addControl(button);
    // ..
    var button1 = BABYLON.GUI.Button.CreateSimpleButton("but2", "Play Walk");
    button1.paddingTop = "10px";
    button1.width = "100px";
    button1.height = "50px";
    button1.color = "white";
    button1.background = "green";
    button1.onPointerDownObservable.add(()=> {
        if (walkRange) scene.beginAnimation(robotSkeleton, walkRange.from, walkRange.to, true);
    });
    UiPanel.addControl(button1);
    // ..
    var button1 = BABYLON.GUI.Button.CreateSimpleButton("but3", "Play Run");
    button1.paddingTop = "10px";
    button1.width = "100px";
    button1.height = "50px";
    button1.color = "white";
    button1.background = "green";
    button1.onPointerDownObservable.add(()=> {
        if (runRange) scene.beginAnimation(robotSkeleton, runRange.from, runRange.to, true);
    });
    UiPanel.addControl(button1);
    // ..
    var button1 = BABYLON.GUI.Button.CreateSimpleButton("but4", "Play Left");
    button1.paddingTop = "10px";
    button1.width = "100px";
    button1.height = "50px";
    button1.color = "white";
    button1.background = "green";
    button1.onPointerDownObservable.add(()=> {
        if (leftRange) scene.beginAnimation(robotSkeleton, leftRange.from, leftRange.to, true);
    });
    UiPanel.addControl(button1);
    // ..
    var button1 = BABYLON.GUI.Button.CreateSimpleButton("but5", "Play Right");
    button1.paddingTop = "10px";
    button1.width = "100px";
    button1.height = "50px";
    button1.color = "white";
    button1.background = "green";
    button1.onPointerDownObservable.add(()=> {
        if (rightRange) scene.beginAnimation(robotSkeleton, rightRange.from, rightRange.to, true);
    });
    UiPanel.addControl(button1);
    // ..
    var button1 = BABYLON.GUI.Button.CreateSimpleButton("but6", "Play Blend");
    button1.paddingTop = "10px";
    button1.width = "100px";
    button1.height = "50px";
    button1.color = "white";
    button1.background = "green";
    button1.onPointerDownObservable.add(()=> {
        if (walkRange && leftRange) {
            scene.stopAnimation(robotSkeleton);
            var walkAnim = scene.beginWeightedAnimation(robotSkeleton, walkRange.from, walkRange.to, 0.5, true);
            var leftAnim = scene.beginWeightedAnimation(robotSkeleton, leftRange.from, leftRange.to, 0.5, true);

            // Note: Sync Speed Ratio With Master Walk Animation
            walkAnim.syncWith(null);
            leftAnim.syncWith(walkAnim);
        }
    });
    UiPanel.addControl(button1);*/
}