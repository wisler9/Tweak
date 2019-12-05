
import React, {Component} from "react";

import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

// import SignUp from "./components/SignUp";
// import Login from "./components/Login";

import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

import Card from "./components/Card";
import ListItems from "./components/ListItems";


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
        <Route path ="/signup" component={SignUp}/>
         <Route path ="/" component={Home}/>
         
         

        </Switch>

        
      
      {/* <h1>Hello Tweak!!!</h1>

        <Home />
      <SignUp />
      <h1>Hello Tweak!!!</h1>

  
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
       <a className="navbar-brand" href="/">
         {`<TWEAK/>`}
        </a>
       <a className="navbar-brand" href="/user">
        Profile
        </a>
        </nav> */}
  
      {/* <Card 
      value={this.state.tweak}
      onChange={this.handleInputChange}
      name="tweak"
      handleSubmit={this.handleSubmit}
       />
       <ListItems 
       tweaks={this.state.tweaks}
       />  */}

      </div>
          </Router>
    )
    }

  };






export default App;
