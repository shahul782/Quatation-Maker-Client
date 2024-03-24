import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './quotation.css';
import { toast } from 'react-toastify';
import {  Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';                                                                                                                                                                                     
import * as yup from 'yup';
import { API } from '../global';
const Register = () => {
  const navigate =useNavigate();

  const FormValidationSchema = yup.object({
    email: yup.string().required("enter valid email").min(5, "type more than 5 letters"),
    password: yup.string().required("enter valid password").min(5),
    DOB:yup.string()
})

const { handleChange, handleBlur, handleSubmit, values, touched, errors } = useFormik({
    initialValues: { email: "testmail@gmail.com", password: "Test@123" },
    validationSchema: FormValidationSchema,
    onSubmit: (values) => {
        register(values)
    }
});
const register = (data) => {
        
  fetch(`${API}/register`,
      {
          method: "POST",
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
      }
  )
      .then((response) => response.json())
      .then((data) => {
          if (data.error) {
              console.log(data.error);
              toast.error(data.error);
          } else {
              console.log(data);
              toast.success(data.msg);
              navigate("/login");
          }
      })

//   const [email,setEmail]=useState();
//   const [password,setPassword]=useState();

// const reg = ()=>{

//   const data={
//     email:email,
//     password:password
//   }
//   fetch('http://localhost:4000/register',  {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: { 'Content-Type': 'application/json' }
// }).then((res1)=>res1.json())
// .then((res)=>{
//   console.log(res)
//   if(res.success){
//     toast.success(res.success)
//     navigate('/login')
//   }else{
//     toast.error(res.error)
//   }
// })
// .catch((err)=>{
//   toast.error(err)
//   console.log(err)});

  }
    return (
      <>  <form onSubmit={handleSubmit} className="user">
      <div className="form-group">
          <TextField className="form-control form-control-user"
              type="email"
              name="email"
              label="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email}
              helperText={errors.email && touched.email ? errors.email : ""}
          />
      </div>
 
      <div className="pass">
          < TextField
              className="form-control form-control-user"
              type="password"
              name="password"
              label="Password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors.password && touched.password}
              helperText={errors.password && touched.password ? errors.password : ""}
          />
      </div>
      <Button
          type="submit"
          className="btn btn-primary btn-user btn-block form-control form-control-user"
          variant="contained">Register</Button>
      <div > New User? <Link className="lgbtn" to="/login">login</Link>
      </div>
      <div className="lgbtn"><Link className="lgbtn" to="/forgot-password">Forgot Password</Link></div>
  
  </form>
  
  </>
 
  )
}

export default Register