import React from 'react'
import './FristPage.css'
import CX_LOGO from '../../assets/cx 365.png'
import Multi from '../../assets/Multi Customer Relationship Management.png'
import Service_girl from '../../assets/customer-service-girl.png'
function FristPage() {
  return (
    <div className='fristpage' >
<div className="leftside">
<img className='logo' src={CX_LOGO} alt="logo" />
<img className='multi' src={Multi} alt="mm" />
<h3>We are focused on changing the way people do work</h3>
<button>Get Started</button>
</div>
<div className="rightside">
<img src={Service_girl} alt="Service_girl" />
</div>
    </div>
  )
}

export default FristPage