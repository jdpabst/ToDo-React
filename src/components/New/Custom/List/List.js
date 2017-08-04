import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './List.css';


class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      checked: false
    }
    this.handleList = this.handleList.bind(this);
    this.handleCheckOff = this.handleCheckOff.bind(this);
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

  handleCheckOff(){
    if(!this.state.checked){
      document.getElementById('checkbox_img').style.display = 'block';
      this.setState({
        checked: true
      })
    } else {
      document.getElementById('checkbox_img').style.display = 'none';
      this.setState({
        checked: false
      })
    }
  }

  render() {
    let arr = this.state.list;
    let font = this.props.font;
    let color = this.props.color;
    let map;
    if(this.props.checkFn){
      map = arr.map( (item, id) => {
          return <div key={ id }>
            <form onSubmit={ (e) => this.handleList(e)} autoSave="off">
              <input type="checkbox" style={{display: 'none'}} id="checkbox"/>
              <input id="list_input" style={{fontFamily: font, fontSize: '30px', color: color}}  type='text'/>
            </form>
          </div>
        })
    } else {
      map = arr.map( (item, id) => {
          return <div key={ id }>
            <form onSubmit={ (e) => this.handleList(e)} autoSave="off">
              <input type="checkbox" style={{display: 'block'}} id="checkbox"/>
              <input id="list_input" style={{fontFamily: font, fontSize: '30px', color: color}}  type='text'/>
            </form>
          </div>
        }) 
    }
    return (
      <div className="list">
        <form onSubmit={ (e) => this.handleList(e)} autoSave="off">
          <input type="checkbox" id="checkbox"/>
          <input id="list_input" style={{fontFamily: font, fontSize: '30px', color: color}}  type='text'/>
        </form>
        { map }
      </div>
    );
  }
}


export default List;