import MarsSurface from './mars_surface';
import { connect } from 'react-redux';
import { getBots } from '../actions/bot_actions';
import { getNodes } from '../actions/node_actions';
import { createGrid } from '../actions/grid_actions';
import { allNodes, allBots, allGrid } from '../reducers/selectors';

const mapStateToProps = ({ nodes, bots, grid }) => {

  // normalizing state from selectors functions
  return ({
    nodes: allNodes(nodes),
    bots: allBots(bots),
    grid: allGrid(grid)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    getBots: () => dispatch(getBots()),
    getNodes: () => dispatch(getNodes()),
    createGrid: (grid) => dispatch(createGrid(grid))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarsSurface);
