import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/root';
import * as serviceWorker from './serviceWorker';


// testing purposes
import configureStore from './store/store';
import { getBotsUtil } from './utils/APIUtils';
import { receiveBots } from './actions/bot_actions'

const preloadedState = {};
const store = configureStore(preloadedState);
window.store = store;
window.getBotsUtil = getBotsUtil;
window.receiveBots = receiveBots;

// end testing

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});

serviceWorker.unregister();
