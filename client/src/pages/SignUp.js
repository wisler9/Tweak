import React from "react";
import "../components/SignUp/style.css";
import axios from  "axios";
import { withRouter} from "react-router-dom";




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
  
    constuctor() {
        this.routeChange = this.routeChange.bind(this);
      }
    handleChange(event) {
        // event.preventDefault();
        this.setState({[event.target.name] : event.target.value});
        //   console.log(event.target.name);
    }
  
    handleSubmit(event) {
        // console.log(this.state.userName)
        // console.log("dssddfs")
      event.preventDefault();
      const user = {
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password,
        bio: this.state.bio,
        experience: this.state.experience,
      }
      localStorage.removeItem("user");
      localStorage.setItem("user", JSON.stringify(user));
      let path = "profile";
      this.props.history.push(path);

    //   axios.post('/api/user', {
    //     userName: this.state.userName,
    //     email: this.state.email,
    //     password: this.state.password,
    //     bio: this.state.bio,
    //     experience: this.state.experience,
    //   }).then( res => {
    //         console.log(res)
    //   })
    }

    


    render() {
            console.log(this.state);
            return (
            <div className="container signup">
                <div className="row head">Create your account</div>
                <h1 className="logo">&lt;TWEAK/&gt;</h1>
                <a href="https://placeholder.com"/><img src="https://via.placeholder.com/200" alt="" className="img-thumbnail" placeholder="Image"></img>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group signup">
                        <label htmlFor="userName">User Name</label>
                        <input type="text" onChange={this.handleChange} name="username"className="form-control" id="userName" aria-describedby="userName" placeholder="Enter username" />
                    </div>
                    <div className="form-group signup">
                        <label htmlFor="userEmail">Email address</label>
                        <input type="email" onChange={this.handleChange} name="email"  className="form-control" id="userEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group signup">
                        <label htmlFor="userPassword">Password</label>
                        <input type="password" onChange={this.handleChange} name="password" className="form-control" id="userPassword" placeholder="Password" />
                    </div>
                    <div className="form-group signup">
                        <label htmlFor="bio">userBio</label>
                        <textarea onChange={this.handleChange}  name="bio" className="form-control" id="userBio" rows="3"></textarea>
                    </div>
                    
                    <div className="form-group signup">
                        <label htmlFor="userExperience">Experience</label>
                        <textarea onChange={this.handleChange}  name="experience" className="form-control" id="userExperience" rows="3"></textarea>
                    </div>

                    <button type="submit" className="btn btn-secondary createBtn">Submit</button>

                    </form>
            </div>
        );
    }
}



export default withRouter(SignUp) 
