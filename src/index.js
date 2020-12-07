import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './data/store';

let render = () => {
  let state = store.getState();

  ReactDOM.render(
    <React.StrictMode>
      <App
      // pass functions in here
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
