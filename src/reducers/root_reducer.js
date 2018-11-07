import { combineReducers } from 'redux';
import nodeReducer from './nodes_reducer';
import botReducer from './bots_reducer';

//combineReducers puts all of my reducers together to pass along to my redux store

const rootReducer = combineReducers({
  bots: botReducer,
  nodes: nodeReducer
});

export default rootReducer;
