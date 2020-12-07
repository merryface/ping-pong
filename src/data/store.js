import { createStore } from "redux";
import initialState from './initial';
import reducer from './reducer';


let store = createStore(reducer,initialState);

export default store;