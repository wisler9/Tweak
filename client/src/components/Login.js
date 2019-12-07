import React from 'react';
import LoginInfo from "./Login-info";

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }


    render() {
        return(
        <div className="container">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="inputEmail">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="{this.props.email}" onChange={this.handleChange} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="{this.props.password}" onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
    } 
}  
    


       


export default Login;