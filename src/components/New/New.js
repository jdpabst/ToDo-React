import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './New.css';


class New extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Title...',
        }
        this.handleTitle = this.handleTitle.bind(this);
    }
    handleTitle(str){
        this.setState({
            title: str
        })
    }
  render() {
    return (
      <div className="new">
          <input id='title_input' onChange={ (e) => {this.handleTitle(e.target.value)}} placeholder={ this.state.title }/>
      </div>
    );
  }
}


export default New;