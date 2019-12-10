import React from 'react';


class Login extends React.Component {
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
   
  }

    

    render() {
        return(
        <div className="container">
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                        <label for="inputEmail">Email address</label>
                        <input type="email"  onChange={this.handleChange} name="email"  className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="inputPassword">Password</label>
                        <input type="password"  onChange={this.handleChange} name="password" className="form-control" id="inputPassword" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
    } 
}  
    


       


export default Login;