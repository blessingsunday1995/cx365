import React from 'react'
import thing from './thing.png'
import logo from './logo (2).png'
import './CreateThree.css'
function CreateThree() {
  return (
    <div className='create-three'> 
         <div className="side-one-three">
    <img src={thing} alt="" />
  </div>
  <div className="side-two-three">
    <div className="logo">
        <img src={logo} alt="" />
    </div>
    <p className='pa-2'>Step 3</p>
    <div className="greetings-three">
       <p>Based on your experience, we recomment you start by:</p>
        <h2>Adding some contacts in 2 easy steps</h2>
        <p>With constacts in your CRM, you are just a step away from success </p>
        <form action="" >
            <label htmlFor="" className='btns'>
                <button >Add some contacts <br /> Takes just a few minutes</button>
                <button>Invite a teammate to add some contacts <br /> Takes less than a few minute</button>
            </label>
        </form>
        <a href="" className='explore'>I'll try this later, explore CX365</a>
    </div>
  </div></div>
  )
}

export default CreateThree