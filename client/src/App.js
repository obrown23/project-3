import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Filmmakers from '../../components/Filmmakers';

class App extends Component() {
  render(){
  return (
    <Router>
    <div id="container">
      <h1>Project Reel Exposure</h1>
    </div>
    <Route path="/" exact component={FilmmakersList} />
    <Route path="/edit/:id" component={EditFilmmaker} />
    <Route path="/create" component={CreateFilmmaker} />
    </Router>
  );
  }
}

export default App;
