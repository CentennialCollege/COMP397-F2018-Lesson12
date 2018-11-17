var managers;
(function (managers) {
    var Input = /** @class */ (function () {
        function Input() {
        }
        Input.OnLeftMouseDown = function (event) {
            if (event.nativeEvent.button == 0) {
                managers.Game.bulletManager.FireBullet(managers.Game.player.BulletSpawn, util.Vector2.up());
            }
        };
        Input.LeftButtonDown = false;
        Input.jump = false;
        Input.moveBackward = false;
        Input.moveForward = false;
        Input.moveLeft = false;
        Input.moveRight = false;
        Input.enabled = true;
        return Input;
    }());
    managers.Input = Input;
})(managers || (managers = {}));
//# sourceMappingURL=input.js.map