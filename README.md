# Fisiks.js 

A small [Three.js](https://threejs.org) library to add simple physics to Bodies.
You can make Objects affected by Physics or only make them collidable with other objects.

# Start 

Start by adding three.js to your html file before adding your main JavaScript code:

    <script src="https://cdn.jsdelivr.net/npm/three@0.132.2/build/three.min.js"></script>

and then add Fisiks.js

    <script src="https://cdn.jsdelivr.net/gh/JesusOfCarrots/Fisiks@v0.1.5/lib.js"></script>

Replace 

    Fisiks@v0.1.5
    
   with the [latest release](https://github.com/JesusOfCarrots/Fisiks/releases) .

<br>

You can add physics to a cube by first creating a simple three.js cube:

    const geometry = new three.BoxGeometry(cubeSize, cubeSize, cubeSize);
    const material = new three.MeshBasicMaterial( {color:cubeColor} );
    const cube = new three.Mesh(geometry, material);

Then you can either make it affected by physics:

    Fisiks.addPhysicsTo(cube);
    scene.add(cube);

or only make it collidable:

    Fisiks.makeCollidable(plane);
    scene.add(plane);

<br>
As a final step you need to update the physics in the animate/render function:

    function animate(){
        //… other code …
        Fisiks.update(scene);
        // . . . 
    }

# ToDo

  

 - Currently the collisions are only working for 3D Boxes 
 - Asigning other mass does not impact the fall speed (?)
 - falling speed does nit increese over time 


# Donations 
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/L3L3R7VCE)
