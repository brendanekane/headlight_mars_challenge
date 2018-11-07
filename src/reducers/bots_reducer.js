import { RECEIVE_BOTS } from '../actions/bot_actions';

const botReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
      default:
      return state;
  }
};

export default botReducer;
