import React from 'react'
import sidet from './sidet.png'
import logo from './logo (2).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './CreateTwo.css'
function CreateTwo() {
  return (
    <div className='create-two'>
      <div className="side-one">
        <img src={sidet} alt="" />
      </div>
      <div className="side-two">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <p className='pa'>Step 2</p>
        <div className="greetings">
            <p>Nice to meet you <span>UserName</span></p>
            <h2>What industry are you in?</h2>
            <form action="" >
                <label htmlFor="" className='search'>
                    Search Industries...
                    <input type="search" placeholder='Type to search' />
                    <FontAwesomeIcon icon={faSearch}  className='s-icon'/>
                </label>
                <button className='btn'>Next</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default CreateTwo
