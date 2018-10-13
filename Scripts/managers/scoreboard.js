var managers;
(function (managers) {
    var ScoreBoard = /** @class */ (function () {
        // constructor
        /**
         * Creates an instance of ScoreBoard.
         * @param {boolean} [isGameOver=false]
         */
        function ScoreBoard(livesNum, scoreNum, highScoreNum, isGameOver) {
            if (livesNum === void 0) { livesNum = 5; }
            if (scoreNum === void 0) { scoreNum = 0; }
            if (highScoreNum === void 0) { highScoreNum = 0; }
            if (isGameOver === void 0) { isGameOver = false; }
            this._isGameOver = isGameOver;
            this._currentScene = managers.Game.currentScene;
            this.Start();
            if (!isGameOver) {
                this.Lives = livesNum;
                this.Score = scoreNum;
            }
            else {
                this.HighScore = highScoreNum;
            }
        }
        Object.defineProperty(ScoreBoard.prototype, "Score", {
            // public properties
            get: function () {
                return this._score;
            },
            set: function (newValue) {
                this._score = newValue;
                this._scoreLabel.text = "Score: " + this._score;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Lives", {
            get: function () {
                return this._lives;
            },
            set: function (newValue) {
                this._lives = newValue;
                this._livesLabel.text = "Lives: " + this._lives;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScore", {
            get: function () {
                return this._highScore;
            },
            set: function (newValue) {
                this._highScore = newValue;
                this._highScoreLabel.text = "High Score: " + this._highScore;
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        // public methods
        // Initialize Objects
        ScoreBoard.prototype.Start = function () {
            if (!this._isGameOver) {
                this._scoreLabel = new objects.Label("Score: 99999", "30px", "Consolas", "#FFFF00", 350, 10, false);
                this._livesLabel = new objects.Label("Lives: 99", "30px", "Consolas", "#FFFF00", 20, 10, false);
            }
            else {
                this._highScoreLabel = new objects.Label("High Score: 999999", "60px", "Consolas", "#FFFF00", 320, 240, true);
            }
            this.Main();
        };
        // Add objects to the current scene
        ScoreBoard.prototype.Main = function () {
            if (!this._isGameOver) {
                this._currentScene.addChild(this._scoreLabel);
                this._currentScene.addChild(this._livesLabel);
            }
            else {
                this._currentScene.addChild(this._highScoreLabel);
            }
        };
        return ScoreBoard;
    }());
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map