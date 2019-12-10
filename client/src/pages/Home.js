import React, { Component } from 'react';
import axios from  "axios";
import "../components/Home/style.css";



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


                            <h3 className="homeText" id="box1">Follow your interests</h3>
                            <h3 className="homeText" id="box2">Hear what other people are talking about</h3>
                            <h3 className="homeText" id="box3">Join the conversation</h3>
                        </div>
                    </div>

                    <div className="col md-6" id="login-area">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                        <label htmlFor="InputEmail1"></label>
                        <input type="email" onChange={this.handleChange} name="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                        <label htmlFor="InputPassword1"></label>
                        <input type="password" onChange={this.handleChange} name="password" className="form-control" id="Password" placeholder="Password" />
                        </div>
                        <div className="form-group form-check">
                        </div>
                        <button type="submit" className="btn btn-outline-primary login">Log in</button>
                        
                        <h1>&lt;TWEAK/&gt;</h1>
                        <h3>See what's happening in coding right now</h3>

            <div className="col md-6" id="login-area">


                        <h4>Join Tweak today.</h4>

                        <button type="submit" className="btn signIn">Sign up</button>
                        
                        <button type="submit" className="btn btn-outline login">Log in</button>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}   

export default Home