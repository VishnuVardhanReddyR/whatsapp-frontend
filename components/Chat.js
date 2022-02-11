import React, { useState } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile } from "@material-ui/icons";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from "@material-ui/icons/Mic";
import { PaperAirplaneIcon } from '@heroicons/react/outline';
import Message from "./Message";
import Receiver from "./Receiver";
import axios from "./axios";

const Chat = ({ messages }) => {

  const [input, setInput] = useState("");
  
  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post('/messages/new', {
        message: input,
        name:  "vishnu",
        timestamp: "Just now!",
        received: false
    });

    setInput("");
  }; 
  
  return (
    <div className="flex flex-col flex-[0.65]">
      <div className="p-5 flex items-center border-b-[1px] border-gray-200">
        <Avatar />

        <div className="flex-1 pl-5">
          <h3 className="mb-[3px] font-bold text-md">Room name</h3>
          <p className="text-gray-500 text-sm">Last seen at...</p>
        </div>

        <div className="headerRight">
          <IconButton>
              <SearchOutlined className="font-xl" />
          </IconButton>
          <IconButton>
              <AttachFile className="font-xl" />
          </IconButton>
          <IconButton>
              <MoreVertIcon className="font-xl" />
          </IconButton>
        </div>
      </div>

      <div className="flex-1 bg-chat-body-bgimg bg-repeat bg-center p-8 overflow-y-scroll">
        {messages.map((message) => (
          <>
            {message.received ? (
                <Message name={message.name} message={message.message} timestamp={message.timestamp} />
              ):(
                <Receiver name={message.name} message={message.message} timestamp={message.timestamp} />
            )}
          </>
        ))}
      </div>

      <div className="flex justify-between items-center h-16 border-t-2 border-solid border-gray-100">
        <InsertEmoticonIcon className="text-gray-500" />
        <form className="flex flex-1 ">
          <input value={input} onChange={e => setInput(e.target.value)} 
          className="outline-none flex-1 rounded-lg p-2 border-none" placeholder="Type a message" type="text" />
          <button onClick={sendMessage} className="hidden" type="submit">
            <PaperAirplaneIcon className="h-6 ml-2 text-gray-400 rotate-45" />
          </button>
        </form>
        <MicIcon className="text-gray-500"/>
      </div>
    </div>
  )
}

export default Chat;
