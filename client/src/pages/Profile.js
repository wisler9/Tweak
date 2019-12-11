import React, {Component} from "react";
// import Card from "../components/Card"
// import ListItems from "../components/ListItems"
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";


class Profile extends Component {

  
    render() {
      const user = JSON.parse(localStorage.getItem("user"))
      console.log(user);
      return (
        <div>
          <div className="container menuBox">
            <h1 className="menuLogo">&lt;TWEAK/&gt;</h1>
            <div className="menuLinks">
              <a className="home" href="/main"><h2>Home</h2></a>

              <a className="explore" href="/user/:id"><h2>Explore</h2></a>
              
              <a className="messages" href="/user/:id"><h2>Messages</h2></a>
            </div>
          </div>


          <div className="container bioBox">
            <h2>Profile</h2>
            <div className="wrapper">
            <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                  <p>{user.userName}</p>
                  <p>{user.email}</p>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/main" className="btn btn-primary">Home</a>
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
