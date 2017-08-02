import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Custom.css';


class Custom extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: 'white',
            font: "Ubuntu', sans-serif",
            checkboxes: 'false'
        }
        this.handleColorYellow = this.handleColorYellow.bind(this);
    }

    handleColorYellow(){
        this.setState({
            color: '#FEF243'
        })
    }
    handleColorBlue(){
        this.setState({
            color: '#4293FE'
        })
    }
    handleColorPink(){
        this.setState({
            color:'#FE5E6E'
        })
    }
    handleColorGreen(){
        this.setState({
            color: '#FE2B2B'
        })
    }
    handleColorOrange(){
        this.setState({
            color: '#FEAC4E'
        })
    }

  render() {
    return (
      <div className="custom">
          <div id="color" style={ this.state.color }></div>
      </div>
    );
  }
}


export default Custom;