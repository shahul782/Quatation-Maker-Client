import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate();
  return (
    <div className='m-5'>
    <div class="container">
  <div class="row">
    <div class="col">
    <div class="card" >
  <div class="card-body">
    <h5 class="card-title">Vendor</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Button class="btn btn-primary" onClick={()=>navigate('/navbar/vendor')}>
  Vendor
</Button>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" >
  <div class="card-body">
    <h5 class="card-title">Customer</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Button class="btn btn-primary" onClick={()=>navigate('/navbar/customers')}>
  Customer
</Button>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" >
  <div class="card-body">
    <h5 class="card-title">Product</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Button class="btn btn-primary" onClick={()=>navigate('/navbar/product')}>
  Product
</Button>

  </div>
</div>
    </div>
    <div class="col">
    <div class="card" >
  <div class="card-body">
    <h5 class="card-title">Quatation</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Button class="btn btn-primary" onClick={()=>navigate('/navbar/quotation')}>
    Quatation
</Button>

  </div>
</div>
    </div>
  </div>
</div>
</div>
  )
}

export default Home