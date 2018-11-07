import React from 'react';

const Legend = () => {
  return (
    <div className='legend-container'>
      <label className='legend-white'>
        <p> White Squares are empty</p>
      </label>
      <label className='legend-green'>
        <p> Green Squares have nodes</p>
      </label>
      <label className='legend-red'>
        <p> Red Squares have bots</p>
      </label>
      <label className='legend-orange'>
        <p> Orange Squares have bots mining</p>
      </label>
    </div>
  )
};

export default Legend;
