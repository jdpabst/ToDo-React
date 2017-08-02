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
                        <div className="list_word_holder">
                            <h2>{ item }</h2>
                            <div id="arrow_img"></div>
                        </div>
                    </div>
            })}
          </section>
      </div>
    );
  }
}


export default Previous;