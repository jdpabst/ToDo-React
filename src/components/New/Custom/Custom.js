import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Color from './Color/Color.js';
import './Custom.css';


class Custom extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: 'white',
            font: "Ubuntu', sans-serif",
            checkboxes: false,
            modal: false
        }
        this.handleColorYellow = this.handleColorYellow.bind(this);
        this.handleColorBlue = this.handleColorBlue.bind(this);
        this.handleColorPink = this.handleColorPink.bind(this);
        this.handleColorGreen = this.handleColorGreen.bind(this);
        this.handleColorOrange = this.handleColorOrange.bind(this);
        this.handleColorCoral = this.handleColorCoral.bind(this);
        this.handleModal = this.handleModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleColorYellow(){
        this.setState({
            color: '#FEF243'
        })
        this.closeModal();
    }
    handleColorBlue(){
        this.setState({
            color: '#4293FE'
        })
        this.closeModal();
    }
    handleColorPink(){
        this.setState({
            color:'#FE5E6E'
        })
        this.closeModal();
    }
    handleColorGreen(){
        this.setState({
            color: '#83FE4E'
        })
        this.closeModal();
    }
    handleColorOrange(){
        this.setState({
            color: '#FEAC4E'
        })
        this.closeModal();
    }
     handleColorCoral(){
        this.setState({
            color: '#FE8C6F'
        })
        this.closeModal();
    }
    handleModal(){
        if(!this.state.modal){
            document.getElementById('modal').style.display = 'block'
            this.setState({
                modal: true,
            })
        } else {
            document.getElementById('modal').style.display = 'none'
            this.setState({
                modal: false,
            })
        }
    }
    closeModal(){
        document.getElementById('modal').style.display = 'none'
            this.setState({
                modal: false,
            })
    }

  render() {
    let color = this.state.color;
    return (
      <div className="custom">
          <div id="color" style={{background: color}} onClick={ this.handleModal }></div>
          <div id='modal'>
              {/* <div id="close" onClick={this.handleModal}></div> */}
              <Color coral = {this.handleColorCoral} yellow = {this.handleColorYellow} blue={this.handleColorBlue} pink={this.handleColorPink} green={this.handleColorGreen} orange={this.handleColorOrange} />
          </div>
      </div>
    );
  }
}


export default Custom;