import React, {Component} from 'react';

import './App.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import India from './components/India';
import World from './components/World';

import { 
  BrowserRouter as Router,
  Link,
  Route,
  Switch
}from 'react-router-dom';

class App extends Component{
  constructor(){
    super();

  }
render(){
  return(
    <div className="container-fluid">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <India/>

          </Route>
          <Route exact path="/india">
          <India/>
          </Route>
          <Route exact path="/world">
          <World/>
          </Route>

        </Switch>
      </Router>
    </div>
   )
  }
}

export default App;
