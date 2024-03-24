import { AppBar, Box, Button } from '@mui/material'
import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './quotation.css';

const Navbar = () => {
  const navigate =  useNavigate()
  return (
    <>
    <div>
           <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
              <Link class="navbar-brand">Navbar</Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to={'/navbar/home'}>Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to={"/navbar/vendor"}>Vendor</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to={'/navbar/customers'} >customer</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to={'/navbar/product'} >Product</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link " tabindex="-1" aria-disabled="true" to={'/navbar/quotation'}>Quotation</Link>
                  </li>
                </ul>
                <form class="d-flex">
                  <input class="form-control me-2 mb-1" type="search"  placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success" style={{marginRight:"45px",marginBottom:"5px"}} type="submit">Search</button>
                </form>
                <Button className="d-flex"  style={{backgroundColor:"white",marginTop:"5px",  textTransform:"none"}}  color="success" onClick={()=>navigate("/login")} variant="outlined">Logout </Button>
              </div>
            </div>
          </nav>
        </AppBar>
      </Box>
    </div>
    <div>
        <Outlet />
    </div>
    </>

  )
}

export default Navbar