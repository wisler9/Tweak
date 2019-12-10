import React from "react";

class SignUp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username:"",
        email:"",
        password:"",
        bio:"",
        experience:""
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        // event.preventDefault();
        this.setState({[event.target.name] : event.target.value});
        //   console.log(event.target.name);
    }
  
    handleSubmit(event) {
        // console.log(this.state.userName)
        console.log("dssddfs")
      event.preventDefault();
      axios.post('/api/user', {
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password,
        bio: this.state.bio,
        experience: this.state.experience,
      }).then( res => {
            console.log(res)
      })
    }

    


    render() {
        console.log(this.state);
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="userName">User Name</label>
                        <input type="text" onChange={this.handleChange} name="username" className="form-control" id="userName" aria-describedby="userName" placeholder="Enter username" />
                        <small id="emailHelp" className="form-text text-muted"></small>
                    </div>
                    <div className="form-group">
                        <label for="userEmail">Email address</label>
                        <input type="email"  onChange={this.handleChange} name="email"  className="form-control" id="userEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="userPassword">Password</label>
                        <input type="password"  onChange={this.handleChange} name="password" className="form-control" id="userPassword" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label for="userBio">Bio</label>
                        <textarea  onChange={this.handleChange}  name="bio" className="form-control" id="userBio" rows="3"></textarea>
                    </div>
                    
                    <div className="form-group">
                        <label for="userExperience">Experience</label>
                        <textarea  onChange={this.handleChange}  name="experience" className="form-control" id="userExperience" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
            </div>
        );
    }
}



export default SignUp;
