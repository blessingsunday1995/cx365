import {FaFacebookF} from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer_logo'>H-Code CLOTHINGS</a>

     <ul className='permalink'>
<li><a href="#home">Home</a></li>
<li><a href="#about">About</a></li>
        <li><a href="#service">Service</a></li>
        <li>  <a href="#gallery">Gallery</a></li>
<li><a href="#contact">Contact</a></li>




     </ul>


     <div className='footer_socials'>
        <a href='https://web.facebook.com/blessing.o.sunday' target='blank'><FaFacebookF/></a>
        <a href='https://www.instagram.com/hc_clothing_001' target='blank'><BsInstagram /></a>
      <a href='https://twitter.com/BlessingMsunday'  target='blank'><BsTwitter/></a>

      </div>

<div className='footer_copyright'>
        <small>&copy; 2022 H-Code CLOTHINGS. All rigth reserved</small>
</div>
      </footer>
  )
}

export default Footer