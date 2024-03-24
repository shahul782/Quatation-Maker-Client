

import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "./quotation.css";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup'
import { useFormik } from "formik";
import { API } from "../global";




const FormValidationSchema = yup.object({
    vendorName:yup.string().required(),
    Idproof : yup.string().required(),
    IdproofNum:yup.string().required(),
    city:yup.string().required(),
    contact:yup.string().required(),

})
const AddVendor = () => {
  const navigate = useNavigate();
  
  const { handleChange, handleSubmit, handleBlur, touched, values, errors } =useFormik({
    initialValues: { 
        vendorName:"",
        Idproof:"",
        IdproofNum:"",
        city:"",
        contact:"",
      
    },
    validationSchema: FormValidationSchema,
    onSubmit:(values)=>{
      console.log('form values',values)
      addVendor(values)
 } })



  const addVendor = (data) => {
  

    fetch(`${API}/createvendor`, {
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
        navigate("/navbar/vendor");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div id="add-customer">
      <form onSubmit={handleSubmit} id="add-customer">
  

<TextField
  name='vendorName'
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.vendorName}
  error={!!errors.vendorName && touched.vendorName}
  helperText={!!errors.vendorName && touched.vendorName ? errors.vendorName : ""}
  label="vendorName"
  variant="outlined"
/>

<TextField
  name='Idproof'
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.Idproof}
  error={!!errors.Idproof && touched.Idproof}
  helperText={!!errors.Idproof && touched.Idproof ? errors.Idproof : ""}
  label="Idproof"
  variant="outlined"
/>

<TextField
  name='IdproofNum'
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.IdproofNum}
  error={!!errors.IdproofNum && touched.IdproofNum}
  helperText={!!errors.IdproofNum && touched.IdproofNum ? errors.IdproofNum : ""}
  label="IdproofNum"
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
  name='contact'
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.contact}
  error={!!errors.contact && touched.contact}
  helperText={!!errors.contact && touched.contact ? errors.contact : ""}
  label="contact"
  variant="outlined"
/>


        
        <Button variant="contained" type='submit'>
          AddVendor
        </Button>
      </form>
      
    </div>
  );
};

export default AddVendor;
