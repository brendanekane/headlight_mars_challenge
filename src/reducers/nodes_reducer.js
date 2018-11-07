import { RECEIVE_NODES } from '../actions/node_actions';

const nodeReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};
  switch (action.type) {
    case RECEIVE_NODES:
      const nodeObject = action.nodes.Nodes
      // needed because action.nodes is empty on initial render
      if (Object.keys(action.nodes).length === 0 && action.nodes.constructor === Object) {
        return state
      } else {
        Object.keys(nodeObject).forEach(key => {
          nextState[key] = nodeObject[key];
        });
      }
      return nextState;
    default:
      return state;
  }
};

export default nodeReducer;
