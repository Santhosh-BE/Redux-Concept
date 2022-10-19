import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import ComedyReducer from './reducer/reducer';


//selector

//Action

//Reducer

let store = createStore(ComedyReducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
