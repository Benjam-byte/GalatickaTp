import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layer2.css'
import { useSpring, animated } from 'react-spring' 
import curseur from '../curseur.png';

 function color(c){ //n'est appeller qu'a l'initiation de la page 
     console.log(c);
     if(c===1){
         return "yellow";
     }
     else{
         return "red";
     }
 }

function Layer1() {

    const styles = useSpring({  //ici on utilise une fonction quand on appel la page 
        loop: true,
        to: [
          { opacity: 1, translateX:"60%" },
          { opacity: 1, translateX:"0%" },
        ],
        from: { translateX : "60%", opacity:0, backgroundColor: color(Math.floor(Math.random()*2)) },
      })

    const curseurA = useSpring({
       //il manque des choses
    })
                                                        //si besoin aller faire un tour dans le .css les animations ne vous en dispense pas 
    const click = useSpring({
       //il manque des choses
    })

    const curseurB =  useSpring({
       //il manque des choses
    })

    const colorChange = useSpring({
        loop : {reverse : true},
        from : {backgroundColor : "red"},
        to : {backgroundColor : "yellow"},

    })



    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <h2>Les règles du jeu </h2>
                    <p>Le but est de marquer le plus gros score avant de mourir</p>
                    <p>Une boule est au centre c'est le coeur (ici A) </p>
                    <p>Une boule apparait sur le bord et se deplace en direction du centre (ici B)</p>
                    <div>
                    <div id="coeur"><p>A</p></div>
                    <animated.div style={styles} id="enemie"><p>B</p></animated.div>
                    </div>
                    <p>Lors de la collision de ces deux boules :</p>
                    <p>Si elles sont de la même couleur alors vous marquez un point</p>
                    <p>Sinon vous perdez une vie </p>
                    <h3>Bonus</h3>
                    <p>Tous les dix niveaux réussis le nombre de boules affichées augmente de 1</p>
                </div>
                <div className="col-md-auto">
                    <h2>Les contrôles</h2>
                    <p>La rotation de la caméra dans l'espace 3D est possible en maintenant le click</p>
                    <div>
                    <animated.img  style={curseurA} className = "curseur" src={curseur}></animated.img>
                    <animated.p style={click}>Click</animated.p>
                    </div>
                    <p>Changer la couleur d'une boule (B) se fait en passant dessus avec le curseur</p>
                    <div>
                    <animated.img  style={curseurB} className = "curseur" src={curseur}></animated.img>
                    <animated.div style = {colorChange} id="enemie"></animated.div>
                    </div>
                    <p>Appuyer sur P mets en pause le jeu</p>
                </div>
            </div>
        </div>
    );
}

export default Layer1;