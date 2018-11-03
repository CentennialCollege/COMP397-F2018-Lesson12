module objects {
    export class Bullet extends objects.GameObject {
        // private instance variable
        private _speed:number;
        private _direction:util.Vector2;
        private _isInPlay:boolean;
        private _velocity:util.Vector2;

        // public properties
        get Direction():util.Vector2 {
            return this._direction;
        }

        set Direction(newDirection:util.Vector2) {
            this._direction = newDirection;
        }

        get IsInPlay():boolean {
            return this._isInPlay;
        }

        set IsInPlay(newState:boolean) {
            this._isInPlay = newState; 
            if(!this._isInPlay) {
                this.Reset();
            }


        }

        // Constructors
        
        constructor() {
            super("bullet");
            this.Start();
        }

        // private methods
        private _move():void {
            let newPosition = util.Vector2.Mulitply(this.Direction, this._speed);
            this.Position = util.Vector2.Add(this.Position, newPosition);
        }

        private _checkBounds(): any {
            if((this.Position.y > 480) || (this.Position.y < 0)) {
                this.IsInPlay = false;
            }
        }
        
        // public methods
        public Reset(): void {
           this.x = -10000;
           this.y = -10000;
           this.Direction = util.Vector2.zero();
        } 

        public Start(): void {
            this._speed = 10;
            this.IsInPlay = false;
        }

        public Update(): void {
            if(this.IsInPlay) {
                this._move();
                this._checkBounds();
            }
        }
        

        public Destroy(): void {
            
        }





    }
}