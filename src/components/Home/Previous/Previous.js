import React, { Component } from 'react';

import './Previous.css';


class Previous extends Component {

  render() {
      let arr = this.props.list;
    return (
      <div className="previous">
          <section id="previous_lists">
            {arr.map( (item, id) => {
                return <div key={ id } id="lists">
                        <h2>{ list.title }</h2>
                    </div>
            })}
          </section>
      </div>
    );
  }
}


export default Previous;