import React from 'react';

const Message = ({name, message, timestamp}) => {
  return (
    <p className="relative text-md p-3 w-fit rounded-full bg-[#ffffff] mb-8">
      <span className="absolute -top-4 font-semibold text-xs">{name}</span>  
      {message}
      <span className="ml-3 text-xs text-gray-400">
        {timestamp}
      </span>        
    </p>
  )
}

export default Message;
