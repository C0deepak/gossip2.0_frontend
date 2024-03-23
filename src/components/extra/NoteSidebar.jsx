/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import './styles/NoteSidebar.css'
import EachNoteCard from './cards/EachNoteCard'

const NoteSidebar = () => {
    const [note, setNote] = useState('')
    const [loading, setLoading] = useState(false)

    const handleAdd = () => {
        console.log('Note Added...')
    }
    return (
        <div className='noteSide'>
            <form>
                <div className="inputField">
                    <input type="text" placeholder='Write notes...' value={note} onChange={(e) => setNote(e.target.value)} />
                </div>
                <button type="submit" className='noteBtn' onClick={handleAdd}><FiPlus size={18}/></button>
            </form>
            <div className="noteData">
                <div className="skeletonData">
                    {loading ? (
                        <p>loading...</p>
                    ) : (
                        <EachNoteCard />
                    )}
                </div>
            </div>
        </div>
    )
}

export default NoteSidebar