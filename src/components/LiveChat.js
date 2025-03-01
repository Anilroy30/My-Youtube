import ChatMessage from './ChatMessage'
import react, { useEffect } from 'react'

const LiveChat = () => {
    useEffect(() => {
        const i = setInterval(() => {
            // API Polling
            console.log('Polling for new messages');
        }, 2000);

        return () => clearInterval(i);
    }, []);

  return (
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg'>
        <ChatMessage name="Arjun" message="Hello World"/>
        <ChatMessage name="Arjun" message="Hello World"/>
        <ChatMessage name="Arjun" message="Hello World"/>
        <ChatMessage name="Arjun" message="Hello World"/>
        <ChatMessage name="Arjun" message="Hello World"/>
    </div>
  )
}

export default LiveChat