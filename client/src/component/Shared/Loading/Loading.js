import React from 'react';

import SvgComponent from '../../../img/loading';

import './Loading.css';

const Loading = () => (
  <div className="Loading">
    <SvgComponent/>
    <h3>Loading...</h3>
  </div>
);

export default Loading;