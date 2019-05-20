// import React, { Component } from "react";
// import { Redirect, Link } from 'react-router-dom';
// import axios from "axios";

// class Filmmaker extends Component {
//   state = {
//       filmmaker: {
//         name: '',
//         description: '',
//         website:'',
//         questions:'',
//         comments: '',
//         email: '',
//         goal: '',
//     },
      
//   }

  
// }

// export default Filmmaker;

import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
// import axios from 'axios'


// export default 
class Filmmakers extends Component {
  render(){
    return(
      <div>
        <p>
        Welcome to Filmmakers List
        </p>
      </div>
    )
  }
  state = {
      filmmakers: [],
      newFilmmaker: {
          name: '',
          description: '',
          website:'',
          questions:'',
          comments: '',
          email: '',
          goal: '',
      },
      
  }

  
}

export default Filmmakers