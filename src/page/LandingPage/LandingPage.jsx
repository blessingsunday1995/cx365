import React from 'react'
import Crm_help from '../../components/crm_help/Crm_help'
import FristPage from '../../components/fristPage/FristPage'
import Navbar from '../../components/Navbar/Navbar'
import Our_product from '../../components/our_product/Our_product'
import WorkWithUs from '../../components/WorkWithUs/WorkWithUs'

function LandingPage() {
  return (
    <div>
      <Navbar/>
      <FristPage/>
      <WorkWithUs/>
      <Crm_help/>
      <Our_product/>
    </div>
  )
}

export default LandingPage
  