import React, { Component } from 'react';
import Create from './Create/Create';
import Previous from './Previous/Previous';

import './Home.css';
  


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: ['Clean', 'Groceries', 'Christmas Ideas', 'Things for cats', 'Work Ideas', 'Home Ideas']
    }
  }


  render() {
    return (
      <div className="home">
        <h1>Welcome!</h1>
         <Create/> 
         <Previous list={ this.state.list }/>
      </div>
    );
  }
}


export default Home;