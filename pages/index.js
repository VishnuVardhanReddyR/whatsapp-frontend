import Head from 'next/head'
import Sidebar from '../components/Sidebar';
import Chat from "../components/Chat";
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from '../components/axios';

export default function Home() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync')
      .then(response => {
        setMessages(response.data);
      });
  },[]);

  useEffect(() => {
    const pusher = new Pusher('d2843809a266fd446028', {
      cluster: 'eu',
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  },[messages]);

  console.log(messages);

  return (
    <div className="grid items-center justify-center h-screen bg-[#DADBD3]">
      <Head>
        <title>Whatsapp Plus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex bg-[#ededed] -mt-12 h-[90vh] w-[90vw] shadow-2xl">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  )
}
