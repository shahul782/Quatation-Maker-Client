import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './quotation.css';
import * as yup from 'yup'
import { useFormik } from 'formik';
import { API } from '../global';


const formvalidationSchema = yup.object({
name:yup.string().required('why not fill this name'),
email:yup.string().required('why not fill this email'),
contact:yup.number().required('why not fill this contact'),
city:yup.string().required('why not fill this city'),

})
const DeleteCustomer = () => {

  
  const navigate =useNavigate();
  const {id}=useParams()
  const [customerdelete,setcustomerdelete]=useState()
 
  useEffect(()=>{
    fetch(`${API}/getcustomerbyid/${id}`,{
      method:"GET"}).then((res)=>res.json()).then((data)=>{console.log(data)
        setcustomerdelete(data)})
        
  },[id])

  const {handleSubmit,values,handleChange,errors,handleBlur,touched} = useFormik({
    initialValues: { 

      name:customerdelete?.name,
      email:customerdelete?.email,
      contact:customerdelete?.contact,
      city:customerdelete?.city,


    },
    validationSchema : formvalidationSchema,
    onSubmit:(values)=>{
     console.log('form values',values)
      editdata(values)
    }
});




   const editdata =(data)=>{


  

  fetch(`${API}/deletecustomerbyid/${id}`,{
    method:"DELETE",body: JSON.stringify(data),
    headers:{
     "content-type" :"Application/json"
  },

  }).then((r1)=>r1.json()).then((data)=>console.log(data));
  navigate(`/navbar/customers`)
   }

  return (
    <>
    {
      customerdelete ?
    
 <form onSubmit={handleSubmit}
 className='edit-customer'>
<TextField 
 label="name"
 error={errors.name && touched.name}
 name='name'
 onChange={handleChange}
 onBlur={handleBlur}
 value={values.name}
 variant="outlined" defaultValue={customerdelete.name}
 helperText={errors.name && touched.name ? errors.name:""}
  />

 <TextField 
  error={errors.email && touched.email ? errors.email:""}
  name='email'
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.email} label="email" variant="outlined" defaultValue={customerdelete.email} 
  helperText= {errors.email && touched.email ? errors.email:""}
  />



 <TextField  
  name='contact'
  error={errors.contact && touched.contact ? errors.contact:""}
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.contact} label="contact" variant="outlined" defaultValue={customerdelete.contact}
  helperText= {errors.contact && touched.contact ? errors.contact:""}
  />
      
 <TextField 
  onChange={handleChange}
  error= {errors.city && touched.city ? errors.city:""}
  name='city'
  onBlur={handleBlur}
  value={values.city} label="city" variant="outlined" defaultValue={customerdelete.city}
  helperText=  {errors.city && touched.city ? errors.city:""}
  
  />

   <Button type='submit'>Delete</Button>

    </form> : "loading" 
    }
    </>
  )
}

export default DeleteCustomer