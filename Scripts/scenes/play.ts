module scenes {
    export class Play extends objects.Scene {
        // private instance variable
         private _player:objects.Player;
         private _ocean:objects.Ocean;

        // public properties

        // constructor
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods

        public Start(): void {
            this.Main();
        }        
        
        public Update(): void {
            this._ocean.Update();
            this._player.Update();
        }
        
        public Destroy(): void {

        }
        
        public Reset(): void {

        }
        
        public Main(): void {
            // adds ocean to the stage
        this._ocean = new objects.Ocean();
        this.addChild(this._ocean);

        // adds player to the stage
        this._player = new objects.Player();
        this.addChild(this._player);
        }


    }
}