


import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './quotation.css';
import * as yup from 'yup'
import { useFormik } from 'formik';
import { API } from '../global';


const formvalidationSchema = yup.object({
    vendorName:yup.string().required('why not fill this product'),
    Idproof:yup.string().required('why not fill this brand'),
    IdproofNum:yup.string().required('why not fill this offer'),
    city:yup.string().required('why not fill this size'),
    contact:yup.string().required('why not fill this shopName'),


})
const VendorDelete = () => {

  
  const navigate =useNavigate();
  const {id}=useParams()
  const [VendorDelete,setVendorDelete]=useState()
 
  useEffect(()=>{
    fetch(`${API}/getvendorbyid/${id}`,{
      method:"GET"}).then((res)=>res.json()).then((data)=>{console.log(data)
        setVendorDelete(data)})
        
  },[id])

  const {handleSubmit,values,handleChange,errors,handleBlur,touched} = useFormik({
    initialValues: { 

        vendorName:VendorDelete?.vendorName,
        Idproof:VendorDelete?.Idproof,
        IdproofNum:VendorDelete?.IdproofNum,
        city:VendorDelete?.city,
        contact:VendorDelete?.contact,


    },
    validationSchema : formvalidationSchema,
    onSubmit:(values)=>{
     console.log('form values',values)
      editdata(values)
    }
});




   const editdata =(data)=>{


  

  fetch(`${API}/deletevendorbyid/${id}`,{
    method:"DELETE",body: JSON.stringify(data),
    headers:{
     "content-type" :"Application/json"
  },

  }).then((r1)=>r1.json()).then((data)=>console.log(data));
  navigate(`/navbar/vendor`)
   }

  return (
    <>
    {
      VendorDelete ?
    
 <form onSubmit={handleSubmit}
 className='edit-customer'>
<TextField 
 label="vendorName"
 error={errors.vendorName && touched.vendorName}
 name='vendorName'
 onChange={handleChange}
 onBlur={handleBlur}
 value={values.vendorName}
 variant="outlined" defaultValue={VendorDelete.vendorName}
 helperText={errors.vendorName && touched.vendorName ? errors.vendorName:""}
  />

 <TextField 
  error={errors.Idproof && touched.Idproof ? errors.Idproof:""}
  name='Idproof'
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.Idproof} label="Idproof" variant="outlined" defaultValue={VendorDelete.Idproof} 
  helperText= {errors.Idproof && touched.Idproof ? errors.Idproof:""}
  />



 <TextField  
  name='IdproofNum'
  error={errors.IdproofNum && touched.IdproofNum ? errors.IdproofNum:""}
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.IdproofNum} label="IdproofNum" variant="outlined" defaultValue={VendorDelete.IdproofNum}
  helperText= {errors.IdproofNum && touched.IdproofNum ? errors.IdproofNum:""}
  />
      
 <TextField 
  onChange={handleChange}
  error= {errors.city && touched.city ? errors.city:""}
  name='city'
  onBlur={handleBlur}
  value={values.city} label="city" variant="outlined" defaultValue={VendorDelete.city}
  helperText=  {errors.city && touched.city ? errors.city:""}
  
  />
   <TextField 
  onChange={handleChange}
  error= {errors.contact && touched.contact ? errors.contact:""}
  name='contact'
  onBlur={handleBlur}
  value={values.contact} label="contact" variant="outlined" defaultValue={VendorDelete.contact}
  helperText=  {errors.contact && touched.contact ? errors.contact:""}
  
  />

   <Button type='submit'>Delete</Button>

    </form> : "loading" 
    }
    </>
  )
}

export default VendorDelete