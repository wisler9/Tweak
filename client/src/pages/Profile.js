import React from "react";
import Profile from "../components/Profile/index";

class Profile extends Component {
    state = {
      Name: "",
      Bio: "",
      Tweak:"",
      Tweaks: []

    };
  
    // componentDidMount() {
    //   this.loadTweaks()
    // }
  
    handleSubmit = event => {
     
      this.setState((previousState) => {
        return {
          Name: "",
          Bio: "",
          Tweaks: [previousState.tweaks.concat(previousState.tweak)],
          Tweak: ""
        }
        
      })
    };
  
    handleInputChange = event => {
      const { Tweaks:[value], Tweak:value } = event.target;
      // console.log(name, value)
      this.setState({
        Tweaks: [previousState.tweaks.concat(previousState.tweak)],
          Tweak: ""
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
