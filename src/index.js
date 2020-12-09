import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';

import store from './data/store';


let state = store.getState();

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
      <App
        p1Serving = { state.p1Serving }
        incrementPlayer1 = { () => store.dispatch({ type: "INCREMENTPLAYER1"}) }
        incrementPlayer2 = { () => store.dispatch({ type: "INCREMENTPLAYER2"}) }
        reset = { () => store.dispatch({ type: "RESET"}) }
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);