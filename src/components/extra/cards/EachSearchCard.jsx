/* eslint-disable no-unused-vars */
import React from 'react'

const EachSearchCard = () => {
    const handleFunction = () => {
        console.log('Sending request!')
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
        </div>
    )
}

export default EachSearchCard