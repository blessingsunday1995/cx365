import React from 'react'
import './our_product.css' 
import arrow from './../../assets/arrow.png'
import ellipse from './../../assets/ellipse.png'
function Our_product() {
  return (
    <div className='our_product'>
        <h2>Our Products</h2>
        <div className="card">
<div className="incard">
    <h3>Unified Sales platform</h3>
    <p>To increase your sales success rate,
         we help you create a sales procedure.</p>
</div>

<img src={arrow} alt="" />

<div className="incard">
    <h3>All in one suite</h3>
    <p>We offer you all the tools necessary 
        for the management and growth of your business.</p>
</div>

<img src={arrow} alt="" />


<div className="incard">
    <h3>Help Desk management</h3>
    <p>We offer you smart automations and 
        prompt customer support with our live chat service.</p>
</div>
        </div>
        </div>
  )
}

export default Our_product