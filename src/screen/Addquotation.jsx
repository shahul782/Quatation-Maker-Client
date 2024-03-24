//  import { Button, TextField } from "@mui/material";
//  import React, { useState } from "react";
// import "./quotation.css";
//  import { useNavigate } from "react-router-dom";
//  import { useFormik } from "formik";
//  import * as yup from 'yup';

//  const Addquotation = () => {

//    const FormValidationSchema = yup.object({
//      name:yup.string().required(),
//      product : yup.string().required(),
//      price:yup.number().required(),
//      quantity:yup.string().required(),
//      city:yup.string().required(),
//      contact:yup.string().required(),
//  })
//    const navigate = useNavigate();

//   const { handleChange, handleSubmit, handleBlur, touched, values, errors } = useFormik({
//     initialValues: { name:"",product:"",price:"",quantity:"",city:"",contact:""},
//     validationSchema: FormValidationSchema,
//     onSubmit:(values)=>{
//       console.log('form values',values)
//         addquatation(values)
//      }
// })
//    const addquatation = (data) => {

//     fetch(`http://localhost:4000/addquotation`, {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-type": "Application/json",
//       },
//     })
//       .then((res) => {
//         res.json();
//       })
//       .then((d1) => {
//         navigate("/navbar/quotation");
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} id="add-customer">
//         <TextField
//         name='name'
//         value={values.name}
//         onChange={handleChange}
//         error={errors.name && touched.name }
//         onBlur={handleBlur} 
//         helperText={errors.name && touched.name ? errors.name : ""}
//         label="Name"
//         variant="outlined"
//         />
//         <TextField
//         name='product'
//         value={values.product}
//         onChange={handleChange}
//         error={errors.product && touched.product }
//         onBlur={handleBlur} 
//         helperText={errors.product && touched.product ? errors.product : ""}
//         label="product"
//         variant="outlined"
//         />
//         <TextField
//        name='price'
//        value={values.price}
//        onChange={handleChange}
//        error={errors.price && touched.price }
//        onBlur={handleBlur} 
//        helperText={errors.price && touched.price ? errors.price : ""}
//        label="price"
//        variant="outlined"
//         />
//         <TextField
//        name='quantity'
//        value={values.quantity}
//        onChange={handleChange}
//        error={errors.quantity && touched.quantity }
//        onBlur={handleBlur} 
//        helperText={errors.quantity && touched.quantity ? errors.quantity : ""}
//        label="quantity"
//        variant="outlined"
//         />
//          <TextField
//        name="city"
//        value={values.city}
//        onChange={handleChange}
//        error={errors.city && touched.city }
//        onBlur={handleBlur} 
//        helperText={errors.city && touched.city ? errors.city : ""}
//        label="city"
//        variant="outlined"
//         />
//          <TextField
//        name='contact'
//        value={values.contact}
//        onChange={handleChange}
//        error={errors.contact && touched.contact }
//        onBlur={handleBlur} 
//        helperText={errors.contact && touched.contact ? errors.contact : ""}
//        label="contact"
//        variant="outlined"
//         />
//         <Button variant="contained" type='submit'>
//           Addquatation
//         </Button>
//       </form>
//     </div>
//   );
// };

//  export default Addquotation;



import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "./quotation.css";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup'
import { useFormik } from "formik";
import { API } from "../global";




const FormValidationSchema = yup.object({
  name:yup.string().required(),
  product : yup.string().required(),
  price:yup.string().required(),
  quantity:yup.string().required(),
  city:yup.string().required(),
  contact:yup.string().required(),
})
const Addquotation = () => {
  const navigate = useNavigate();
  
  const { handleChange, handleSubmit, handleBlur, touched, values, errors } =useFormik({
    initialValues: { 
      name: "",
    product:"",
    price: "",
    quantity: "",
    city: "",
    contact: ""
      
    },
    validationSchema: FormValidationSchema,
    onSubmit:(values)=>{
      console.log('form values',values)
      addproduct(values)
 } })



  const addproduct = (data) => {
  

    fetch(`${API}/createquatation`, {
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
        navigate("/navbar/customer");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="add-customer">
      <TextField
  name='name'
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.name}
  error={!!errors.product && touched.name}
  helperText={!!errors.name && touched.name ? errors.name : ""}
  label="name"
  variant="outlined"
  
  
/>

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
  name='price'
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.price}
  error={!!errors.price && touched.price}
  helperText={!!errors.price && touched.price ? errors.price : ""}
  label="price"
  variant="outlined"
/>

<TextField
  name='quantity'
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.quantity}
  error={!!errors.quantity && touched.quantity}
  helperText={!!errors.quantity && touched.quantity ? errors.quantity : ""}
  label="quantity"
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
contact  variant="outlined"
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
          AddQuatation
        </Button>
      </form>
    </div>
  );
};

export default Addquotation;






