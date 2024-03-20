import React from 'react'
import Chat from './Chat'
import Promptbox from '../Components/Promptbox'

const ChatBox = () => {
  return (
    <>
    <div className='flex flex-col h-screen overflow-hidden'>
    <Chat/>
    </div>
   
    </>
  )
}

export default ChatBox