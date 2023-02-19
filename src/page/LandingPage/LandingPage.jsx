import React from 'react'
import Crm_help from '../../components/crm_help/Crm_help'
import FristPage from '../../components/fristPage/FristPage'
import Navbar from '../../components/Navbar/Navbar'
import WorkWithUs from '../../components/WorkWithUs/WorkWithUs'

function LandingPage() {
  return (
    <div>
      <Navbar/>
      <FristPage/>
      <WorkWithUs/>
      <Crm_help/>
    </div>
  )
}

export default LandingPage
  