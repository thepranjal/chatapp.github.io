import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import SidebarChat from "./SidebarChat";
  

function sidebar() {
    return (
        <div className='sidebar'>
            
            <div className="sidebar__header">
                <Avatar src="me.jpg" />

                <div className="sidebar__headerRight">
                    <IconButton>
                      <DonutLargeIcon /> 
                    </IconButton>
                    <IconButton>
                      <ChatIcon /> 
                    </IconButton>
                    <IconButton>
                      <MoreVertIcon /> 
                    </IconButton>
                
                    
                </div>
            </div>
            
            <div className="sidrbar__search">
                    <div className="sidebar__searchContainer">
                        <SearchOutlined />
                        <input placeholder="search or start new chat" type="text"></input>
                    </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>

        </div>         
        
    );
}

export default sidebar;
