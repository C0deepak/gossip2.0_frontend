/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FiCode, FiFileText, FiImage, FiLock, FiMic, FiPlus, FiSend, FiVideo } from 'react-icons/fi'
import './styles/ChatPortal.css'

const ChatPortal = () => {
    const [loading, setLoading] = useState(false)
    const [isTyping, setIsTyping] = useState(false)
    const [message, setMessage] = useState('')
    const [showMessageCard, setShowMessageCard] = useState(false)

    let selectedChat = true

    const sendMessage = () => {
        console.log('Message Sended')
    }

    return (
        <>
            <div className="chatPortal">
                {!selectedChat ? (
                    <div className='notSelectedScreen'>
                        <img src="/img/screen.png" alt="" />
                        <div className="nssText">No chats selected, select a chat to get started chatting</div>
                        <div className="nssNote"><FiLock />Your chats are end to end encrypted</div>
                    </div>
                ) : (
                    <div className='selectedScreen'>
                        {loading ? (
                            <div className="messageArea">loading...</div>
                        ) : (
                            <div className="messageArea">
                                {/* {messages && messages.map((m, i) => (
                                <div style={{ display: 'flex', gap: '.2rem' }} key={m._id}>
                                    {(isSameSender(messages, m, i, user._id) || isLastMessage(messages, m, i, user._id)) && (
                                        <img src={m.sender.pic} style={{ width: '30px', height: '30px', borderRadius: '50%' }} title={m.sender.name} />
                                    )}
                                    <div key={m._id} style={{ background: `${m.sender._id === user._id ? '#e95f76' : '#ddd'}`, marginLeft: isSameSenderMargin(messages, m, i, user._id) }} className='chatSpan'>{m.content}</div>
                                </div>
                            ))} */}
                            </div>
                        )}
                        <div className="sendArea">
                            {isTyping ? <div className='sendAreaTyping'><img src="/img/typing.gif" alt="" /></div> : <></>}
                            <form>
                                <div className='sendMore'>
                                    <FiPlus onClick={() => setShowMessageCard(!showMessageCard)} />
                                    {showMessageCard && (
                                        <div className="sendMoreCard">
                                            <p><FiFileText />File</p>
                                            <p><FiImage />Photo</p>
                                            <p><FiVideo />Video</p>
                                            <p><FiMic />Audio</p>
                                            <p><FiCode />Code</p>
                                        </div>
                                    )}
                                </div>
                                <input type="text" placeholder='Type a message...' onChange={(e) => setMessage(e.target.value)} value={message} />
                                <button type='submit' onClick={sendMessage}><FiSend /></button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default ChatPortal