import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Custom.css';


class Custom extends Component {
    constructor(props){
        super(props);
        this.state = {
            background: '',
            font: '',
            checkboxes: ''
        }
        this.divStyle = this.divStyle.bind(this);
    }

    divStyle(str){
        this.setState({
            background: str
        })
    }
    handleColorChange(){

    }

  render() {
    return (
      <div className="custom">
          <div id="background" style={ this.state.background } onClick={ this.handleColorChange }></div>
      </div>
    );
  }
}


export default Custom;