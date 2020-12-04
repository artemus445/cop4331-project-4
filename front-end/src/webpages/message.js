import React from 'react';
import io from "socket.io-client"



const Message = ({match}) => {
 

   const socket = io("http://localhost:8000", {
    query: {
      token: localStorage.getItem("CC_Token"),
    },
  });

  

    return (
    <div className = "boxhead" Messaging >
       <div className="body">
      <div className="entry">
        <label htmlFor="user messgage">User 1</label>
        <input
          type="text"
          name="convo"
          id="convo"
          placeholder="text"
        />
      </div>
    </div>

    <div className="body">
      <div className="entry">
        <label htmlFor="user messgage">User 2</label>
        <input
          type="text"
          name="convo"
          id="convo"
          placeholder="text"
        />
      </div>
    </div>

    </div>
    );
      
    
};
 export default Message;