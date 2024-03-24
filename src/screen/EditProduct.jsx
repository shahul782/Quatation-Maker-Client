import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './quotation.css';
import * as yup from 'yup'
import { useFormik } from 'formik';
import { API } from '../global';


const formvalidationSchema = yup.object({
product:yup.string().required('why not fill this product'),
brand:yup.string().required('why not fill this brand'),
offer:yup.string().required('why not fill this offer'),
size:yup.string().required('why not fill this size'),
shopName:yup.string().required('why not fill this shopName'),

})
const EditProduct = () => {

  
  const navigate =useNavigate();
  const {id}=useParams()
  const [customerEdit,setcustomerEdit]=useState()

  useEffect(()=>{
    fetch(`${API}/getproductbyid/${id}`,{
      method:"GET"}).then((res)=>res.json()).then((data)=>{console.log(data)
        setcustomerEdit(data)})
        
  },[id])

  const {handleSubmit,values,handleChange,errors,handleBlur,touched} = useFormik({
    initialValues: { 

      product:customerEdit?.product,
      brand:customerEdit?.brand,
      offer:customerEdit?.offer,
      size:customerEdit?.size,
      shopName:customerEdit?.shopName

    },
    validationSchema : formvalidationSchema,
    onSubmit:(values)=>{
     console.log('form values',values)
      editdata(values)
    }
});




   const editdata =(data)=>{

  
  

  fetch(`${API}/updateproductbyid/${id}`,{
    method:"PUT",body: JSON.stringify(data),
    headers:{
     "content-type" :"Application/json"
  },

  }).then((r1)=>r1.json()).then((data)=>console.log(data));
  navigate(`/navbar/product`)
   }

  return (
    <>
    {
      customerEdit ?
    
 <form onSubmit={handleSubmit}
 className='edit-customer'>
<TextField 
 label="product"
 error={errors.product && touched.product}
 name='product'
 onChange={handleChange}
 onBlur={handleBlur}
 value={values.product}
 variant="outlined" defaultValue={customerEdit.product}
 helperText={errors.product && touched.product ? errors.product:""}
  />

 <TextField 
  error={errors.brand && touched.brand ? errors.brand:""}
  name='brand'
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.brand} label="brand" variant="outlined" defaultValue={customerEdit.brand} 
  helperText= {errors.brand && touched.brand ? errors.brand:""}
  />



 <TextField  
  name='offer'
  error={errors.offer && touched.offer ? errors.offer:""}
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.offer} label="contact" variant="outlined" defaultValue={customerEdit.offer}
  helperText= {errors.offer && touched.offer ? errors.offer:""}
  />
      
 <TextField 
  onChange={handleChange}
  error= {errors.size && touched.size ? errors.size:""}
  name='size'
  onBlur={handleBlur}
  value={values.size} label="size" variant="outlined" defaultValue={customerEdit.size}
  helperText=  {errors.size && touched.size ? errors.size:""}
  
  />
   <TextField 
  onChange={handleChange}
  error= {errors.shopName && touched.shopName ? errors.shopName:""}
  name='shopName'
  onBlur={handleBlur}
  value={values.shopName} label="shopName" variant="outlined" defaultValue={customerEdit.shopName}
  helperText=  {errors.shopName && touched.shopName ? errors.shopName:""}
  
  />

   <Button type='submit'>Save</Button>

    </form> : "loading" 
    }
    </>
  )
}

export default EditProduct