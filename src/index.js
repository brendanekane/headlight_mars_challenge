import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/root';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/store';

//testing purposes


const preloadedState = {};
const store = configureStore(preloadedState);
window.store = store


document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');
  ReactDOM.render(<Root store={ store }/>, root);
});

serviceWorker.unregister();
