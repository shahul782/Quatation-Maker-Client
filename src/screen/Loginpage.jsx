import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './quotation.css';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import {  Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';                                                                                                                                                                                     
import * as yup from 'yup';
import { API } from '../global';

const Loginpage = () => {
const navigate = useNavigate()
const FormValidationSchema = yup.object({
  email: yup.string().required("enter valid email").min(5, "type more than 5 letters"),
  password: yup.string().required("enter valid password").min(5),
})

const { handleChange, handleBlur, handleSubmit, values, touched, errors } = useFormik({
  initialValues: { email: "testmail@gmail.com", password: "Test@123" },
  validationSchema: FormValidationSchema,
  onSubmit: (values) => {
      login(values)
  }
});

const login = (data) => {

  fetch(`${API}/login`,
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
              navigate("/navbar");
          }
      })
// const [email,setEmail]=useState();

// const [password,setPassword]=useState();

// const log =()=>{
//   const data = {
//     email,
//     password
//   }
// fetch("http://localhost:4000/login", {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: { 'Content-Type': 'application/json' }


// }).then((res)=>res.json())
// .then((r1)=>{
//   if(r1.error)
//   { toast.error(r1.error)
//     console.log(r1.error)}
//   else
//   {
//     console.log(r1)
//     toast.success(r1.success)
//     navigate('/navbar')}})
// .catch((error)=>console.log(error))
}
  return (
    <form onSubmit={handleSubmit} className="user">
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
        variant="contained">login</Button>
    <div > New User? <Link className="lgbtn" to="/register">Register</Link>
    </div>
    <div className="lgbtn"><Link className="lgbtn" to="/forgot-password">Forgot Password</Link></div>

</form>
  )
}

export default Loginpage