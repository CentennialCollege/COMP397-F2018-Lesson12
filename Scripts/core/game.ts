//IIFE - Immediately Invoked Function Expression
(function(){
    // game variables
    let canvas:HTMLCanvasElement;
    let stage:createjs.Stage;
    let assetManager:createjs.LoadQueue;

    let play:scenes.Play;

    let assetManifest = [
        {id: "startButton", src:"/Assets/images/startButton.png"},
        {id: "restartButton", src:"/Assets/images/restartButton.png"},
        {id: "plane", src:"/Assets/images/plane.png"},
        {id: "cloud", src:"/Assets/images/cloud.png"},
        {id: "island", src:"/Assets/images/island.png"},
        {id: "ocean", src:"/Assets/images/ocean.gif"},
        {id: "engineSound", src:"/Assets/audio/engine.ogg"},
        {id: "thunderSound", src:"/Assets/audio/thunder.ogg"},
        {id: "yaySound", src:"/Assets/audio/yay.ogg"}
    ];


    function Init():void {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetManager = assetManager; // creates a reference to the global assetManager
        assetManager.installPlugin(createjs.Sound); // enable sound preloading
        assetManager.loadManifest(assetManifest); // preloads all assets listed in the manifest
        assetManager.on("complete", Start); // call Start when assets are finished loading
    }

    function Start():void {
        console.log(`%c Game Started...`,"color: blue; font-size: 20px;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.stage = stage; // passing a reference to the stage globally
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // game will run at 60fps
        createjs.Ticker.on("tick", Update);
        Main();
    }

    // this is the main game loop
    function Update():void {
        play.Update();

        stage.update();
    }

    function Main():void {

        //add the Play scene to the Stage
        play = new scenes.Play();
        stage.addChild(play);

        

    }

    window.addEventListener("load", Init);
})();