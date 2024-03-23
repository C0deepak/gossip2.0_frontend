/* eslint-disable no-unused-vars */
import React from 'react'
import Title from '../components/shared/Title'
import Navbar from '../components/shared/Navbar'
import ChatListSidebar from '../components/ChatListSidebar'
import './styles/Chat.css'
import ChatPortal from '../components/ChatPortal'
import ExtraSidebar from '../components/ExtraSidebar'

const Chat = () => {
  let user = true

  return (
    <>
      <Title />
      <div className="chat">
        <Navbar />
        <div className="chatMain">
          {user && <ChatListSidebar />}
          {user && <ChatPortal />}
          {user && <ExtraSidebar />}
        </div>
      </div>
    </>
  )
}

export default Chat