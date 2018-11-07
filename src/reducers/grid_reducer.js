import { CREATE_GRID } from '../actions/grid_actions';

const gridReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};
  switch (action.type) {
    case CREATE_GRID:
      for (let i = 0; i < action.grid.length; i++) {
        nextState[i] = action.grid[i];
      }
      return nextState;
    default:
      return state;
  }
};
