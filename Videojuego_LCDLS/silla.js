import * as THREE from '../libs/three.module.js'

class silla extends THREE.Object3D {
  constructor(){
    super();

    // TEXTURA DE LA SILLA
    var matBlanco= new THREE.MeshPhongMaterial({color: 0xffffff});
    var matAsiento= new THREE.MeshPhongMaterial({color: 0xA4C9BB});


    // GEOMETRÍAS
    // Geometría del asiento
    var shapeAsiento = new THREE.Shape();
    shapeAsiento.lineTo(2,0);
    shapeAsiento.quadraticCurveTo(3,0,3,2);
    shapeAsiento.lineTo(3,5);
    shapeAsiento.quadraticCurveTo(2.9,5.1,2.8,5);
    shapeAsiento.lineTo(2.8,1.8);
    shapeAsiento.quadraticCurveTo(2.8,1,2,1);
    shapeAsiento.lineTo(0,1);
    shapeAsiento.quadraticCurveTo(-1,0.5,0,0);

    var options = { depth : 3 , steps : 100 , curveSegments : 100,
      bevelThickness : 0.1 , bevelSize : 0.1 , bevelSegments : 100} ;
    var asientoGeom = new THREE.ExtrudeGeometry (shapeAsiento, options);

    this.asiento = new THREE.Mesh(asientoGeom, matAsiento);
    this.asiento.position.y = 50;
    this.asiento.rotation.y = -Math.PI/2;
    this.asiento.scale.set(15,15,15);
    this.asiento.castShadow = true;
    this.asiento.receiveShadow = true;

    // Geometría de la pata
    var pataGeom = new THREE.CylinderGeometry(3,3,50,100,100);
    var pata1 = new THREE.Mesh(pataGeom, matBlanco);
    pata1.position.set(-30, 25, 22.5);this.asiento.castShadow = true;
    pata1.castShadow = true;
    pata1.receiveShadow = true;
    
    // Geometría del pie de apoyo
    var pie = new THREE.Mesh(new THREE.CylinderGeometry(20,20,4,100,100), matBlanco);
    pie.position.set(-30, 2, 22.5);
    pie.receiveShadow = true;
    pie.castShadow = true;


    // AÑADIMOS AL OBJETO
    this.add(this.asiento);
    this.add(pie);
    this.add(pata1);
  }
}


export{silla};