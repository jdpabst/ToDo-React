import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Color.css';


class Color extends Component {

  render() {
    return (
      <div className="color">
          <div id='yellow'></div>
          <div id='blue'></div>
          <div id='pink'></div>
          <div id='green'></div>
          <div id='orange'></div>
          <div id='coral'></div>
      </div>
    );
  }
}


export default Color;