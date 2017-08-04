// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// import './Create.css';


// class Create extends Component {

//   render() {
//     return (
//       <div className="create"> 
//           <section id="word_holder">
//               <h2>Create New List</h2>
//               <div id='arrow'></div>
//           </section>
//       </div>
//     );
//   }
// }


// export default Create;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Create.css';

export default class Create extends Component{
  render(){
    return (
      <div className="create">
        <Link to='/new'>
        <section id="word_holder">
          <h2>Create New List</h2>
          <div id='arrow'></div>
        </section>
        </Link>
      </div>
    )
  }
}