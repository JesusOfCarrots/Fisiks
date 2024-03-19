
const Fisiks = {
    addPhysicsTo: function(object){
        object.userData.physics = { affectedByGravity: true, collidable: true };
    },

    makeCollidable: function(object){
        object.userData.physics = { affectedByGravity: false, collidable: true,  };
    },

    update: function(scene, gravity = new three.Vector3(0, -0.1, 0)){
        scene.traverse(function(object) {
            if(object.userData.physics && object.userData.physics.affectedByGravity){
                object.position.add(gravity);

                // Check collision with other collidable objects
                let touching = false;
                scene.traverse(function(otherObject) {
                    if(otherObject !== object && otherObject.userData.physics && otherObject.userData.physics.collidable){
                        if(Fisiks.checkCollision(object, otherObject)) {
                            touching = true;
                        }
                    }
                });

                // Reset affectedByGravity if not touching any object
                if (!touching) {
                    object.userData.physics.affectedByGravity = true;
                }else{
                    object.userData.physics.affectedByGravity = false;
                }
            }
        });
    },

    checkCollision: function(object1, object2){
        const box1 = new three.Box3().setFromObject(object1);
        const box2 = new three.Box3().setFromObject(object2);

        return box1.intersectsBox(box2);
    }
};
