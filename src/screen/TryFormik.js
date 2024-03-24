import React from 'react';
import '../App.css';
import { useFormik } from 'formik';
import * as yup from 'yup'

// const TryFormik = () => {
//     const formik = useFormik({
//         initialValues: { email: "sha@123", password: "123456" },
//         onSubmit:(values)=>{
//           console.log('form values',values)

//         }
//     });

//     // // Check if formik.values is defined before accessing email
//     // const emailValue = formik.values ? formik.values.email : '';
//     // const passwordValue = formik.values ? formik.values.password : '';

//     return (
//         <form className='user-form'  onSubmit={formik.handleSubmit}>
//             <input type='email' value={formik.values.email}
//              name='email'
//              onChange={formik.handleChange}
//              placeholder='enter email' />

//             <input type='password' value={formik.values.password} 
//              name='password'
//              onChange={formik.handleChange}
//              placeholder='enter password' />
//             <button type='submit'>submit</button>
//             {JSON.stringify(formik.values)}
//         </form>
//     );
// }



const formvalidationSchema = yup.object({
  email:yup.string().required('why not fill this email').min(5,'need a bigger email'),
  password:yup.string().required('why not fill this password').min(8).max(12)

})
const TryFormik = () => {
  const {handleSubmit,values,handleChange,errors,handleBlur,touched} = useFormik({
      initialValues: { email: "", password: "" },
      validationSchema : formvalidationSchema,
      onSubmit:(values)=>{
        console.log('form values',values)

      }
  });


  return (
      <form className='user-form'  onSubmit={handleSubmit}>
          <input type='email' value={values.email}
           name='email'
           onChange={handleChange}
           onBlur={handleBlur}
           placeholder='enter email' />
         {errors.email && touched.email ? errors.email : ""}
          <input type='password' value={values.password} 
           name='password'
           onChange={handleChange}
           placeholder='enter password'  onBlur={handleBlur} />
          
           {errors.password && touched.password ? errors.password :""}
          <button type='submit'>submit</button>

          
         
         <pre> {JSON.stringify(values)}</pre>
         
         <pre> {JSON.stringify(touched)}</pre>
      </form>
  );
}

export default TryFormik;