import React from 'react';

import Bar from '../Bar/Bar';


const Engine = props => {
  return (
    <div>
      <h1>Engine</h1>
      <Bar next="/color" />
    </div>
  );
};

export default Engine;