

import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "./quotation.css";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup'
import { useFormik } from "formik";
import { API } from "../global";




const FormValidationSchema = yup.object({
  name:yup.string().required(),
  city : yup.string().required(),
  Contact:yup.string().required(),
  email:yup.string().required(),

})
const Addcustomer = () => {
  const navigate = useNavigate();
  
  const { handleChange, handleSubmit, handleBlur, touched, values, errors } =useFormik({
    initialValues: { 
            name:"",
            city:"",
             Contact:"",
             email:"",
      
    },
    validationSchema: FormValidationSchema,
    onSubmit:(values)=>{
      console.log('form values',values)
      addproduct(values)
 } })



  const addproduct = (data) => {
  

    fetch(`${API}/createcustomer`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "Application/json",
      },
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        navigate("/navbar/customers");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div id="add-customer">
      <form onSubmit={handleSubmit} id="add-customer">
  

<TextField
  name='name'
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.name}
  error={!!errors.name && touched.name}
  helperText={!!errors.name && touched.name ? errors.name : ""}
  label="name"
  variant="outlined"
/>

<TextField
  name='city'
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.city}
  error={!!errors.city && touched.city}
  helperText={!!errors.city && touched.city ? errors.city : ""}
  label="city"
  variant="outlined"
/>

<TextField
  name='Contact'
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.Contact}
  error={!!errors.Contact && touched.Contact}
  helperText={!!errors.Contact && touched.Contact ? errors.Contact : ""}
  label="Contact"
  variant="outlined"
/>

<TextField
  name='email'
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.email}
  error={!!errors.email && touched.email}
  helperText={!!errors.email && touched.email ? errors.email : ""}
  label="email"
  variant="outlined"
/>


        
        <Button variant="contained" type='submit'>
          AddCustomer
        </Button>
      </form>
    </div>
  );
};

export default Addcustomer;
