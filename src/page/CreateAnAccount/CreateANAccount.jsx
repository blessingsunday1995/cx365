import React from 'react'
import logo from './logo (2).png'
import side from './side.png'
import './CreateA.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function CreateANAccount() {
  return (
    <div className='CreateAN'>
         <img className='sideimg' src={side} alt="" />
      
    
           <div className='content'>
              <img src={logo} alt="cx365 logo" />
           <div className="welcome">
        <h1>Welcome to CX365</h1>
        <p>create your free account</p>
      </div>
      <form >
        <label htmlFor="username">
            Name 
            <div className="names">
            <input type="text" placeholder='First Name'  />
           
                <input type="text" placeholder='Last Name'  />
      

            </div>
        </label>


        <label htmlFor="email">
            Email address
            <input type="email" name="email" placeholder='someone@example.com' />
           <FontAwesomeIcon icon={faEnvelope}
             className='eye'
           
             /> 
        </label>

        
        <label htmlFor="password">
            Password
            <div className="password">
            <input type='password'
             placeholder='at least 8 characters' 
             name='password'
             
             
             />
          

            <FontAwesomeIcon icon={faBriefcase}
             className='eye'
           
             />
            </div>
        </label>
        <label htmlFor="password">
           Confirm Password
            <div className="password">
            <input type='password'
             placeholder='Re-enter a password' 
             name='password'
             
             
             />
          

             <FontAwesomeIcon icon={faBriefcase}
             className='eye'
           
             /> 
            </div>
        </label>
        <div className='already'>
            <h4>Already have an account. <a href="">Login</a></h4>
        </div>
        <div className="next">
           <input type="submit" value='Next ' />
        </div>
      </form>
           </div>
            
     

    </div>
  )
}

export default CreateANAccount
