//IIFE - Immediately Invoked Function Expression
(function () {
    // game variables
    var canvas;
    var stage;
    var assetManager;
    var currentScene;
    var currentState;
    var scoreBoard;
    var textureData = {
        images: ["./Assets/sprites/texturemap.png"],
        frames: [
            [1, 1, 16, 16, 0, 0, 0],
            [19, 1, 226, 178, 0, 0, 0],
            [247, 1, 39, 40, 0, 0, 0],
            [288, 1, 32, 40, 0, 0, 0],
            [322, 1, 23, 40, 0, 0, 0],
            [347, 1, 15, 40, 0, 0, 0],
            [364, 1, 10, 40, 0, 0, 0],
            [376, 1, 15, 40, 0, 0, 0],
            [393, 1, 24, 40, 0, 0, 0],
            [419, 1, 32, 40, 0, 0, 0],
            [453, 1, 40, 40, 0, 0, 0],
            [1, 181, 41, 40, 0, 0, 0],
            [44, 181, 93, 74, 0, 0, 0],
            [139, 181, 93, 74, 0, 0, 0],
            [234, 181, 93, 74, 0, 0, 0],
            [329, 181, 51, 52, 0, 0, 0],
            [382, 181, 51, 52, 0, 0, 0],
            [435, 181, 51, 52, 0, 0, 0],
            [1, 257, 51, 52, 0, 0, 0],
            [54, 257, 51, 52, 0, 0, 0],
            [107, 257, 51, 52, 0, 0, 0],
            [160, 257, 52, 50, 0, 0, 0],
            [214, 257, 62, 62, 0, 0, 0],
            [278, 257, 62, 51, 0, 0, 0],
            [342, 257, 62, 51, 0, 0, 0],
            [406, 257, 62, 51, 0, 0, 0],
            [1, 321, 145, 47, 0, 0, 0],
            [148, 321, 145, 47, 0, 0, 0]
        ],
        animations: {
            bullet: { frames: [0] },
            cloud: { frames: [1] },
            coin: {
                frames: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                speed: 1.0
            },
            enemy: {
                frames: [12, 13, 14],
                speed: 0.4
            },
            explosion: {
                frames: [15, 16, 17, 18, 19, 20, 21],
                speed: 1.0
            },
            island: { frames: [22] },
            plane: {
                frames: [23, 24, 25],
                speed: 0.4
            },
            restartButton: { frames: [26] },
            startButton: { frames: [27] }
        }
    };
    var textureMap;
    var assetManifest = [
        { id: "ocean", src: "./Assets/images/ocean.gif" },
        { id: "engineSound", src: "./Assets/audio/engine.ogg" },
        { id: "thunderSound", src: "./Assets/audio/thunder.ogg" },
        { id: "yaySound", src: "./Assets/audio/yay.ogg" },
        { id: "bulletSound", src: "./Assets/audio/bullet.mp3" },
        { id: "explosionSound", src: "./Assets/audio/explosion.mp3" }
    ];
    function Init() {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetManager = assetManager; // creates a reference to the global assetManager
        assetManager.installPlugin(createjs.Sound); // enable sound preloading
        assetManager.loadManifest(assetManifest); // preloads all assets listed in the manifest
        assetManager.on("complete", Start); // call Start when assets are finished loading
    }
    function Start() {
        console.log("%c Game Started...", "color: blue; font-size: 20px;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.stage = stage; // passing a reference to the stage globally
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // game will run at 60fps
        createjs.Ticker.on("tick", Update);
        // setup global spritesheet
        textureMap = new createjs.SpriteSheet(textureData);
        managers.Game.textureMap = textureMap;
        // setup global scoreboard and UI
        scoreBoard = new managers.ScoreBoard();
        managers.Game.scoreBoard = scoreBoard;
        // setup initial scene
        currentState = config.Scene.START;
        managers.Game.currentState = currentState;
        Main();
    }
    // this is the main game loop
    function Update() {
        currentScene.Update();
        if (currentState != managers.Game.currentState) {
            currentState = managers.Game.currentState;
            Main();
        }
        stage.update();
    }
    function Main() {
        // clean up current scene
        if (currentScene) {
            currentScene.Destroy();
            stage.removeAllChildren();
        }
        switch (currentState) {
            case config.Scene.START:
                currentScene = new scenes.Start();
                break;
            case config.Scene.PLAY:
                currentScene = new scenes.Play();
                break;
            case config.Scene.OVER:
                currentScene = new scenes.Over();
                break;
        }
        stage.addChild(currentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map