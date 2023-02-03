import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateAccount() {
//  const navigate = useNavigate()

    const initialvalue={
        first_name:"",
        last_name:"",
        password: "",
        confirmPassword:"",
        email:"",
    }

    const validationSchema = Yup.object().shape({

        first_name:Yup.string().required(),
        last_name:Yup.string().required(),
        email:Yup.string().email("Email is Invalid").required(),
        password:Yup.string().min(4).max(10).required(),
        confirmPassword:Yup.string().oneOf([Yup.ref('password'),null, 'password not match']).required("confirm Password is re")

    })


    const onSubmit =(data)=>{
        axios.post("http://localhost:3001/auth",data).then(()=>{
console.log(data)
})
// navigate("/")

    }

  return (
    <div className='formPost'>
        <Formik initialValues={initialvalue} onSubmit={onSubmit} validationSchema={validationSchema} >
<Form>
       <label>First Name:</label>
    <ErrorMessage name='first_name'/>
    <Field className = "first_name" 
    name ="first_name"
    placeholder ="(Ex. Bola)"
    /> 
    <br />


     <label>Last Name:</label>
    <ErrorMessage name='last_name'/>
    <Field className = "last_name" 
    name ="last_name"
    placeholder ="(Ex. Bola)"
    />
<br />



    <label>Email:</label>
    <ErrorMessage name='username'/>
    <Field className = "inputUsernane" 
    name ="username"
    placeholder ="(Ex. Bola)"
    />

<br />

     <label>Password</label>
      <ErrorMessage name='password'/>
    <Field className = "CeatePassperd" 
    name ="password"
    type='password'
    placeholder ="(Ex. post)"
    />


<br />
      <label>Confirm Password</label>
      <ErrorMessage name='confirmPassword'/>
    <Field className = "confirmPassword" 
    name ="confirmPassword"
    type='password'
    placeholder ="(Ex. post)"
    />
<br />
    <button type='submit'>Register</button>
</Form>

        </Formik>
    </div>
  )
}

export default CreateAccount