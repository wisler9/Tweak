
import React, {Component} from "react";

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

// import SignUp from "./components/SignUp";
// import Login from "./components/Login";


import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";


// import Card from "./components/Card";
// import ListItems from "./components/ListItems";


class App extends Component {
  state = {
    tweaks: ["This is a test", "test of tweak"],
    tweak: ""
  };

  // componentDidMount() {
  //   this.loadTweaks()
  // }

  handleSubmit = event => {
    console.log("Tweak Submitted")
    this.setState((previousState) => {
      return {
        tweaks: previousState.tweaks.concat(previousState.tweak),
        tweak: ""
      }
      
    })
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    // console.log(name, value)
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Router>
      <div>


        <Switch>
        <Route path="/main" component={Main}
         />
        <Route path ="/signup" component={SignUp}/>
         <Route path ="/" component={Home}/>
         
         

        </Switch>

        
      
      
       

      </div>
          </Router>
    )
    }

  };






export default App;
