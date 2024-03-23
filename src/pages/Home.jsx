/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCheckbox, BiSolidCheckboxChecked } from 'react-icons/bi'
import './styles/Home.css'
import Title from '../components/shared/Title'

const Home = () => {
  const navigate = useNavigate()
  const [check, setCheck] = useState('false')

  return (
    <>
      <Title />
      <div className="home">
        <div className="homeHero">
          <div className="logo"><img src="/img/logo1.jpg" alt="" /></div>
        </div>

        <div className="homeRemain">
          <h1 className="heading">welcome to gossip &#128075;</h1>
          <h3 className="subHeading">Connect, Engage, and Explore!</h3>
          <p className="hrPara">
            <p>Welcome to our exciting new chatting application! We are delighted to introduce you to a platform that aims to revolutionize the way you connect and communicate with others. Whether you are looking to chat with friends, meet new people, or engage in group discussions, our application provides a seamless and user-friendly experience.</p>
            <p>Discover a world of endless possibilities as you dive into our feature-rich environment. With our intuitive interface, you can effortlessly navigate through various chat rooms and engage in conversations that match your interests and preferences. Connect with like-minded individuals from around the globe, share ideas, exchange knowledge, and foster meaningful connections.</p>
            <p>Embracing the power of technology, our application offers advanced messaging features that ensure smooth and real-time communication. From instant messaging to multimedia sharing, you can express yourself creatively and make your conversations truly come alive. Whether you want to send text messages, voice notes, or even engage in video calls, our application has got you covered.</p>
            <p>We prioritize privacy and security, so you can chat with peace of mind. Our robust encryption protocols and data protection measures ensure that your conversations remain confidential and your personal information is safeguarded. We believe that everyone deserves a secure and trustworthy chatting experience.</p>
            <p>Join our vibrant and diverse community, where you will encounter individuals from all walks of life. Explore new cultures, broaden your horizons, and build connections that transcend geographical boundaries. Engage in meaningful discussions, share experiences, and forge friendships that last a lifetime.</p>
            <p>Get ready to embark on an extraordinary chatting journey with our application. Whether you are seeking casual conversations, intellectual exchanges, or simply a place to unwind, we are here to provide you with a remarkable platform that caters to your needs.</p>
            <p>Start connecting, start conversing, and start creating memories. The world is just a chat away!</p>
          </p>
          <div className="hrMore">
            <div className="hrmCheck" onClick={() => setCheck(!check)}>
              {check ? <div className="hrmIcon"><BiCheckbox /></div> : <div className="hrmIcon"><BiSolidCheckboxChecked /></div>}
              <div>Accept our <a href="https://drive.google.com/file/d/13wUhDYbckieirNb3ksh5l-jwFDtoIJmL/view?usp=sharing" target='_blank'><span style={{ color: "var(--app-color)" }}>Term & Conditions</span></a> (Agree to get started!)</div>
            </div>
            {check ? <div className="hrmBtnLoading">Get Started</div> : <Link to='/login'> <div className="hrmBtn">Get Started</div> </Link>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home