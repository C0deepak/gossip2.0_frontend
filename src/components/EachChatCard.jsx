/* eslint-disable no-unused-vars */
import React from 'react'
import './styles/EachChatCard.css'

const EachChatCard = (props) => {
    return (
        <div className="eachChatCard">
            <img src={props.img} alt="" />
            <div className="eachChatInfo">
                <div className="eachChatName">{props.name}</div>
                <div className="eachChatMsg">{props.latestMessage}</div>
            </div>
        </div>
    )
}

export default EachChatCard