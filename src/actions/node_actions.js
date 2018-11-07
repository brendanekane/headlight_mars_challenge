import { getNodesUtil } from '../utils/APIUtils';

export const RECEIVE_NODES = 'RECEIVE_NODES';

export const receiveNodes = nodes => ({
  type: RECEIVE_NODES,
  nodes
});

export const getNodes = () => dispatch => {
  return (
    getNodesUtil()
    .then(nodes => dispatch(receiveNodes(nodes)))
  );
};
