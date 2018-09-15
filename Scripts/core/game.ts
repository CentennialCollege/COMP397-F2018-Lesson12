//IIFE - Immediately Invoked Function Expression
(function(){
    // game variables
    let canvas:HTMLCanvasElement;
    let stage:createjs.Stage;
    let helloLabel:objects.Label;
    let clickMeButton:objects.Button;

    function Start():void {
        console.log(`%c Game Started...`,"color: blue; font-size: 20px;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // game will run at 60fps
        createjs.Ticker.on("tick", Update);
        Main();
    }

    // this is the main game loop
    function Update():void {

        stage.update();
    }

    function Main():void {
        helloLabel = new objects.Label("Hello, World!","60px", "Consolas", "#00000",320,240, true);
        stage.addChild(helloLabel);

        clickMeButton = new objects.Button("/Assets/images/clickMeButton.png", 320, 360, true);
        stage.addChild(clickMeButton);

        clickMeButton.on("click", function() {
            helloLabel.text = "Clicked!";
        });

    }

    window.addEventListener("load", Start);
})();