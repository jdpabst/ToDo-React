import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './List.css';


class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
    }
    this.handleList = this.handleList.bind(this);
  }

  handleList(item){
    item.preventDefault();
    let arr = this.state.list;
    console.log(arr);
    arr.push(item.target.value);
    this.setState({
      list: arr,
    })
  }
  render() {
    let arr = this.state.list;
    let font = this.props.font;
    let color = this.props.color;
    return (
      <div className="list">
        <form onSubmit={ (e) => this.handleList(e)} autoSave="off">
          <div id="checkbox"><img id="checkbox_img" src="https://vignette3.wikia.nocookie.net/roblox/images/5/57/Very-Basic-Checkmark-icon.png/revision/latest?cb=20131125154354"/></div>
          <input id="list_input" style={{fontFamily: font, fontSize: '30px', color: color}}  type='text'/>
        </form>
         {arr.map( (item, id) => {
          return <div key={ id }>
            <form onSubmit={ (e) => this.handleList(e)} autoSave="off">
              <div id="checkbox"><img id="checkbox_img" src="https://vignette3.wikia.nocookie.net/roblox/images/5/57/Very-Basic-Checkmark-icon.png/revision/latest?cb=20131125154354"/></div>
              <input id="list_input" style={{fontFamily: font, fontSize: '30px', color: color}}  type='text'/>
            </form>
          </div>
        })} 
      </div>
    );
  }
}


export default List;