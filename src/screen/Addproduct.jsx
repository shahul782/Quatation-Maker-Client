import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "./quotation.css";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup'
import { useFormik } from "formik";
import { API } from "../global";




const FormValidationSchema = yup.object({
  product:yup.string().required(),
  brand : yup.string().required(),
  offer:yup.string().required(),
  contact:yup.string().required(),
  size:yup.string().required(),
  shopName:yup.string().required(),
})
const Addproduct = () => {
  const navigate = useNavigate();
  
  const { handleChange, handleSubmit, handleBlur, touched, values, errors } =useFormik({
    initialValues: { 
      product:"",
      brand:"",
      offer:"",
      contact:"",
      size:"",
      shopName:""
      
    },
    validationSchema: FormValidationSchema,
    onSubmit:(values)=>{
      console.log('form values',values)
      addproduct(values)
 } })



  const addproduct = (data) => {
  

    fetch(`${API}/createproduct`, {
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
        navigate("/navbar/product");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div id="add-customer">
     
      <form onSubmit={handleSubmit} id="add-customer">
      <TextField
  name='product'
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.product}
  error={!!errors.product && touched.product}
  helperText={!!errors.product && touched.product ? errors.product : ""}
  label="product"
  variant="outlined"
  
  
/>

<TextField
  name='brand'
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.brand}
  error={!!errors.brand && touched.brand}
  helperText={!!errors.brand && touched.brand ? errors.brand : ""}
  label="brand"
  variant="outlined"
/>

<TextField
  name='offer'
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.offer}
  error={!!errors.offer && touched.offer}
  helperText={!!errors.offer && touched.offer ? errors.offer : ""}
  label="offer"
  variant="outlined"
/>

<TextField
  name='contact'
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.contact}
  error={!!errors.contact && touched.contact}
  helperText={!!errors.contact && touched.contact ? errors.contact : ""}
  label="contact"
  variant="outlined"
/>

<TextField
  name='size'
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.size}
  error={!!errors.size && touched.size}
  helperText={!!errors.size && touched.size ? errors.size : ""}
  label="size"
  variant="outlined"
/>

<TextField
  name='shopName'
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.shopName}
  error={!!errors.shopName && touched.shopName}
  helperText={!!errors.shopName && touched.shopName ? errors.shopName : ""}
  label="shopName"
  variant="outlined"
/>
        
        <Button variant="contained" type='submit'>
          Addproduct
        </Button>
      </form>
    </div>
  );
};

export default Addproduct;
