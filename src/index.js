import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './data/store';

let render = () => {
let state = store.getState();

  ReactDOM.render(
    <React.StrictMode>
      <App
      player1Score = { state.player1 }
      player2Score = { state.player2 }
      incrementPlayer1 = { () => store.dispatch({ type: "INCREMENTPLAYER1"}) }
      incrementPlayer2 = { () => store.dispatch({ type: "INCREMENTPLAYER2"}) }
      // pass functions in here
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();
