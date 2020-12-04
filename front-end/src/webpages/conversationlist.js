import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Conversationlist = (props) => {

    const [conversations, setConversations] = React.useState([]);
    
    const getConversations = ()=>{
        axios.get("http://localhost:8000/conversation", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("CC_Token")
            },
        })
        .then((response) => {
            setConversations(response.data);
          })
          .catch((err) => {
            setTimeout(getConversations, 5000);
          });
    };

    React.useEffect(() => {

        getConversations();
         // eslint-disable-next-line
    }, []);


  return (
    <div className="box">
    <div className="boxhead">Conversation</div>
    <div className="body">
      <div className="entry">
        <label htmlFor="user messgage">Users</label>
        <input
          type="text"
          name="convo"
          id="convo"
          placeholder="text"
        />
      </div>
    </div>
    <button>User</button>
    <div className="conversations">
    {conversations.map((conversation) => (
          <div key={conversation._id} className="conversation">
            <div>{conversation.username}</div>
            <Link to={"/message/" + conversation._id}>
              <div className="enter">Enter</div>
            </Link>
          </div>
        ))}
    </div>
  </div>

  );
};

export default Conversationlist;
