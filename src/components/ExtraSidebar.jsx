/* eslint-disable no-unused-vars */
import React from 'react'
import './styles/ExtraSidebar.css'
import SearchSidebar from './extra/SearchSidebar'
import NoteSidebar from './extra/NoteSidebar'
import ProfileSidebar from './extra/ProfileSidebar'
import GroupSidebar from './extra/GroupSidebar'

const ExtraSidebar = () => {
  return (
    <>
      <div className='extraSidebar'>
        {/* <SearchSidebar /> */}
        {/* <NoteSidebar /> */}
        {/* <ProfileSidebar /> */}
        <GroupSidebar />
      </div>
    </>
  )
}

export default ExtraSidebar