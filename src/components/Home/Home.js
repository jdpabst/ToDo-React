import React, { Component } from 'react';
import Create from './Create/Create';

import './Home.css';


class Home extends Component {

  render() {
    return (
      <div className="home">
        <h1>Welcome!</h1>
         <Create/> 
      </div>
    );
  }
}


export default Home;