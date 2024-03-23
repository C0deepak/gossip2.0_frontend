/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { FiXCircle } from 'react-icons/fi'

const SelectedUserCard = ({user, handleFunction}) => {
    return (
        <>
            <div className="selectedUserCard">{user.name} <div style={{display: "flex", alignItems: "center"}}onClick={handleFunction}><FiXCircle /></div></div>
        </>
    )
}

export default SelectedUserCard