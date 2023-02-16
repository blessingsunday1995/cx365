import React from 'react'
import './WorkWithUs.css'
import frame1 from '../../assets/Frame-1.png'
import frame2 from '../../assets/Frame-2.png'
import frame3 from '../../assets/Frame-3.png'
import frame4 from '../../assets/Frame-4.png'

function WorkWithUs() {
  return (
    
    <div className='WorkWithUs'>
        <h2>Why Work with Us?</h2>
            <div className="crm">

              <img src={frame1} alt="" />
              <img src={frame2} alt="" />
              <img src={frame3} alt="" />
              <img src={frame4} alt="" />
            </div>
    <button>Get Started</button>
   
    </div>
  )
}

export default WorkWithUs