import React from 'react'
import './NavBar.css'
import {Link, Route,Routes} from 'react-router-dom'
function Navbar() {
  return (
    <div className='main_continer'>
        <nav>
            <ul>
                <li>  <Link to='/about'>Features </Link></li>
                   <li>  <Link to='/about'>Pricing </Link></li>
                      <li>  <Link to='/about'>Webinars </Link></li>
                         <li> <Link to='/about'>Blog </Link></li>
                            <li>  <Link to='/about'>Pages </Link></li>
            </ul>
           <div className='btn'>
                   <Link className='SignIn' to='/login'>Sign In </Link>
                    <Link className='SignUp' to='/sign_up'>Sign Up </Link>
           </div>
        </nav>
    </div>
  )
}

export default Navbar