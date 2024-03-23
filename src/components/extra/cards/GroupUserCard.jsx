/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const GroupUserCard = ({ role }) => {

    const handleFunction = () => {
        console.log('Clicked...')
    }

    return (
        <div className="skeletonCard" onClick={handleFunction}>
            <div className="skeleton-left flex1">
                <img src='/img/defaultavatar.jpg' alt="" />
            </div>
            <div className="skeleton-right flex2">
                <div style={{ fontWeight: "600" }}>Jane Lee</div>
                <div style={{ fontSize: ".8rem" }}>jane@example.com</div>
            </div>
            <div>
                {role === 'admin' && <div className='admin' style={{ padding: '.1rem .5rem', width: 'fit-content', color: '#03c04a', backgroundColor: '#99edc3', fontSize: '.8rem', borderRadius: '10px' }}>Admin</div>}
                {role === 'member' && <div className='member' style={{padding: '.1rem .5rem', width: 'fit-content', color: '#CF1020', backgroundColor: '#ff999a', fontSize: '.8rem', borderRadius: '10px'}}>Remove</div>}
            </div>
        </div>
    )
}

export default GroupUserCard