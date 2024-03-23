/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import SkeletonData from '../shared/SkeletonData'
import './styles/SearchSidebar.css'
import EachSearchCard from './cards/EachSearchCard'

const SearchSidebar = () => {
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSearch = () => {
        console.log('searching...')
    }
    return (
        <div className='searchSide'>
            <form>
                <div className="inputField">
                    <input type="search" placeholder='Search User...' value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <button type="submit" className='searchBtn' onClick={handleSearch}><FiSearch /></button>
            </form>
            <div className="searchData">
                <div className="skeletonData">
                    {loading ? (
                        <SkeletonData />) : (
                            <EachSearchCard />
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchSidebar