import { getBotsUtil } from '../utils/APIUtils';

export const RECEIVE_BOTS = 'RECEIVE_BOTS';

export const receiveBots = bots => {
  return ({
    type: RECEIVE_BOTS,
    bots
  });
};

export const getBots = () => dispatch => {
  return (
    getBotsUtil()
      .then(bots => dispatch(receiveBots(bots)))
  );
};
