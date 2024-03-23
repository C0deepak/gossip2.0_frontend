/* eslint-disable no-unused-vars */
import React from 'react'
import './styles/EachNoteCard.css'
import { FiTrash } from 'react-icons/fi'

const EachNoteCard = () => {
    return (
        <div className='eachNoteCard'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia expedita quidem ipsa facilis accusamus quisquam nobis totam sit? Perspiciatis culpa accusantium ratione quae odit vero, vel ipsum maxime voluptate molestias.</p>
            <div className='eNCBottom'>
                <div>
                    <strong>Jane Doe</strong>
                    <span>07-02-2024</span>
                </div>
                <div>
                    <FiTrash size={16}/>
                </div>
            </div>
        </div>
    )
}

export default EachNoteCard