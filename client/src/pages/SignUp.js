import React from "react";
import "../components/SignUp/style.css";

function SignUp() {
  return (
    <div className="container signup">
        <div className="row head">Create your account</div>
        <h1 className="logo">&lt;TWEAK/&gt;</h1>
        <a href="https://placeholder.com"/><img src="https://via.placeholder.com/200" alt="" class="img-thumbnail" placeholder="Image"></img>
        <form>
            <div className="form-group signup">
                <label for="userName">User Name</label>
                <input type="text" className="form-control" id="exampleUserName1" aria-describedby="userName" placeholder="Enter username" />
            </div>
            <div className="form-group signup">
                <label for="InputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group signup">
                <label for="InputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group signup">
                <label for="bio">Bio</label>
                <textarea className="form-control" id="bioTextarea" rows="3"></textarea>
            </div>
            
            <div className="form-group signup">
                <label for="experience">Experience</label>
                <textarea className="form-control" id="experienceTextarea" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-secondary">Submit</button>
            </form>
    </div>
  );
}



export default SignUp;
