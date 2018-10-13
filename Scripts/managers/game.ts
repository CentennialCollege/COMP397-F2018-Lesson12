module managers {
    export class Game {
        // Globals
        public static assetManager:createjs.LoadQueue;
        public static stage:createjs.Stage;
        public static currentState:config.Scene;
        public static currentScene:objects.Scene;
        public static scoreBoard:managers.ScoreBoard;

        // TODO: Remove this hack
        public static highScore:number = 0;
    }
}