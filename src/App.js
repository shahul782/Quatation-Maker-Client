

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Outlet } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import Vendor from './screen/Vendor';
import Customers from './screen/Customers';
import Product from './screen/Product';
import Quotation from './screen/Quotation';
import Editquatation from './screen/Editquatation';
import EditCustomer from './screen/EditCustomer';
import EditProduct from './screen/EditProduct';
import DeleteCustomer from './screen/DeleteCustomer';
import DeleteProduct from './screen/DeleteProduct';
import DeleteQuatation from './screen/DeleteQuatation';
import Loginpage from './screen/Loginpage';
import Register from './screen/Register';
import Navbar from './screen/Navbar';
import { ToastContainer } from 'react-toastify';
import Addcustomer from './screen/Addcustomer';
import Addproduct from './screen/Addproduct';
import Addquotation from './screen/Addquotation';
import TryFormik from './screen/TryFormik';
import AddVendor from './screen/AddVendor';
import Editvendors from './screen/Editvendors';
import VendorDelete from './screen/VendorDelete';
import Home from './screen/Home';




export default function App() {
  return (
    <>
   
      <div>
        <Routes>
          <Route >
            <Route index element={<Loginpage />} />
          <Route path='/login' element={<Loginpage/>}/>
          <Route path='/register' element={<Register/>} />

          </Route>
          <Route path='/navbar' element={<Navbar />} >
          <Route path='/navbar/vendor' element={<Vendor />} />
          <Route path='/navbar/customers' element={<Customers />} />
          <Route path='/navbar/product' element={<Product />} />
          <Route path='/navbar/quotation' element={<Quotation />} />
          <Route path='/navbar/edit/:id' element ={<Editquatation/>}/>
          <Route path='/navbar/editcustomer/:id' element={<EditCustomer/>} />
          <Route path='/navbar/editproduct/:id' element={<EditProduct/>} />
          <Route path='/navbar/deletecustomer/:id' element={<DeleteCustomer/>} />
          <Route path='/navbar/deleteproduct/:id' element={<DeleteProduct/>}/>
          <Route path='/navbar/deletequatation/:id' element={<DeleteQuatation/>}/>
          <Route path='/navbar/addcustomer' element={<Addcustomer/>}/>
          <Route path='/navbar/addproduct' element={<Addproduct/>}/>
          <Route path='/navbar/addquotation' element={<Addquotation/>}/>
          <Route path='/navbar/addvendor'element={<AddVendor/>} />
          <Route path='/navbar/editvendor/:id' element={<Editvendors/>} />
          <Route path='/navbar/deletevendor/:id' element={<VendorDelete/>} />
          <Route path='/navbar/home' element={<Home/>} />
          </Route>
          <Route  path='/tryformik'element={<TryFormik/>}/>

        </Routes>
        <ToastContainer autoClose={5000} />
        {/* <Outlet /> */}
      </div>

    </>
  );
}

