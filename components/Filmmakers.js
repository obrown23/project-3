import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


class Filmmakers extends Component {
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
