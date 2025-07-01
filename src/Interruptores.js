import * as THREE from '../libs/three.module.js'
import { CSG } from '../libs/CSG-v2.js'


class Interruptores extends THREE.Object3D {
  constructor(){
    super();

    // TEXTURA
    var matBlanco = new THREE.MeshPhongMaterial({color: 0xBBBCB8});
    var matGrisOscuro = new THREE.MeshPhongMaterial({color: 0x434B4D});


    // CREAMOS LOS MESH DE CADA INTERRUPTOR PARA PODER DIFERENCIARLOS EN EL PICK
    // Interruptor 1
    var base1 = new THREE.Mesh(new THREE.BoxGeometry(5,10,2), matGrisOscuro);
    base1.name = "InterruptorCentro";
    var mov1 = new THREE.Mesh(new THREE.BoxGeometry(2,5,2), matBlanco);
    mov1.name = "InterruptorCentro";
    mov1.position.set(0,-2,1);
    mov1.rotation.x = -(Math.PI/6);

    this.interruptor1 = new THREE.Object3D();
    this.interruptor1.add(base1);
    this.interruptor1.add(mov1);
    this.interruptor1.rotation.y = Math.PI/2;
    this.interruptor1.position.set(-248,150,200);

    // Interruptor 2
    var base2 = new THREE.Mesh(new THREE.BoxGeometry(5,10,2), matGrisOscuro);
    base2.name = "InterruptorDebajo";
    var mov2 = new THREE.Mesh(new THREE.BoxGeometry(2,5,2), matBlanco);
    mov2.name = "InterruptorDebajo";
    mov2.position.set(0,-2,1);
    mov2.rotation.x = -(Math.PI/6);

    this.interruptor2 = new THREE.Object3D();
    this.interruptor2.add(base2);
    this.interruptor2.add(mov2);
    this.interruptor2.rotation.y = Math.PI/2;
    this.interruptor2.position.set(-248,150,200);
    this.interruptor2.position.y -= 15;

    // Interruptor 3
    var base3 = new THREE.Mesh(new THREE.BoxGeometry(5,10,2), matGrisOscuro);
    base3.name = "InterruptorArriba";
    var mov3 = new THREE.Mesh(new THREE.BoxGeometry(2,5,2), matBlanco);
    mov3.name = "InterruptorArriba";
    mov3.position.set(0,-2,1);
    mov3.rotation.x = -(Math.PI/6);

    this.interruptor3 = new THREE.Object3D();
    this.interruptor3.add(base3);
    this.interruptor3.add(mov3);
    this.interruptor3.rotation.y = Math.PI/2;
    this.interruptor3.position.set(-248,150,200);
    this.interruptor3.position.y += 15


    // AÑADIMOS AL OBJETO
    this.add(this.interruptor1);
    this.add(this.interruptor2);
    this.add(this.interruptor3);
  }

  // Funciones para ver encendido/apagado de los interruptores
  rotarInterruptor1(){
    this.interruptor1.rotation.x += Math.PI;
  }

  rotarInterruptor2(){
    this.interruptor2.rotation.x += Math.PI;
  }

  rotarInterruptor3(){
    this.interruptor3.rotation.x += Math.PI;
  }
}


export{Interruptores};
