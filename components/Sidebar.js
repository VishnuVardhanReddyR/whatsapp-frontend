import React from 'react';
import { ChatAlt2Icon } from '@heroicons/react/solid';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat.js";

const Sidebar = () => {
  return (
    <div className="flex flex-col flex-[0.35]">
        <div className="flex justify-between p-5 border-r-[1px] border-gray-light">
            <Avatar src="http://t3.gstatic.com/images?q=tbn:ANd9GcRFwQcvntDypuiAjCT5vbXp8lBNdhbylkR_DRFqamaEG_vOjvF2" />
            <div className="flex items-center justify-between space-x-6 min-width-[10vw]">
                <IconButton>
                    <ChatAlt2Icon className="h-6 font-xl" />
                </IconButton>
                <IconButton>
                    <DonutLargeIcon className="font-xl" />
                </IconButton>
                <IconButton>
                    <MoreVertIcon className="font-xl" />
                </IconButton>
            </div>
        </div>

        <div className="flex items-center bg-[#f6f6f6] h-11 p-3">
            <div className="flex items-center bg-white w-full h-7 rounded-2xl">
                <SearchOutlined className="text-gray-400 p-1" />
                <input className="border-none ml-3 outline-0" placeholder="Search or start new chat" type="text" />
            </div>
        </div>

        <div className="flex-1 bg-white overflow-y-scroll">
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>
    </div>
  )
}

export default Sidebar;
