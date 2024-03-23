/* eslint-disable no-unused-vars */
import React from 'react'
import './styles/ProfileSidebar.css'

const ProfileSidebar = () => {
    return (
        <div className='profileSide'>
            <img src="/img/defaultavatar.jpg" alt="" />
            <div className='pSAbout'>
                <p className='pSName'>Jane Doe</p>
                <p>jane@example.com</p>
            </div>
            <button>Delete Chat</button>
        </div>
    )
}

export default ProfileSidebar