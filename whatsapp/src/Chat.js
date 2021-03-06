
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios';

import "./Chat.css";
function Chat({ messages }) {
    const [input, setInput] = useState("");
    const sendMessage = async (e) => {
        e.preventDefault();
        await axios.post('/messages/new', {
            message: input,
            name: "pranjal",
            timestamp: "Just now!",
            received: true,
        });
    }
    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Anupama MaM</h3>
                    <p>Last seen at..</p>

                </div>
                <div className="chat__headerRight">
                <IconButton>
                      <SearchOutlined /> 
                    </IconButton>
                    <IconButton>
                      <AttachFile /> 
                    </IconButton>
                    <IconButton>
                      <MoreVert /> 
                    </IconButton>

                </div>
            </div>
            <div className="chat__body">
                {messages.map((message) => (
                    <p 
                    className= { `chat__message ${message.received && "chat__reciever" }`}
                    >
                    <span className="chat__name">{message.name}</span>
                    {message.message}
                    <span className="chat__timestamp">{message.timestamp}</span>

                </p>

                )
                )}
                
                
                            
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a Message" type="text"></input>
                    <button onClick={sendMessage} type="submit">send a messege</button>
                </form>
                < MicIcon />

            </div>
        </div>
    );
}

export default Chat
