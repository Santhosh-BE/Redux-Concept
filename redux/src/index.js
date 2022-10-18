import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

//selector
const VADIVEL_COMEDY ='Vadivel_Comedy';
const GOUNDAMANI_COMEDY ='Goundamani_Comedy';
//Action
export const VadivelActions=()=>{
  return({
    type:VADIVEL_COMEDY
  })
}
export const GounderActions=()=>{
  return({
    type:GOUNDAMANI_COMEDY
  })
}
//Reducer
const ComedyReducer =(state,actions)=>{
  switch(actions.type){
    case VADIVEL_COMEDY:
      return state="He is Good"
      case GOUNDAMANI_COMEDY:
      return state="He is Bad"
      default:
        return state="No Comments"
  }
}
let store = createStore(ComedyReducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
