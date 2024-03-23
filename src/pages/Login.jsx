/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/Auth.css'
import Title from '../components/shared/Title'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Title title='Gossip - Login' />
      <div className="auth">
        <div className="authBg"></div>
        <div className="authWrap">
          <div className="awLeft">
            <div className="authLogo">
              <img src="/img/logo1.jpg" alt="" />
            </div>
            <div className="heading1">Welcome back</div>
            <div className="subHeading1">Connect, Engage, and Explore!</div>
            <p>Join our vibrant and diverse community, where you will encounter individuals from all walks of life. Explore new cultures, broaden your horizons, and build connections that transcend geographical boundaries.</p>
          </div>
          <div className="awRight">
            <div className="heading">login</div>
            <form className="authForm">
              <div className="inputField">
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="inputField">
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              {loading ? (<button type="submit" className="loading" onClick={submitHandler}>Loading</button>) : (<button type="submit" className="authBtn" onClick={submitHandler}>Login</button>)}
              <div className="authOr">New User? <Link to='/register'><span style={{ color: "var(--app-color)" }}>Register</span></Link></div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login