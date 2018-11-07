import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';


// I dont really need a middlewares variable here because I'm only using thunk
// but if I was using additional middlewares (maybe logger during development)
// I would add them into the middlewares array and the spread operator
// should apply all my middlewares

const middlewares = [
  thunk
];

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(...middlewares));
};

export default configureStore;
