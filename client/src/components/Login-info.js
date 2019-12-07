import React from 'react';
import Login from "./Login";



function LoginInfo(props) {
    return(
        <div>
           <p>email={props.email}</p>
           <p>password={props.password}</p>
        </div>
    );
}




export default LoginInfo;