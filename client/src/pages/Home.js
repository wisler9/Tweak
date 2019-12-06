import React, { Component } from 'react';
import "../components/Home/style.css";

function Home() {
    return(
     <div className="container">
         <div className="row">
            <div className="col md-6" id="app-promo">
                <div className="container app-promo">
                    <h1>&lt;TWEAK/&gt;</h1>

                    <h3 className="homeText" id="box1">Follow your interests</h3>
                    <h3 className="homeText" id="box2">Hear what other people are talking about</h3>
                    <h3 className="homeText" id="box3">Join the conversation</h3>
                </div>
            </div>

            <div className="col md-6" id="login-area">
             <form>
                <div className="form-group">
                <label for="InputEmail1"></label>
                <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Username or email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                <label for="InputPassword1"></label>
                <input type="password" className="form-control" id="InputPassword1" placeholder="Password" />
                </div>
                <div className="form-group form-check">
                </div>
                <button type="submit" className="btn btn-outline-primary login">Log in</button>
                
                <h1>&lt;TWEAK/&gt;</h1>
                <h3>See what's happening in coding right now</h3>

                <h4>Join Tweak today.</h4>

                <button type="submit" className="btn btn-secondary signUp">Sign up</button>
                <button type="submit" className="btn btn-outline login">Log in</button>
             </form>
            </div>
         </div>
    </div>
  );
}   

export default Home