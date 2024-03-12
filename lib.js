const Fisiks = {
    addPhysicsTo: function(object){
        object.userData.physics = { affedtedByGravity: true };
    },

    makeCollidable: function(object){
        object.userData.physics = { affedtedByGravity: false };
    },

    update: function(scene, gravity = new Vector3(0, -0.1, 0)){
        scene.traverse(function(object) {
            if(object.userData.physics){
                if(object.userData.physics.affedtedByGravity){
                    object.position.add(gravity);
                }

                if(object.userData.physics.collidable){
                    scene.traverse(function(otherObject) {
                        if(otherObject !== object && otherObject.userData.physics && otherObject.userData.physics.collidable){
                            const collision = Fisiks.checkCollision(object, otherObject);
                            if(collision){
                                object.position.copy(collision);
                            }
                        }
                    });
                }
            }
        });
    },

    checkCollision: function(object1, object2){
        const box1 = new three.Box3().setFromObject(object1);
        const box2 = new three.Box3().setFromObject(object2);

        if (box1.intersectsBox(box2)) {
            // Handle collision here, for now just stop the movement
            console.log("Collieded");
            return object1.position;
        }

        return null;
    }
};

