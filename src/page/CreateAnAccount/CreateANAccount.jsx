import React from 'react'
import logo from './logo (2).png'
import side from './side.png'
import {useForm} from 'react-hook-form'
import * as Yup from 'yup'
import {resolver, yupResolver} from '@hookform/resolvers/yup'
import {Link, Route,Routes} from 'react-router-dom'
import './CreateA.css'
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

function CreateANAccount() {
   const navigate = useNavigate()

   const Schema = Yup.object().shape({

        first_name:Yup.string().required(),
        last_name:Yup.string().required(),
        email:Yup.string().email("Email is Invalid").required(),
        password:Yup.string().min(4).max(50).required(),
        confirmPassword:Yup.string().oneOf([Yup.ref('password'),null, 'password not match']).required("confirm password is required")

    })
const {register,handleSubmit,formState:{errors}} = useForm({
resolver: yupResolver(Schema)

})
const onSubmit=(data)=>{
       axios.post("https://crm-caa0.onrender.com/api/auth/register",data).then((response)=>{
if(response.data.error) {
  
  console.log(response.data.error
)

}else{

console.log(response.data)
navigate("/login")
}
})
}

  return (
    <div className='CreateAN'>
         <img className='sideimg' src={side} alt="" />
      
    
           <div className='content'>
              <img src={logo} alt="cx365 logo" />
           <div className="welcome">
        <h1>Welcome to CX365</h1>
        <p>create your free account</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            Name 
            <div className="names">
            <input type="text" placeholder='First Name' {...register("first_name")}  />
           <p>{errors.first_name?.message}</p>
                <input type="text" placeholder='Last Name'  {...register("last_name")} />
                  <p>{errors.last_name?.message}</p>
      

            </div>
        </label>


        <label >
            Email address
            <input type="email"  placeholder='someone@example.com' {...register("email")} />
              <p>{errors.email?.message}</p>
           {/* <FontAwesomeIcon icon={faEnvelope}
             className='eye'
           
             />  */}
        </label>


        <label >
            Password
            <div className="password">
            <input type='password'
             placeholder='at least 8 characters' 
              {...register("password")}
             
             
             />
            <p>{errors.password?.message}</p>
{/* 
            <FontAwesomeIcon icon={faBriefcase}
             className='eye'
           
             /> */}
            </div>
        </label>
           <div className="password">
        <label >
           Confirm Password
         
            <input type='password'
             placeholder='Re-enter a password' 
            {...register("confirmPassword")}
             
             
             />
            <p>{errors.confirmPassword?.message}</p>

             {/* <FontAwesomeIcon icon={faBriefcase}
             className='eye'
           
             />  */}
         
        </label>
           </div>
        <div className='already'>
            <h4>Already have an account. <Link to='/'>Login</Link></h4>
        </div>
        <div className="next">
           <input type="submit" value='Next ' />
        </div>
      </form>
           </div>
            
     

    </div>
  )
}

export default CreateANAccount
