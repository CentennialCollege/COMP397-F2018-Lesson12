var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        // private instance variables
        // public properties
        // constructor
        // private methods
        // public methods
        Collision.Check = function (object1, object2) {
            if (!object2.IsColliding) {
                // check if object 1 is colliding with object 2
                if (util.Vector2.Distance(object1.Position, object2.Position) < (object1.HalfHeight + object2.HalfHeight)) {
                    object2.IsColliding = true;
                    switch (object2.name) {
                        case "island":
                            createjs.Sound.play("yaySound");
                            break;
                        case "cloud":
                            createjs.Sound.play("thunderSound");
                            break;
                    }
                }
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map