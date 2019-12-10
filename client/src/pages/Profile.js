import React, {Component} from "react";
// import Card from "../components/Card"
// import ListItems from "../components/ListItems"
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";


class Profile extends Component {
    state = {
      Name: "",
      Bio: "",
      Experience: "",
      Tweak:"",
      Tweaks: ["I am a beginner Full Stack web developer", "I have learned the MERN stack"]

    };
  
    // componentDidMount() {
    //   this.loadTweaks()
    // }
  
    handleSubmit = event => {
     
      this.setState(() => {
        return {
          Name: "",
          Bio: "",
          Experience: "",
          Tweaks: [],
          Tweak: ""
        }
        
      })
    };
  
    handleInputChange = event => {
      const { Tweaks, Tweak } = event.target;
      // console.log(name, value)
      this.setState({
        Tweaks: [],
          Tweak: ""
      });
    };
  
    render() {
      return (
        <div>
          <div className="container menuBox">
            <h1 className="menuLogo">&lt;TWEAK/&gt;</h1>
            <div className="menuLinks">
              <Link to="/main">
              <a className="home" href="/user/:id"><h2>Home</h2></a>
              </Link>
             
              <a className="explore" href="/user/:id"><h2>Explore</h2></a>
              
              <a className="messages" href="/user/:id"><h2>Messages</h2></a>
            </div>
          </div>
{/* 
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
          </div> */}

          <div className="container bioBox">
            <h2>Profile</h2>
            <div className="wrapper">
            <div class="card">
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
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
     export default  Profile
