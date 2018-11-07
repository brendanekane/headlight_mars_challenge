import React from 'react';

class MarsSurface extends React.Component {

  componentDidMount() {
    this.props.getBots();
    this.props.getNodes();
  }

  

  render() {
    return(
      <div>  Hello World </div>
    )
  }
}

export default MarsSurface;
