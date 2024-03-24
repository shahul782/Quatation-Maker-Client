import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './quotation.css';
import * as yup from 'yup'
import { useFormik } from 'formik';
import { API } from '../global';


const formvalidationSchema = yup.object({
name:yup.string().required('why not fill this name'),
city:yup.string().required('why not fill this city'),
contact:yup.number().required('why not fill this contact'),
email:yup.string().required('why not fill this email'),

})
const EditCustomer = () => {

  
  const navigate =useNavigate();
  const {id}=useParams()
  const [customerEdit,setcustomerEdit]=useState()
  // const [name, setName] = useState()
  // const [city,setCity] = useState()
  // const [contact,setContact] = useState()
  // const [email,setEmail] = useState()
  useEffect(()=>{
    fetch(`${API}/getcustomerbyid/${id}`,{
      method:"GET"}).then((res)=>res.json()).then((data)=>{console.log(data)
        setcustomerEdit(data)})
        
  },[id])

  const {handleSubmit,values,handleChange,errors,handleBlur,touched} = useFormik({
    initialValues: { 

      name:customerEdit?.name,
      city:customerEdit?.city,
      contact:customerEdit?.contact,
      email:customerEdit?.email,


    },
    validationSchema : formvalidationSchema,
    onSubmit:(values)=>{
     console.log('form values',values)
      editdata(values)
    }
});




   const editdata =(data)=>{


  

  fetch(`${API}/updatecustomerbyid/${id}`,{
    method:"PUT",body: JSON.stringify(data),
    headers:{
     "content-type" :"Application/json"
  },




  }).then((r1)=>r1.json()).then((data)=>console.log(data));
  navigate(`/navbar/customers`)
   }

  return (
    <>
    {
      customerEdit ?
    
 <form onSubmit={handleSubmit}
 className='edit-customer'>
<TextField 
 label="name"
 error={errors.name && touched.name}
 name='name'
 onChange={handleChange}
 onBlur={handleBlur}
 value={values.name}
 variant="outlined" defaultValue={customerEdit.name}
 helperText={errors.name && touched.name ? errors.name:""}
  />

 <TextField 
  error={errors.city && touched.city ? errors.city:""}
  name='city'
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.city} label="city" variant="outlined" defaultValue={customerEdit.city} 
  helperText= {errors.city && touched.city ? errors.city:""}
  />



 <TextField  
  name='contact'
  error={errors.contact && touched.contact ? errors.contact:""}
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.contact} label="contact" variant="outlined" defaultValue={customerEdit.contact}
  helperText= {errors.contact && touched.contact ? errors.contact:""}
  />
      
 <TextField 
  onChange={handleChange}
  error= {errors.email && touched.email ? errors.email:""}
  name='email'
  onBlur={handleBlur}
  value={values.email} label="email" variant="outlined" defaultValue={customerEdit.email}
  helperText=  {errors.email && touched.email ? errors.email:""}
  
  />

   <Button type='submit'>Save</Button>

    </form> : "loading" 
    }
    </>
  )
}

export default EditCustomer