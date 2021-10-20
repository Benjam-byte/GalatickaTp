import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three-orbitcontrols-ts' //import { OrbitControls } from 'three-orbitcontrols-ts'
import Hud from "./hud";
import Message from './Message';


export default class LayerThree extends Component {

    constructor(props) {    
        super(props);    
        this.state = {      
            score:0, 
            vie:3,
            message:"press p to start",
            display:"block",
            display2:"none"   };  
        };
    
    me1 = "press p to start";
    me2 = "u loose press r to restart"
    mouse = new THREE.Vector2();
    scene = new THREE.Scene();
    element = [];
    Spherecolor = ["#ED2020", "#DDED20", "#20ED29", "#2920ED", "#E420ED"]; //contient les couleurs de boules possibles
    level = 0;
    diff = 1;
    party = false; // pour mettre en pause
    

    onKeyDown = (event) => {  //la fonction appeller pour mettre en pause en cas d'appuie sur une touche p=80 r=82 
        var kc = event.keyCode;

        if (kc === 80) { // 80 = p
           //il manque du code
        }
        if (kc === 82) { // 82= r
           //il manque du code 
        }
    }


    onMouseMove = (event) => {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    }

    intersect(sphere, other) { //calcule l'intersection entre deux spheres
        // we are using multiplications because it's faster than calling Math.pow
        var distance = Math.sqrt((sphere.position.x - other.position.x) * (sphere.position.x - other.position.x) +
            (sphere.position.y - other.position.y) * (sphere.position.y - other.position.y) +
            (sphere.position.z - other.position.z) * (sphere.position.z - other.position.z));
        return distance < (sphere.geometry.parameters.radius + other.geometry.parameters.radius);
    }

    updateLevel() { 
         // augmenete le niveau et tout les dix niveau la difficulté augmente
    }

    createSun() { 
        //creer un seul et unique soleil de taille on lui set son attribut name et on return l'element creer 
    }

    // taille = la taille de la sphere 
    // vec = le vecteur 3d du centre de la sphere new THREE.Vector3(x,y,z)
    // idColor = l'indice de la couleur dans le tableau des couleurs au dessus 
    createSphere(taille, vec, idColor) { 
       //creer une sphere pour une taille une position et une color donnée pour une taille donnée
       //puis on la fais translater au bonne endroit (apparait en 0,0,0 puis translateX,Y,Z selon le vecteur vec) et on la mets dans notre tableau d'elements
    }

    createLight(inten, x, y, z) { // on ajoute deux lumieres une ambiantes et une directionnel 
        const color = 0xFFFFFF;
        const intensity = inten;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(x, y, z);
        this.scene.add(light);
        const ambientLight = new THREE.AmbientLight(0x222222);
        this.scene.add(ambientLight);
    }

    moveToCenter(sphere) {  // on veux deplacer un point en direction d'un autre avec une vitesse constante 
       //trouver comment faire ou calculer l'equation c'est de la trigo 
    }

    moveToCenter2(sphere) { //deplace une sphere en direction du centre 
        var A = new THREE.Vector3(sphere.position.x, sphere.position.y, sphere.position.z); // start
        var B = new THREE.Vector3(0, 0, 0); // end
        var C = new THREE.Vector3().subVectors(B, A).setLength(0.2).add(A);
        sphere.position.x = C.x;
        sphere.position.y = C.y;
        sphere.position.z = C.z;
    }

    sameColor(sun, sphere) { 
        // renvoie true si la valeur des couleur des deux objets sont les memes 
    }

    changeColor(sphere) { //change la couleur d'une sphere 
        if (sphere.material.color.r * 255 === 237 && sphere.material.color.g * 255 === 32 & sphere.material.color.b * 255 === 32) {
            sphere.material.color.set(this.Spherecolor[1])
        }
        else if (sphere.material.color.r * 255 === 221 && sphere.material.color.g * 255 === 237 & sphere.material.color.b * 255 === 32) {
            sphere.material.color.set(this.Spherecolor[2])
        }
        else if (sphere.material.color.r * 255 === 32 && sphere.material.color.g * 255 === 237 & sphere.material.color.b * 255 === 41) {
            sphere.material.color.set(this.Spherecolor[3])
        }
        else if (sphere.material.color.r * 255 === 41 && sphere.material.color.g * 255 === 32 & sphere.material.color.b * 255 === 237) {
            sphere.material.color.set(this.Spherecolor[4])
        }
        else if (sphere.material.color.r * 255 === 228 && sphere.material.color.g * 255 === 32 & sphere.material.color.b * 255 === 237) {
            sphere.material.color.set(this.Spherecolor[0])
        }
        else {
            sphere.material.color.set(this.Spherecolor[0]);
        }
    }

    changeSunColor(sun) { 
       //change aleatoirement la souleur du soleil 
    }

    generatePointAroudCircle(radius) { //creer des points aleatoires a la periphérie d'un cercle 2d
        //calculer ou trouvez la 
    }

    generatePointAroundSphere(r) { // creer des points aleatoires a la peripherie d'une sphere 3D 
        var s = Math.random() * Math.PI * 2;
        var t = Math.random() * Math.PI * 2;
        var x = r * Math.cos(s) * Math.sin(t)
        var y = r * Math.sin(s) * Math.sin(t)
        var z = r * Math.cos(t)
        return (new THREE.Vector3(x, y, z));
    }

    generateFromLevel() { 
        // creer le bon nombre de sphere en fonction du niveau de difficulté
    }

    restart(){ 
        // remet tous les parametres a zero et remove tous les elements de la scene 
    }


    componentDidMount() {  //Il faut remplir la boucle d'animation 
        //ON NE TOUCHE PAS 
        document.addEventListener('keydown', this.onKeyDown); //sur le doc car cela ne marche pas bien sur le composant 
        this.mount.setAttribute("tabindex", 0); //permet d'eviter un bug au niveau du raycaster 
        this.mount.addEventListener('mousemove', this.onMouseMove); // permet d'utiliser le raycaster 
        const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.mount.appendChild(renderer.domElement); //pour placer la scene uniquement sur notre composant 
        
        camera.position.z = 60;
        var controls = new OrbitControls(camera, renderer.domElement); //orbit controller pour rotationner en 3d avec la curseur 
        controls.enableDamping = true; 
        controls.dampingFactor = 0.05;
        controls.screenSpacePanning = false;
        controls.minDistance = 100;
        controls.maxDistance = 500;
        controls.maxPolarAngle = Math.PI / 2;

        const raycaster = new THREE.Raycaster(); //permet de verifier si un objets et dans la ligne de notre curseur par rapport a la camera 
        raycaster.setFromCamera(this.mouse, camera);
        var intersects = raycaster.intersectObjects(this.scene.children); // intersects est un objets contenant les informations obtenu par le curseur
        this.createLight(1, -5, 2, 20);
        // A PARTIR DICI ON PEU ECRIRE EN DESSOUS 


        const animate = () => {
            requestAnimationFrame(animate);
           //IL MANQUE BEAUCOUP DE CHOSE ICI C4EST LA BOUCLE MAIN
            renderer.render(this.scene, camera); 
            controls.update(); // on update le controller 
        }
        animate();
    }

    render() {
        return (
            <div ref={ref => (this.mount = ref)} >
                {/** ICI ON DOIT APPELLER NOTRE HUD ET NOTRE MESSAGE (ceci est un commentaire en jsx) */}
            </div>
        )
    }
}