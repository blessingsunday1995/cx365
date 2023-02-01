import {FaFacebookF} from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
    <footer>
    <div className='footer-container'>
        <div className="cx56text">
          <h1>CX-365</h1>
          <a href="#"> <FaFacebookF/></a>
         <a href="#"><BsTwitter /></a>
          <a href="#"> <BsInstagram /></a>
         
        </div>

          <div className="quck-link">
            <h1>Quick Link</h1>
             <ul>
            <li><a href="">Home</a> </li>
            <li><a href="">How it works</a> </li>
            <li> <a href="">About Us</a></li>
            <li><a href="">Get Signed Up </a></li>
            <li> <a href="">Login</a> </li>
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