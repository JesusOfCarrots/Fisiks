const Fisiks = {
    addPhysicsTo: function(object){
        object.userData.physics = { affedtedByGravity: true, collidable: true };
    },

    makeCollidable: function(object){
        object.userData.physics = { affedtedByGravity: false, collidable: true };
    },

    update: function(scene, gravity = new THREE.Vector3(0, -0.1, 0)){
        scene.traverse(function(object) {
            if(object.userData.physics){
                if(object.userData.physics.affedtedByGravity){
                    object.position.add(gravity);
                }
                if(object.userData.physics.collidable) {
                    scene.traverse(function(otherObject) {
                        if(otherObject !== object && otherObject.userData.physics && otherObject.userData.physics.collidable){
                            if(Fisiks.checkCollision(object, otherObject)) {
                                object.userData.physics.affedtedByGravity = false; // Stop falling
                            }
                        }
                    });
                }
            }
        });
    },

    checkCollision: function(object1, object2){
        const box1 = new THREE.Box3().setFromObject(object1);
        const box2 = new THREE.Box3().setFromObject(object2);

        return box1.intersectsBox(box2);
    }
};
