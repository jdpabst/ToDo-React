import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Font.css';


class Font extends Component {

  render() {
    return (
      <div className="font">
          <div id='ubuntu' onClick={this.props.ubuntu}>Ubuntu</div>
          <div id='amatic' onClick={this.props.amatic}>amatic</div>
          <div id='satisfy' onClick={this.props.satisfy}>Satisfy</div>
      </div>
    );
  }
}


export default Font;