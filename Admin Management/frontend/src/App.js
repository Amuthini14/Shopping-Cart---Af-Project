import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Admin from "./AdminManagement/Admin";


class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
       
        <div className="container">
       
           
         
         
          <Route path="/admin" component={Admin}  />


         

       
        </div>
        
      </Switch>
      </Router>
    );
  }
}

export default App;
