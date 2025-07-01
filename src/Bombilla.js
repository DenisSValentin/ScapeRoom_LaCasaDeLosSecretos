import * as THREE from '../libs/three.module.js'
 
class Bombilla extends THREE.Object3D {
    constructor(){
        super();

        // TEXTURAS
        const materialBombilla = new THREE.MeshBasicMaterial({color: 0xfff3b2, opacity: 0.2,transparent: true});

        
        // GEOMETRÍAS
        // Creamos la bombilla por revolución
        var bombillaContorno = new THREE.Shape();

        bombillaContorno.moveTo(0,-12);
        bombillaContorno.quadraticCurveTo(4, -17, 8, -13);
        bombillaContorno.quadraticCurveTo(10, -8, 8, -4);
        bombillaContorno.quadraticCurveTo(6, -2, 4, -2);
        bombillaContorno.quadraticCurveTo(1.5, -1, 2, 0);
        bombillaContorno.lineTo(1, 15);
        bombillaContorno.lineTo(0, 15);
        bombillaContorno.lineTo(0,0);

        var puntosBombilla = bombillaContorno.extractPoints(10).shape;
        var bombilla = new THREE.Mesh(new THREE.LatheGeometry(puntosBombilla, 20), materialBombilla);

        bombilla.position.y = 220;
        bombilla.scale.set(2,2,2);

        this.add(bombilla);

        // Creamos la cuerda que sostiene la bombilla
        var cuerdaGeom = new THREE.CylinderGeometry(2,2,30,100);
        var cuerda = new THREE.Mesh(cuerdaGeom, materialBombilla);
        cuerda.position.y = 235;

        this.add(cuerda);

        // Creamos los 3 focos que salen desde la bombilla para iluminar cada uno de los cuadros
        // Foco1
        var focoGeom = new THREE.CylinderGeometry(1,2,6,100);
        var foco1 = new THREE.Mesh(focoGeom, materialBombilla);
        foco1.position.set(0, 200, 19);
        foco1.rotation.x = Math.PI/2;
        foco1.rotation.x += Math.PI/10;

        this.add(foco1);

        // Foco2
        var foco2 = new THREE.Mesh(focoGeom, materialBombilla);
        foco2.position.set(-10, 200, 16.5);
        foco2.rotation.x = Math.PI/2;
        foco2.rotation.x += Math.PI/10;
        foco2.rotation.z = Math.PI/4.4;

        this.add(foco2);

        // Foco3
        var foco3 = new THREE.Mesh(focoGeom, materialBombilla);
        foco3.position.set(10, 200, 16.5);
        foco3.rotation.x = Math.PI/2;
        foco3.rotation.x += Math.PI/10;
        foco3.rotation.z = -Math.PI/4.4;

        this.add(foco3);
    }
}

export { Bombilla }
