import React, { Component } from 'react';
// import NewList from './NewList/NewList';

import './Create.css';


class Create extends Component {

  render() {
    return (
      <div className="create">
        <section id="word_holder">
            <h2>Create New List</h2>
            <div id='arrow'></div>
        </section>
      </div>
    );
  }
}


export default Create;