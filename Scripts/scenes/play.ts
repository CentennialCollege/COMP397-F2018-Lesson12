module scenes {
    export class Play extends objects.Scene {
        // private instance variable
         private _player:objects.Player;
         private _ocean:objects.Ocean;
         private _island:objects.Island;

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
            this._island.Update();
        }
        
        public Destroy(): void {
            this.removeAllChildren();
        }
        
        public Reset(): void {

        }
        
        public Main(): void {
        // adds ocean to the scene
        this._ocean = new objects.Ocean();
        this.addChild(this._ocean);


        // adds island to the scene
        this._island = new objects.Island();
        this.addChild(this._island);

        // adds player to the scene
        this._player = new objects.Player();
        this.addChild(this._player);
        }
    }
}