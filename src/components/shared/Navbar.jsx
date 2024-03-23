/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FiBell, FiDisc, FiEdit3, FiSearch } from 'react-icons/fi'
import './styles/Navbar.css'

const Navbar = () => {
    let selectedChat = false

    const logoutHandler = () => {
        console.log('Logout')
    }

    const [searchSide, setSearchSide] = useState(false)
    return (
        <nav>
            <div className="navLogo">
                <img src="/img/logo2.jpg" alt="" />
                <div className='navProfile'>
                    <img src="/img/defaultavatar.jpg" alt="profile_pic" />
                    <div className="navProfileInfo">
                        <div className='nuiEach'>
                            <div className="npiName">Alice Wonderland</div>
                            <div className="npiEmail">alice@example.com</div>
                        </div>
                        <div className='nuiEach' style={{ cursor: "pointer" }} onClick={logoutHandler}>Logout</div>
                    </div>
                </div>
            </div>
            <div className='navChat'>
                {selectedChat ? (
                    <>
                        {selectedChat?.isGroupChat === false ? (
                            <div className="navUser">
                                <img src='/img/defaultavatar.jpg' alt="user_pic" />
                                <div className="navUserInfo">
                                    <div className="nuiName">Elsa Beauti</div>
                                    <div className="nuiEmail">else@gmail.com</div>
                                </div>
                            </div>
                        ) : (
                            <div className="navUser">
                                <img src="/img/defaultgroup.png" alt="group_pic" />
                                <div className="navUserInfo">
                                    <div className="nuiName">Amigos</div>
                                    <div className="nuiPer">
                                        Jane | Elsa | Dane
                                    </div>
                                </div>
                            </div>
                        )
                        }
                    </>
                ) : (
                    <div className="navUser">
                        <div className='navUserInfo'>
                            <div className="nuiName">Welcome to Gossip...</div>
                            <div className="nuiPer">
                                Lets talk!
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="navRight">
                <div className="navRightLink" title='Notes'>
                    <FiEdit3 onClick={() => { setSearchSide(!searchSide) }} size={20} />
                    {/* {searchSide && <SearchSidebar />} */}
                </div>
                <div className="navRightLink" title='Notifications'>
                    <FiBell onClick={() => { setSearchSide(!searchSide) }} size={20} />
                    <div className='notify'></div>
                    {/* {searchSide && <NotificationSidebar />} */}
                </div>
                <div className="navRightLink" title='Search users'>
                    <FiSearch onClick={() => { setSearchSide(!searchSide) }} size={20} />
                    {/* {searchSide && <SearchSidebar />} */}
                </div>
                <div className="navRightLink" title='Go'>
                    <FiDisc onClick={() => { setSearchSide(!searchSide) }} size={20} />
                    {/* {searchSide && <SearchSidebar />} */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar