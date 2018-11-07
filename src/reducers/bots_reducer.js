import { RECEIVE_BOTS } from '../actions/bot_actions';

const botReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};
  switch (action.type) {
      case RECEIVE_BOTS:
      debugger
      const botObject = action.bots.Bots;
      if (Object.keys(action.bots).length === 0 & action.bots.constructor === Object){
        return state;
      } else {
        Object.keys(botObject).forEach(key => {
          nextState[key] = botObject[key];
        });
      }
      return nextState;
      default:
      return state;
  }
};

export default botReducer;
