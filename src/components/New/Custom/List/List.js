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
          <input id="list_input" style={{fontFamily: font, fontSize: '30px', color: color}}  type='text'/>
        </form>
         {arr.map( (item, id) => {
          return <div key={ id }>
            <form onSubmit={ (e) => this.handleList(e)}>
              <input id="list_input" style={{fontFamily: font, fontSize: '30px', color: color}}  type='text'/>
            </form>
          </div>
        })} 
      </div>
    );
  }
}


export default List;