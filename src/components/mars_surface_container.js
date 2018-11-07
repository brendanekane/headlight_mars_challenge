import MarsSurface from './mars_surface';
import { connect } from 'react-redux';
import { getBots } from '../actions/bot_actions';
import { getNodes } from '../actions/node_actions';
import { allNodes, allBots } from '../reducers/selectors';

const mapStateToProps = ({ nodes, bots }) => {
  return ({
    nodes: allNodes(nodes),
    bots: allBots(bots)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    getBots: () => dispatch(getBots()),
    getNodes: () => dispatch(getNodes())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarsSurface);
