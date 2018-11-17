module managers {
    export class Input {
        public static LeftButtonDown:boolean = false;
        public static jump:boolean =false;
        public static moveBackward:boolean = false;
        public static moveForward:boolean = false;
        public static moveLeft: boolean = false;
        public static moveRight: boolean = false;
        public static enabled: boolean = true;


        public static OnLeftMouseDown(event) {
            if(event.nativeEvent.button == 0) {
                managers.Game.bulletManager.FireBullet(managers.Game.player.BulletSpawn, util.Vector2.up());
              }
        }
    }
}