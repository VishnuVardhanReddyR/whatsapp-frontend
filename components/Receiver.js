import React from 'react';

const Receiver = ({ name, message, timestamp }) => {
  return (
    <p className="relative text-md p-3 w-fit rounded-full bg-[#dcf8c6] ml-auto mb-8">
      <span className="absolute -top-4 font-semibold text-xs">{name}</span>  
      {message}
      <span className="ml-3 text-xs text-gray-400">
        {timestamp}
      </span>        
    </p>
  )
}

export default Receiver;
