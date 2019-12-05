import React from "react";
import {gql, graphql} from "react-apollo";
import LoginForm from "./login-form";
import SignUp from "signUp-form";

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

    onSubmit = async () => {
        const response = await this.props.mutate({
            variables: this.state,
        });
        const { token, refreshToken } = response.data.login;
        console.log(response);
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refreshToken);
    }

    render(){
        return (
            <div>
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
                <button onClick={() => this.onSubmit()} type="primary">Login</button>   
            </div>
        );
    }
}

const mutation = gql`
mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        refresToken
    }
}
`;

export default graphql(mutation)(Login);