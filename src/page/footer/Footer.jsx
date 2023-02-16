import {FaFacebookF} from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import {Link, Route,Routes} from 'react-router-dom'
import {BsTwitter} from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
    <footer>
    <div className='footer-container'>
        <div className="cx56text">
          <h1>CX-365</h1>
          <a href="https://www.facebook.com/profile.php?id=100089633372799&mibextid=ZbWKwL
"> <FaFacebookF/></a>
         <a href="https://twitter.com/CX365_CRM" ><BsTwitter /></a>
          <a href="https://www.instagram.com/cx365_crm/"> <BsInstagram /></a>
         
        </div>

          <div className="quck-link">
            <h1>Quick Link</h1>
             <ul>
            <li><Link to='/'>Home</Link></li>
            <li><a href="">How it works</a> </li>
            <li>  <Link to='/about'>About Us </Link></li>
            <li><Link to='/sign_up'>Get Signed Up </Link></li>
            <li> <Link to='/login'>Login</Link> </li>
          </ul>
          </div>

           <div className="support">
            <h1>Support</h1>
             <ul>
            <li> <a href="">FAQs</a></li>
            <li> <a href="">Help</a></li>
            <li> <a href="">Blogs</a></li>
          </ul>
          </div>


           <div className="connect">
            <h1>Connect with Us</h1>
             <ul>
            <li> <a href="">Facebook</a></li>
            <li> <a href="">Instagram</a></li>
            <li> <a href="">Twitter</a></li>
          </ul>
          </div>
         
    </div>
    <small>Copyright&copy; 2023 CX-365</small>
      </footer>
  )
}   

export default Footer