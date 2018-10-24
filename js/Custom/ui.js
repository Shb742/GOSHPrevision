function setUpUI(){
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
        demo1("idle");
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
        demo1("walk");
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
        demo1("run");
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
        demo1("left");
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
        demo1("right");
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
        demo1("blend left and walk");
    });
    UiPanel.addControl(button1);
}