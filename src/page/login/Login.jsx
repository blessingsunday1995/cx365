import React from 'react'
import './Login.css'
import logo from '../../assets/cx3653.png'
import img1 from '../../assets/pngwing 1.png'

function Login() {
  return (
    <div className='login-container'>
      <div className='login-header'>
      <h3 >
          Introducing CX-365
      </h3>
      </div>

      <div className="login-nav">
        <nav>
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>FAQs</li>
          <li>Contact Us</li>
        </ul>
        </nav>

      </div>

      <div className="main-body">
      <div className="leftside">
        <h1>Welcome Back</h1>
        <p>Getting you back  into your CRM should only take a minute.
          Please enter your details to gain access.</p>
          <img src={img1} alt="" />
      </div>

          <div className="rightside">
          <form action="">
            <p>Email</p>
            <input type="email" placeholder='Enter your email address'/>

             <p>Password</p>
            <input type="password" placeholder='Enter your Password'/>
          </form>

            <div className="forget">
              <div className="remember">
                <input type="checkbox" />
                <p>Remember Me</p>
              </div>

              <div className="forg">
                <p>Forgot Password? <a href="#">Reset Password</a> </p>
              </div>
            </div>
            <button>Login</button>
            <p>Don’t have an account? <a href="#">Sign Up</a></p>
          </div>
      </div>

    </div>
  )
}

export default Login