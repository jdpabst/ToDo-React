import React, { Component } from 'react';
import NewList from './NewList/NewList';

import './Home.css';


class Home extends Component {

  render() {
    return (
      <div className="home">
        <h1>Welcome!</h1>
        <NewList/>
      </div>
    );
  }
}


export default Home;