import React from 'react'
import axios from 'axios';
import makeToast from "../toaster";

const register = (props) => {
    const fullRef = React.createRef();
    const userRef = React.createRef();
    const emailRef = React.createRef();
    const passwordRef = React.createRef();
  
    const registerUser = () => {
      const fullname = fullRef.current.value;
      const username = userRef.current.value;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
  
      axios.post("http://localhost:8000/user/register", {
        fullname,  
        username,
        email,
        password,
        }).then((response) => {
        console.log(response.data);
          makeToast("success", response.data.message);
          props.history.push("/login");
        }).catch((err) => {
         

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
      <div className="boxhead">Registration</div>
      <div className="body">

        <div className="entry">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            ref={fullRef}
          />
        </div>


        <div className="entry">
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="somename"
            ref={userRef}
          />
        </div>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="enail@mail.com"
          ref={emailRef}
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

      <button onClick={registerUser}>Register</button>
      
    </div>

    );
};

export default register;