
import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './quotation.css';
import * as yup from 'yup'
import { useFormik } from 'formik';
import { API } from '../global';


const formvalidationSchema = yup.object({
  vendorName:yup.string().required('why not fill this vendorname'),
  Idproof:yup.string().required('why not fill this idproof'),
  IdproofNum:yup.number().required('why not fill this idnum'),
  city:yup.string().required('why not fill this city'),
  contact:yup.string().required('why not fill this contact'),


})
const EditVendor = () => {

  
  const navigate =useNavigate();
  const {id}=useParams()
  const [vendorEdit,setvendorEdit]=useState()
  console.log(vendorEdit)

  useEffect(()=>{
    fetch(`${API}/getvendorbyid/${id}`,{
      method:"GET"}).then((res)=>res.json()).then((data)=>{console.log(data)
        setvendorEdit(data)})
        
  },[id])

  const {handleSubmit,values,handleChange,errors,handleBlur,touched} = useFormik({
    initialValues: { 

      vendorName:vendorEdit?.vendorName,
      Idproof :vendorEdit?.Idproof,
      IdproofNum:vendorEdit?.IdproofNum,
      city:vendorEdit?.city,
      contact:vendorEdit?.contact,
     

    },
    validationSchema : formvalidationSchema,
    onSubmit:(values)=>{
     console.log('form values',values)
      editdata(values)
    }
});




   const editdata =(data)=>{

   
  

  fetch(`${API}/updatevendorbyid/${id}`,{
    method:"PUT",body: JSON.stringify(data),
    headers:{
     "content-type" :"Application/json"
  },

  }).then((r1)=>r1.json()).then((data)=>console.log(data));
  navigate(`/navbar/vendor`)
   }

  return (
    <>
    {
      vendorEdit ?
    
 <form onSubmit={handleSubmit}
 className='edit-customer'>
<TextField 
 label="vendorName"
 error={errors.vendorName && touched.vendorName}
 name='vendorName'
 onChange={handleChange}
 onBlur={handleBlur}
 value={values.vendorName}
 variant="outlined" defaultValue={vendorEdit.vendorName}
 helperText={errors.vendorName && touched.vendorName ? errors.vendorName:""}
  />

 <TextField 
  error={errors.Idproof && touched.Idproof ? errors.Idproof:""}
  name='Idproof'
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.Idproof} label="Idproof" variant="outlined" defaultValue={vendorEdit.Idproof} 
  helperText= {errors.Idproof && touched.Idproof ? errors.Idproof:""}
  />



 <TextField  
  name='IdproofNum'
  error={errors.IdproofNum && touched.IdproofNum ? errors.IdproofNum:""}
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.IdproofNum} label="IdproofNum" variant="outlined" defaultValue={vendorEdit.IdproofNum}
  helperText= {errors.IdproofNum && touched.IdproofNum ? errors.IdproofNum:""}
  />

      
 <TextField 
  onChange={handleChange}
  error= {errors.contact && touched.contact ? errors.contact:""}
  name='contact'
  onBlur={handleBlur}
  value={values.contact} label="contact" variant="outlined" defaultValue={vendorEdit.contact}
  helperText=  {errors.contact && touched.contact ? errors.contact:""}
  
  />
<TextField 
  onChange={handleChange}
  error= {errors.city && touched.city ? errors.city:""}
  name='city'city
  onBlur={handleBlur}
  value={values.city} label="city" variant="outlined" defaultValue={vendorEdit.city}
  helperText=  {errors.city && touched.city ? errors.city:""}
  
  />

   <Button type='submit'>Save</Button>

    </form> : "loading" 
    }
    </>
  )
}

export default EditVendor