import React from 'react'
import './AboutUs.css'
import logo from './logo (2).png'
import cartoon from './cartoon.png'
import {Link, Route,Routes} from 'react-router-dom'
function AboutUs() {
  return (
    <div>
        <div className="top-nav">
            <h4>Introducing CX-365</h4>
        </div>
        <ul className="second-nav">
            <li>
                <img src={logo} alt="" />
            </li>
            <ul className='nav-2'>
                <li> <Link to='/'>Home</Link></li>
                <li>About Us</li>
                <li>FAQs</li>
                <li>Contact Us</li>
            </ul>
            <ul className='nav-3'>
                <li><Link to='/sign_up'>Sign Up</Link></li>
                <li><Link to='/'>Log In</Link></li>
            </ul>
        </ul>
        <div className="body-con">
            <div className="cartoon">
                <img src={cartoon} alt="" />
            </div>
            <div className="about-us">
                <h2>About Us</h2>
                <p>CX 365 is for growing businesses all over the world who want to manage  all their company’s relationships and  interactions with both customers and potential customers, improve business relationships, growth, track customers 
information and support request.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs