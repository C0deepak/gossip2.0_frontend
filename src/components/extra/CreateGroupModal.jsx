/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FiXCircle } from 'react-icons/fi'
import SelectedUserCard from './cards/SelectedUserCard'
import EachSearchCard from './cards/EachSearchCard'
import './styles/CreateGroupModal.css'

const CreateGroupModal = ({ closeModal }) => {
    const [grpChatName, setGrpChatName] = useState('')
    const [selectedUsers, setSelectedUsers] = useState([])
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([])

    const handleSearch = () => {
        console.log('searching...')
    }

    const handleDelete = (userToDel) => {
        setSelectedUsers(selectedUsers.filter(sel => sel._id !== userToDel._id))
    }

    const handleGroup = (userToAdd) => {
        if (selectedUsers.includes(userToAdd)) {
            alert('User Exists in group')
        }

        setSelectedUsers([...selectedUsers, userToAdd])
    }

    const handleSubmit = () => {
        console.log('Group creating...')
    }

    return (
        <>
            <div className="createGrpModalWrap">
                <div className="createGrpModal">
                    <div className="closeBtn" onClick={closeModal}><FiXCircle /></div>

                    <div className="cgmHeading">Create Group</div>
                    <form>
                        <input type="text" placeholder='Set Group Name' onChange={(e) => setGrpChatName(e.target.value)} />
                    </form>
                    <form>
                        <input type="search" placeholder='Search Users' onChange={(e) => handleSearch(e.target.value)} />
                    </form>

                    <div className="selectedUserWrap">
                        {selectedUsers.map(selUser => (
                            <SelectedUserCard key={selUser._id} user={selUser} handleFunction={() => handleDelete(selUser)}>{selUser.name}</SelectedUserCard>
                        ))}
                    </div>

                    <div className="searchedUserWrap">
                        {searchResult?.slice(0, 4).map(gsuser => (
                            <EachSearchCard key={gsuser.id} suser={gsuser} handleFunction={() => handleGroup(gsuser)} />
                        ))}
                    </div>
                    <button onClick={handleSubmit}>Create Group</button>
                </div>
            </div>
        </>
    )
}

export default CreateGroupModal