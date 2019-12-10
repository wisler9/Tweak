import React, { Component } from 'react';
import "../components/Main/style.css";
import Card from "../components/Card/index"
import ListItems from "../components/ListItems/index"

class Main extends Component {
    state = {
      tweaks: ["Top Programming Blogs to Improve Your Skills: Coding Horror, David Walsh, A List Apart", "test of tweak"],
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
          <div className="container menuBox">
            <h1 className="menuLogo">&lt;TWEAK/&gt;</h1>
            <div className="menuLinks">
              <a className="explore" href="/user/:id"><i className="fa fa-compass"></i><h2>Explore</h2></a>
              <a className="messages" href="/user/:id"><i className="fa fa-envelope"><h2> Messages</h2></i></a>
              <a className="profile" href="/user/:id"><i className="fa fa-user-circle"></i><h2>Profile</h2></a>
            </div>
          </div>

          <div className="container tweakBox">
            <h2>Home</h2>
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

          <div className="container trendingBox">
            <h2>Trending</h2>
            <div className="wrapper">
            <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      )
      }
  
    };
  

     export default  Main