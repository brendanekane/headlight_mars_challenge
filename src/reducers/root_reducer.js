import { combineReducers } from 'redux';
import nodeReducer from './nodes_reducer';
import botReducer from './bots_reducer';
import gridReducer from './grid_reducer';

const rootReducer = combineReducers({
  bots: botReducer,
  nodes: nodeReducer,
  grid: gridReducer 
});

export default rootReducer;
