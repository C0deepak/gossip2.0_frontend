/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import EachChatCard from './EachChatCard'
import './styles/ChatListSideBar.css'
import { FiPlus, FiUsers } from 'react-icons/fi'
import CreateGroupModal from './extra/CreateGroupModal'

const ChatListSidebar = () => {
    const [showGroupModal, setShowGroupModal] = useState(false)

    let chats = [
        {
            "_id": "1",
            "isGroupChat": "false",
            "users": ["user1", "user2"],
            "latestMessage": {
                "content": "Hey, how are you?"
            }
        },
        {
            "_id": "2",
            "isGroupChat": "false",
            "users": ["user3", "user4"],
            "latestMessage": {
                "content": "Are we still meeting tomorrow?"
            }
        },
        {
            "_id": "3",
            "isGroupChat": "true",
            "chatName": "Work Team",
            "users": ["user5", "user6", "user7"],
            "latestMessage": {
                "content": "Don't forget about the deadline!"
            }
        },
        {
            "_id": "4",
            "isGroupChat": "false",
            "users": ["user1", "user8"],
            "latestMessage": {
                "content": "What time should I come over?"
            }
        },
        {
            "_id": "5",
            "isGroupChat": "false",
            "users": ["user9", "user10"],
            "latestMessage": {
                "content": "Let's grab lunch later!"
            }
        },
        {
            "_id": "3",
            "isGroupChat": "true",
            "chatName": "Work Team",
            "users": ["user5", "user6", "user7"],
            "latestMessage": {
                "content": "Don't forget about the deadline!"
            }
        },
        {
            "_id": "4",
            "isGroupChat": "false",
            "users": ["user1", "user8"],
            "latestMessage": {
                "content": "What time should I come over?"
            }
        },
        {
            "_id": "3",
            "isGroupChat": "true",
            "chatName": "Work Team",
            "users": ["user5", "user6", "user7"],
            "latestMessage": {
                "content": "Don't forget about the deadline!"
            }
        },
        {
            "_id": "4",
            "isGroupChat": "false",
            "users": ["user1", "user8"],
            "latestMessage": {
                "content": "What time should I come over?"
            }
        },
        {
            "_id": "3",
            "isGroupChat": "true",
            "chatName": "Work Team",
            "users": ["user5", "user6", "user7"],
            "latestMessage": {
                "content": "Don't forget about the deadline!"
            }
        },
        {
            "_id": "4",
            "isGroupChat": "false",
            "users": ["user1", "user8"],
            "latestMessage": {
                "content": "What time should I come over?"
            }
        },
        {
            "_id": "3",
            "isGroupChat": "true",
            "chatName": "Work Team",
            "users": ["user5", "user6", "user7"],
            "latestMessage": {
                "content": "Don't forget about the deadline!"
            }
        },
        {
            "_id": "4",
            "isGroupChat": "false",
            "users": ["user1", "user8"],
            "latestMessage": {
                "content": "What time should I come over?"
            }
        },
        {
            "_id": "3",
            "isGroupChat": "true",
            "chatName": "Work Team",
            "users": ["user5", "user6", "user7"],
            "latestMessage": {
                "content": "Don't forget about the deadline!"
            }
        },
        {
            "_id": "4",
            "isGroupChat": "false",
            "users": ["user1", "user8"],
            "latestMessage": {
                "content": "What time should I come over?"
            }
        },
    ]

    return (
        <>
            <div className="chatSidebar">
                <div className="chatSideTop">
                    <div className="cstHead">My Chats</div>
                    <div className="groupBtn" title='New group' onClick={() => setShowGroupModal(true)}><FiUsers size={20}/>+</div>
                </div>

                {chats ? (
                    <div className="chatSideChats">
                        {
                            chats.map((chat) => (
                                <EachChatCard key={chat._id} name={chat.isGroupChat === "false" ? 'Jane Doe' : 'Elsa Beauti'} img={chat.isGroupChat === "false" ? "/img/defaultavatar.jpg" : "/img/defaultgroup.png"} latestMessage={chat.latestMessage?.content} />
                            ))
                        }
                    </div>
                ) : ("Loading")}
            </div>
            {showGroupModal && <CreateGroupModal closeModal={() => setShowGroupModal(false)}/>}
        </>
    )
}

export default ChatListSidebar