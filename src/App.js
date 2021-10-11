import {Parallax, ParallaxLayer } from '@react-spring/parallax'; 
import './App.css';
import Header from'./component/header';
import LayerThree from './component/layerThree';
import Layer1 from './component/layer1';
import Layer2 from './component/layer2';

function App() {
  return (
    <div className="App"> 
      <Parallax pages={1}> {/** nombre de page a modifier  */}
      {/** il en manque 1 ici   */}
      <ParallaxLayer offset={0} speed={2} style={{backgroundColor:"#E6CAE0"}}> {/** exemple du premier layer   */}
          <Layer1 />
        </ParallaxLayer>
      {/** il en manque deux ici */}
      </Parallax>
    </div>
  );
}

export default App;
