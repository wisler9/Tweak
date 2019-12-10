import React, { Component } from 'react';
import axios from  "axios";
import "../components/Home/style.css";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";


class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email:"",
        password:""
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      // event.preventDefault();
      this.setState({[event.target.name] : event.target.value});
      // console.log(event.target);
    }
  
    handleSubmit(event) {
      // console.log(this.state.userName)
    event.preventDefault();
    axios.post('/api/login', {
      email: this.state.email,
      password: this.state.password,
    }).then( res => {
          console.log(res)
    })
  }

    

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col md-6" id="app-promo">
                        <div className="container-home app-promo">
                            <h1>&lt;TWEAK/&gt;</h1>


            <div className="col md-6" id="login-area">
             <form>
                <div className="form-group">
                <label for="InputEmail1"></label>
                <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Username or email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                <label for="InputPassword1"></label>
                <input type="password" className="form-control" id="Password" placeholder="Password" />
                </div>
                <div className="form-group form-check">
                </div>
                <Link to={"/main"}>

                <button type="submit" className="btn btn-outline-secondary login">Log in</button>
                </Link>
                
                <h1>&lt;TWEAK/&gt;</h1>
                <h3>See what's happening in coding right now</h3>


                            <h3 className="homeText" id="box1">Follow your interests</h3>
                            <h3 className="homeText" id="box2">Hear what other people are talking about</h3>
                            <h3 className="homeText" id="box3">Join the conversation</h3>
                        </div>
                    </div>

                <button type="submit" className="btn signIn">Sign up</button>
                <Link to={"/main"}>
                <button type="submit" className="btn btn-outline login"> Log in</button>
                </Link>
               
             </form>

            </div>
        );
    }
}   

export default Home