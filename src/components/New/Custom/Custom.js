import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Color from './Color/Color.js';
import Font from './Font/Font';
import List from './List/List';
import './Custom.css';


class Custom extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: 'white',
            font: "Ubuntu', sans-serif",
            check: true,
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
        this.handleFont1 = this.handleFont1.bind(this);
        this.handleFont2 = this.handleFont2.bind(this);
        this.handleFont3 = this.handleFont3.bind(this);
        this.handleFontModal = this.handleFontModal.bind(this);
        this.closeFontModal = this.closeFontModal.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
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
            font:"'Ubuntu', sans-serif",
            size: '24px'
        })
        this.closeFontModal();
    }
    handleFont2(){
        this.setState({
            font:"'Amatic SC', cursive",
            size: '30px'
        })
        this.closeFontModal();
    }
    handleFont3(){
        this.setState({
            font:"'Satisfy', cursive",
            size: '24px'
        })
        this.closeFontModal();
    }
    handleFontModal(){
        if(!this.state.modal){
            document.getElementById('font_modal').style.display = 'block'
            this.setState({
                modal: true,
            })
        }
    }
    closeFontModal(){
        document.getElementById('font_modal').style.display = 'none'
            this.setState({
                modal: false,
            })
    }
    handleCheck(){
        if(this.state.check){
            document.getElementById('check_img').style.display = 'block';
            this.setState({
                check: false
            })
        } else{
            document.getElementById('check_img').style.display = 'none';
            this.setState({
                check: true
            })
        }
    }

  render() {
    let color = this.state.color;
    let font=this.state.font;
    let size = this.state.size;
    return (
        <div className="custom_list">
            <div className="custom">
                <div id="color" style={{background: color}} onClick={ this.handleColorModal }></div>
                <div id="font" style={{fontFamily: font, color: color, fontSize: size}} onClick={this.handleFontModal} >Aa</div>
                <div id="check" onClick={ this.handleCheck }><img id="check_img" src="https://vignette3.wikia.nocookie.net/roblox/images/5/57/Very-Basic-Checkmark-icon.png/revision/latest?cb=20131125154354"/></div>
                <div id='color_modal'>
                    <Color coral = {this.handleColorCoral} yellow = {this.handleColorYellow} blue={this.handleColorBlue} pink={this.handleColorPink} green={this.handleColorGreen} orange={this.handleColorOrange} />
                </div>
                <div id="font_modal">
                    <Font ubuntu={this.handleFont1} amatic={this.handleFont2} satisfy={this.handleFont3}/>
                </div>
            </div>
            <List font={ this.state.font } color={this.state.color}/>
        </div>
    );
  }
}


export default Custom;