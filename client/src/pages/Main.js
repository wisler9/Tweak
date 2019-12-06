import React, { Component } from 'react';
import "../components/Main/style.css";
import Card from "../components/Card/index"
import ListItems from "../components/ListItems/index"

class Main extends Component {
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
          <div className="container menu">
          <h1 className="logo">&lt;TWEAK/&gt;</h1>
          <a className="navbar-brand" href="/user/:id">Profile</a>
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
                


        </div>
        
      )
      }
  
    };
  




// function Main(){
// return(
//     <div>
// <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//        <a className="navbar-brand" href="/">
//          {`<TWEAK/>`}
//         </a>
//        <a className="navbar-brand" href="/user">
//         Profile
//         </a>
//         </nav> 
  
//        <Card 
//       value={this.state.tweak}
//       onChange={this.handleInputChange}
//       name="tweak"
//       handleSubmit={this.handleSubmit}
//        />
//        <ListItems 
//        tweaks={this.state.tweaks}
//        />  
// </div>
// )
// }
     export default  Main