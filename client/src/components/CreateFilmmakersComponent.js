import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
// import axios from 'axios'


// export default 
class CreateFilmmakers extends Component {
  constructor(props){
    super(props);
     
    this.state ={
      filmmakers: [],
      newFilmmaker: {
          name: '',
          description: '',
          website:'',
          questions:'',
          comments: '',
          email: '',
          goal: '',
      }
      
  }


// function to update filmmakers list
onChangeName(e) {
  this.setState({
    name:e.target.value
  });
}
onChangeDescription(e) {
  this.setState({
    description:e.target.value
  });
}
onChangeWebsite(e) {
  this.setState({
    website:e.target.value
  });
}
onChangeQuestions(e) {
  this.setState({
    questions:e.target.value
  });
}
onChangeComments(e) {
  this.setState({
    comments:e.target.value
  });
}
onChangeEmail(e) {
  this.setState({
    email:e.target.value
  });
}
onChangeGoal(e) {
  this.setState({
    goal:e.target.value
  });
}

onSubmit(e) {
  e.preventDefault()
}
  }
  render(){
    return(
      <div>
        <p>
        Welcome, Create Your Filmmaker Profile!!
        </p>
      </div>
    )
  }
  
  
}

export default CreateFilmmakers