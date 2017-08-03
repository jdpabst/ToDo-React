import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Font.css';


class Font extends Component {

  render() {
    return (
      <div className="font">
          <div id='yellow' onClick={this.props.yellow}></div>
          <div id='blue' onClick={this.props.blue}></div>
          <div id='pink' onClick={this.props.pink}></div>
          <div id='green' onClick={this.props.green}></div>
          <div id='orange' onClick={this.props.orange}></div>
          <div id='coral' onClick={this.props.coral}></div>
      </div>
    );
  }
}


export default Font;