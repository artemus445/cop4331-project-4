import React from 'react'
import axios from 'axios';
import makeToast from "../toaster";


const Login = (props) => {
  
    const userRef = React.createRef();
    
    const passwordRef = React.createRef();
  
    const loginUser = () => {
      
      const username = userRef.current.value;
      
      const password = passwordRef.current.value;
  
      axios.post("http://localhost:8000/user/login", {
        
        username,
        
        password,
        })
        .then((response) => {
        console.log(response.data);
          makeToast("success", response.data.message);
          localStorage.setItem("CC_Token", response.data.token);
          props.history.push("/conversationlist");
          props.setupSocket();
        })
        .catch((err) => {
         

            console.log(err);
          if (
            err &&
            err.response &&
            err.response.data &&
            err.response.data.message
          )
            makeToast("error", err.response.data.message);
        });
    };
    return (

      <div className="box">
      <div className="boxhead">Login</div>
      <div className="body">

        <div className="entry">
          <label htmlFor="email">username</label>
          <input
            type="username"
            name="username"
            id="username"
            placeholder="someguy"
            ref={userRef}
          />
        </div>

        <div className="entry">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
            ref={passwordRef}
          />
        </div>
        
        <button onClick={loginUser}>Login</button>
      </div>
    </div>

    );
};

export default Login;