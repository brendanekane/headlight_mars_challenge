import { RECEIVE_NODES } from '../actions/node_actions';

const nodeReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default nodeReducer;
