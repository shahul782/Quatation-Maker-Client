




import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './quotation.css';
import * as yup from 'yup'
import { useFormik } from 'formik';
import { API } from '../global';



const EditQuatation = () => {
  const [customerEdit,setcustomerEdit]=useState()
  const {id}=useParams()

  useEffect(()=>{
    fetch(`${API}/getquatationbyid/${id}`,{
      method:"GET"}).then((res)=>res.json()).then((data)=>{console.log(data)
        setcustomerEdit(data)})
        
  },[id])
  
  
  return (
    <>
    {
      customerEdit ? <EditDataRow rowData={customerEdit} />
    
 : "loading" 
    }
    </>
  )
}

function EditDataRow ({rowData}){
  const navigate =useNavigate();
  const {id}=useParams()


  const formvalidationSchema = yup.object({
    name:yup.string().required('why not fill this name'),
    product:yup.string().required('why not fill this product'),
    price:yup.number().required('why not fill this price'),
    quantity:yup.string().required('why not fill this quantity'),
    city:yup.string().required('why not fill this city'),
    contact:yup.number().required('why not fill this contact')
    
    })
    
  const {handleSubmit,values,handleChange,errors,handleBlur,touched} = useFormik({
    initialValues: { 

      name:rowData.name,
      product :rowData.city,
      price:rowData.contact,
      quantity:rowData.quantity,
      city:rowData.city,
      contact:rowData.contact,
     


    },
    validationSchema : formvalidationSchema,
    onSubmit:(values)=>{
     console.log('form values',values)
      editdata(values)
    }
});




   const editdata =(data)=>{  
  

  fetch(`${API}/updatequatationbyid/${id}`,{
    method:"PUT",body: JSON.stringify(data),
    headers:{
     "content-type" :"Application/json"
  },

  }).then((r1)=>r1.json()).then((data)=>console.log(data));
  navigate(`/navbar/quotation`)
   }

  return(
    <>
 <form onSubmit={handleSubmit}
 className='edit-customer'>
<TextField 
 label="name"
 name='name'
 type="text"
 variant="outlined"
 value={values.name}
 onChange={handleChange}
 error={errors.name && touched.name}
 onBlur={handleBlur}
 helperText={errors.name && touched.name ? errors.name:""}
//  defaultValue={customerEdit.name}
  />

 <TextField 
  error={errors.product && touched.product ? errors.product:""}
  name='product'
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.product} label="product" variant="outlined" 
  // defaultValue={customerEdit.product} 
  helperText= {errors.product && touched.product ? errors.product:""}
  />



 <TextField  
  name='price'
  error={errors.price && touched.price ? errors.price:""}
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.price} label="price" variant="outlined" 
  helperText= {errors.price && touched.price ? errors.price:""}
  />
      
 <TextField 
  onChange={handleChange}
  error= {errors.quantity && touched.quantity ? errors.quantity:""}
  name='quantity'
  onBlur={handleBlur}
  value={values.quantity} label="quantity" variant="outlined" 
  helperText=  {errors.quantity && touched.quantity ? errors.quantity:""}
  
  />
<TextField 
  onChange={handleChange}
  error= {errors.city && touched.city ? errors.city:""}
  name='city'city
  onBlur={handleBlur}
  value={values.city} label="city" variant="outlined" 
  helperText=  {errors.city && touched.city ? errors.city:""}
  
  />
  <TextField 
  onChange={handleChange}
  error= {errors.contact && touched.contact ? errors.contact:""}
  name='contact'
  onBlur={handleBlur}
  value={values.contact} label="contact" variant="outlined" 
  helperText=  {errors.contact && touched.contact ? errors.contact:""}
  
  />
   <Button type='submit'>Save</Button>

    </form>
    </>
  )
}

export default EditQuatation