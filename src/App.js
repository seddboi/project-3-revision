import React from "react";
import Game from './Components/Game/Game'
// import {GameEngine} from 'react-game-engine';
// import {Character} from './Renderers/character-box';
// import {KeyTracking} from './Systems/cycle-animation';

function App() {
  return (
    <div>
      <Game />
    </div>
  );
}

export default App;

// ---------------------------------------------------------------------------
// OLD CODE
// class CreateGame extends PureComponent {
//   render() {
    
//   //   KeyTracking( (x) => {
//   //     x.preventDefault();
      
//   //     const direction = x.key.replace('Arrow', '').toLowerCase();
//   //     console.log(direction);

//   //     // walkingAnimation(direction);
//   // });

//     return(
//       // <GameEngine
//       //   style={{ width: 600, height: 600, backgroundColor: "green" }}
//       //   // systems={[Animation]}
//       //   entities={{
//       //     character1: { x: 400,  y: 400, renderer: <Character />},
//       //   }}>

//       // </GameEngine>
//     );
//   }
// };


