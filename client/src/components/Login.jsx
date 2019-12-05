import React from "react";
// import LoginForm from "./login-form";
// import SignUp from "signUp-form";

class Login extends React.Component {
    state = {
        email: "",
        password: "",
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    // onSubmit =  (e) => {
    //     e.preventDefault()
    //     console.log("I am cool")
    // onSubmit = async () => {
        // const response = await this.props.mutate({
        //     variables: this.state,
        // });
        // const { token, refreshToken } = response.data.login;
        // console.log(response);
        // localStorage.setItem("token", token);
        // localStorage.setItem("refreshToken", refreshToken);
    // }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        console.log("I am cool")
        event.preventDefault();
      }


    render(){
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input
                    name="email"
                    placeholder="Email"
                    onChange={e=> this.onChange(e)}
                    value={this.state.email} />
                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={e=> this.onChange(e)}
                    value={this.state.password} /> 
                <br />
                
                    {/* <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                    </label> */}
                    <input type="submit" value="Submit" />
                </form>

                {/* <button onSubmit={this.handleSubmit} type="primary">Login</button>    */}
                {/* <button onClick={this.onSubmit} type="primary">Login</button>    */}
            </div>
        );
    }
}

// const mutation = gql`
// mutation ($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//         token
//         refresToken
//     }
// }
// `;

export default Login;