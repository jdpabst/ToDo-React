import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Color from './Color/Color.js';
import Font from './Font/Font';
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
        this.handleColorModal = this.handleColorModal.bind(this);
        this.closeColorModal = this.closeColorModal.bind(this);
    }

    handleColorYellow(){
        this.setState({
            color: '#FEF243'
        })
        this.closeColorModal();
    }
    handleColorBlue(){
        this.setState({
            color: '#4293FE'
        })
        this.closeColorModal();
    }
    handleColorPink(){
        this.setState({
            color:'#FE5E6E'
        })
        this.closeColorModal();
    }
    handleColorGreen(){
        this.setState({
            color: '#83FE4E'
        })
        this.closeColorModal();
    }
    handleColorOrange(){
        this.setState({
            color: '#FEAC4E'
        })
        this.closeColorModal();
    }
     handleColorCoral(){
        this.setState({
            color: '#FE8C6F'
        })
        this.closeColorModal();
    }
    handleColorModal(){
        if(!this.state.modal){
            document.getElementById('color_modal').style.display = 'block'
            this.setState({
                modal: true,
            })
        } else {
            document.getElementById('color_modal').style.display = 'none'
            this.setState({
                modal: false,
            })
        }
    }
    closeColorModal(){
        document.getElementById('color_modal').style.display = 'none'
            this.setState({
                modal: false,
            })
    }

    ////////////////////////////////////////////FONTS//////////////////////////////////////////////////////////////////////
    handleFont1(){
        this.setState({
            font:"'Oswald', sans-serif",
        })
    }
    handleFont2(){
        this.setState({
            font:"'Amatic SC', cursive",
        })
    }
    handleFont3(){
        this.setState({
            font:"'Satisfy', cursive",
        })
    }

  render() {
    let color = this.state.color;
    let font=this.state.font;
    return (
      <div className="custom">
          <div id="color" style={{background: color}} onClick={ this.handleColorModal }></div>
          <div id="font" style={{'font-family': font}} style={{color: color}}>Aa</div>
          <div id='color_modal'>
              <Color coral = {this.handleColorCoral} yellow = {this.handleColorYellow} blue={this.handleColorBlue} pink={this.handleColorPink} green={this.handleColorGreen} orange={this.handleColorOrange} />
              <Font oswald={this.handleFont1} amatic={this.handleFont2} satisfy={this.handleFont3}/>
          </div>
      </div>
    );
  }
}


export default Custom;