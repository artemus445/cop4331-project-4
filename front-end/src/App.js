import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Homepage from "./webpages/homepage";
import Login from "./webpages/login";
import register from "./webpages/register";
import Message from "./webpages/message";
import Conversationlist from "./webpages/conversationlist";
import io from "socket.io-client";
import makeToast from "./toaster";

function App() {
  const [ socket, setSocket] = React.useState(null);
  const setupSocket = () => {

    const token = localStorage.getItem("CC_Token");
    if(token.length >0 && !socket){
      const newsocket = io("http://localhost:8000" ,{

        query: {
            token: localStorage.getItem("CC_Token"),
    },
    });
    newsocket.on("disconnect", () => {
      setSocket(null);
      setTimeout(setupSocket, 3000);
      makeToast("error", "Socket Disconnected!");
    });

    newsocket.on("connect", () => {
      makeToast("success", "Socket Connected!");
    });
    setSocket(newsocket);
  }
};

React.useEffect(() => {
  setupSocket();
  //eslint-disable-next-line
}, []);

  return(
 <BrowserRouter>
  <Switch>
  <Route path = "/" component = {Homepage} exact/>
  <Route path = "/login" component = {Login} exact/>
   <Route path = "/register" component = {register}exact/>
  <Route path = "/conversationlist" component = {Conversationlist} exact/>
  <Route   path = "/message/:id" component = {Message} exact/>
  </Switch>
 </BrowserRouter>
  );
}

export default App;
