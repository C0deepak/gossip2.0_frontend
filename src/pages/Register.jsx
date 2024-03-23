/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/Auth.css'
import Title from '../components/shared/Title'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pic, setPic] = useState('')
    const [loading, setLoading] = useState(false)

    const handleFile = async (file) => {
        console.log(file)
    }

    const submitHandler = async (e) => {
        e.preventDefault()
    }

    return (
        <>
            <Title title='Gossip - Register' />
            <div className="auth">
                <div className="authBg"></div>
                <div className="authWrap">
                    <div className="awLeft">
                        <div className="authLogo">
                            <img src="/img/logo1.jpg" alt="" />
                        </div>
                        <div className="heading1">Welcome TO GOSSIP</div>
                        <div className="subHeading1">Connect, Engage, and Explore!</div>
                        <p>Join our vibrant and diverse community, where you will encounter individuals from all walks of life. Explore new cultures, broaden your horizons, and build connections that transcend geographical boundaries.</p>
                    </div>
                    <div className="awRight">
                        <div className="heading">register</div>
                        <form className="authForm">
                            <div className="inputField">
                                <input type="text" placeholder='Username' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="inputField">
                                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="inputField">
                                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="inputField">
                                <input type="file" onChange={(e) => handleFile(e.target.files[0])} />
                            </div>
                            {loading ? (<button type="submit" className="loading" onClick={submitHandler}>Loading</button>) : (<button type="submit" className="authBtn" onClick={submitHandler}>Register</button>)}
                            <div className="authOr">Already User? <Link to='/login'><span style={{ color: "var(--app-color)" }}>Login</span></Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register