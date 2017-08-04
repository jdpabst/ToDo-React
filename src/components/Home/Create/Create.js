import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Create.css';


class Create extends Component {

  render() {
    return (
      <div className="create"> 
          <section id="word_holder">
            <Link to='/new'>
              <h2>Create New List</h2>
              <div id='arrow'></div>
            </Link>
          </section>
        
      </div>
    );
  }
}


export default Create;