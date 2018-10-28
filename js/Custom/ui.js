function setUpUI(){
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    var UiPanel = new BABYLON.GUI.StackPanel();
    UiPanel.width = "220px";
    UiPanel.fontSize = "14px";
    UiPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    UiPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
    advancedTexture.addControl(UiPanel);
    // ..
    var button = BABYLON.GUI.Button.CreateSimpleButton("but1", "Demo 1");
    button.paddingTop = "10px";
    button.width = "100px";
    button.height = "50px";
    button.color = "white";
    button.background = "green";
    button.onPointerDownObservable.add(()=> {
        demo1();
    });
    UiPanel.addControl(button);
    // ..
    var button1 = BABYLON.GUI.Button.CreateSimpleButton("but2", "Demo 2");
    button1.paddingTop = "10px";
    button1.width = "100px";
    button1.height = "50px";
    button1.color = "white";
    button1.background = "green";
    button1.onPointerDownObservable.add(()=> {
        demo2();
    });
    UiPanel.addControl(button1);
    // ..
    var button1 = BABYLON.GUI.Button.CreateSimpleButton("but3", "Demo 3");
    button1.paddingTop = "10px";
    button1.width = "100px";
    button1.height = "50px";
    button1.color = "white";
    button1.background = "green";
    button1.onPointerDownObservable.add(()=> {
        demo3();
    });
    UiPanel.addControl(button1);
    // ..
    var button1 = BABYLON.GUI.Button.CreateSimpleButton("but4", "Live Demo");
    button1.paddingTop = "10px";
    button1.width = "100px";
    button1.height = "50px";
    button1.color = "white";
    button1.background = "green";
    button1.onPointerDownObservable.add(()=> {
        liveDemo();
    });
    UiPanel.addControl(button1);
}

var KeyUp = function (evt){
    if (evt.keyCode == 27) {
        speechQue = [];
    }//Escape key
}
document.addEventListener("keyup", KeyUp);