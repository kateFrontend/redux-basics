import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import cartReducer from './reducers/cartReducer';
import { addToCart, removeItem } from './actions';

let store = createStore(cartReducer);
store.subscribe(() => console.log(store.getState()))

store.dispatch(addToCart());
store.dispatch(addToCart());
store.dispatch(addToCart());
store.dispatch(removeItem());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

