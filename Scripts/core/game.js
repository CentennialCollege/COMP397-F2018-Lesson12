//IIFE - Immediately Invoked Function Expression
(function () {
    // game variables
    var canvas;
    var stage;
    var helloLabel;
    var clickMeButton;
    function Start() {
        console.log("%c Game Started...", "color: blue; font-size: 20px;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // game will run at 60fps
        createjs.Ticker.on("tick", Update);
        Main();
    }
    // this is the main game loop
    function Update() {
        stage.update();
    }
    function Main() {
        helloLabel = new objects.Label("Hello, World!", "60px", "Consolas", "#00000", 320, 240, true);
        stage.addChild(helloLabel);
        clickMeButton = new objects.Button("/Assets/images/clickMeButton.png", 320, 360, true);
        stage.addChild(clickMeButton);
        clickMeButton.on("click", function () {
            helloLabel.text = "Clicked!";
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=game.js.map