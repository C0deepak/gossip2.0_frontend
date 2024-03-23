/* eslint-disable no-unused-vars */
import React from 'react'
import GroupUserCard from './cards/GroupUserCard'
import './styles/GroupSidebar.css'

const GroupSidebar = () => {
    return (
        <div className='groupSide'>
            <img src="/img/defaultavatar.jpg" alt="" className='groupImage'/>
            <div className='gSAbout'>
                <p className='gSName'>Chatte-Batte</p>
                <div style={{display: 'flex', gap: '.6rem', flexDirection: 'column', width: '100%'}}>
                    <GroupUserCard role='admin'/>
                    <GroupUserCard role='member'/>
                    <GroupUserCard role='member'/>
                    <GroupUserCard role='member'/>
                </div>
            </div>
            <button>Delete Group</button>
        </div>
    )
}

export default GroupSidebar