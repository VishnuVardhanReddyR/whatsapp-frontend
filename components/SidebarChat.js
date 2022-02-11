import React from 'react';
import { Avatar } from "@material-ui/core";

const SidebarChat = () => {
  return (
    <div className="flex p-5 cursor-pointer border-b-[1px] border-[#f6f6f6] border-solid 
    hover:bg-[#ebebeb]">
      <Avatar />
      <div className="ml-4">
          <h2 className="text-md font-semibold mb-1">Room name</h2>
          <p className="text-sm text-gray-500">This is the last message</p>
      </div>
    </div>
  )
}

export default SidebarChat;
