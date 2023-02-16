import React, { useContext, useState } from 'react'
import './Login.css'
import logo from '../../assets/cx3653.png'
import img1 from '../../assets/pngwing 1.png'
import {Link, Route,Routes} from 'react-router-dom'

import{AuthContext} from '../../helper/AuthContext'
import axios from 'axios'
function Login() {
      const{SetAuthSate} = useContext(AuthContext)
      // const navigate = useNavigate()
      const [EmailInput,setemail] = useState("")
      const [PasswordInput,SetPassword] = useState("")
       const [errormsg,Seterrormsg] = useState("")
      

const login=()=>{
         const data ={email:EmailInput,password:PasswordInput}
        axios.post("https://crm-caa0.onrender.com/api/auth/login",data).then((response)=>{

if(response.data.error) {
  
  console.log(response.data.error)
  Seterrormsg(response.data.error)
}else{

localStorage.setItem("accessToken", response.data.accessToken
)
SetAuthSate({
  username:response.data.username,
  id : response.data.id,
  status: true,

})
console.log(response.data)
}
      
})


}





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
          <li>  <Link to='/'>Home</Link></li>
          <li> <Link to='/about'>About Us </Link></li>
          <li> <a href="">FAQs</a></li>
          <li><a href="">Contact Us</a></li>
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
            <input type="email" 
            placeholder='Enter your email address'
            onChange={(event)=>{setemail(event.target.value)}}
            />

             <p>Password</p>
            <input type="password" 
            placeholder='Enter your Password'
            onChange={(event)=>{SetPassword(event.target.value)}}
            />
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
              <small>{errormsg}</small>
            <button onClick={login}>Login</button>
            <p>Don’t have an account? <Link to='/sign_up'>Sign Up</Link></p>

          
          </div>
      </div>

    </div>
  )
}

export default Login