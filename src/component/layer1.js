import React from 'react';
import "./layer1.css";
import { useSpring, animated} from 'react-spring' // yarn add react-spring



function Layer1(){
 
  const styles = useSpring({ //c'est un exemple du site donc je le laisse 
    loop: true,
    delay: 500,
    to: [
      { opacity: 1, color: '#ffaaee' },
      { opacity: 0, color: 'rgb(14,26,19)' },
    ],
    from: { opacity: 0, color: 'red' },
  })

  const styles2 = useSpring({
  // il manque du texte ici 
  })

  const styles3 = useSpring({
    //il manque du texte ici 
  })

    return (
      <div className="title"> {/** il faut réassigner les animations aux bon elements  */}
        <div id="G"></div>
        <animated.h1 style={styles}>Galactika</animated.h1>
        <div id="cube"></div>
      </div>
      
    );
  }
  
export default Layer1;