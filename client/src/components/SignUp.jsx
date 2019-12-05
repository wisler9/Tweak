import React from "react";

function SignUp() {
  return (
    <div className="container">
        <form>
            <div className="form-group">
                <label for="userName">User Name</label>
                <input type="text" className="form-control" id="userName" aria-describedby="userName" placeholder="Enter username" />
                <small id="emailHelp" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group">
                <label for="bio">Bio</label>
                <textarea className="form-control" id="bioTextarea" rows="3"></textarea>
            </div>
            
            <div className="form-group">
                <label for="experience">Experience</label>
                <textarea className="form-control" id="experienceTextarea" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
    </div>
  );
}



export default SignUp;
