import { createStore } from "redux";
import initialState from './initial';
import reducer from './reducer';


const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

export default store;