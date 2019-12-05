import React, {Component} from "react";
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
      <div>
      <h1>Hello Tweak!!!</h1>
  
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
       <a className="navbar-brand" href="/">
         {`<TWEAK/>`}
        </a>
       <a className="navbar-brand" href="/user">
        Profile
        </a>
        </nav>
  
      <Card 
      value={this.state.tweak}
      onChange={this.handleInputChange}
      name="tweak"
      handleSubmit={this.handleSubmit}
       />
       <ListItems 
       tweaks={this.state.tweaks}
       />

      </div>
    )
    }

  };






export default App;
