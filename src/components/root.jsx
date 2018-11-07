import React from 'react';
import { Provider } from 'react-redux';
import App from '../App.js';


// wrapping the app in Provider so I have access to the store
const Root = ({ store }) => (
  <Provider store = {store}>
    <App />
  </Provider>
);

export default Root;
