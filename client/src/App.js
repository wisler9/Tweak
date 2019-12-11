import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Profile from "./pages/Profile"



class App extends Component {


  render() {
    return (
      <Router>
      <div>


        {/* <Login />
        <SignUp /> */}

        <Switch>
        <Route path="/profile" component={Profile}/>
        <Route path="/main" component={Main}/>
        <Route path ="/signup" component={SignUp}/>
         {/* <Route path="/login" component={Login}/>  */}
         <Route path ="/" component={Home}/>
        </Switch>

      </div>
          </Router>
    )
    }

  };


  


export default App;
