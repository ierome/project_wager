/*import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
*/

import React from "react";

import Messages from "./Messages";
import InfoBar from "./Input";
import Input from "./InfoBar";

import "./Chat.css";

/*let socket;

 const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "https://project-chat-application.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, error => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", message => {
      setMessages([...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [messages]);

  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };


const Game = props => {
  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />{" "}
        
      </div>
    </div>
  );
};

export default Chat;*/

const Chat = props => {
  return (
    <div className="outerContainer">
      <div className="chat-container">
      <Input/>
        
        <Messages />
        <InfoBar />
      </div>
    </div>
  );
};

export default Chat;
