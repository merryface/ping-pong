import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';

import store from './data/store';
const render = () => {

  let state = store.getState();
  
  ReactDOM.render(
    <React.StrictMode>
      <Provider store = { store }>
        <App
          player1Score = { state.player1 }
          player2Score = { state.player2 }
          p1Serving = { state.p1Serving }
          incrementPlayer1 = { () => store.dispatch({ type: "INCREMENTPLAYER1"}) }
          incrementPlayer2 = { () => store.dispatch({ type: "INCREMENTPLAYER2"}) }
          reset = { () => store.dispatch({ type: "RESET"}) }
          winner = { state.winner }
        />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render();
store.subscribe(render);