import React from 'react'

export default function Navbar(){
  return (
  <header class="container-fluid fixed-top p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex  flex-nowrap align-items-center justify-content-center justify-content-lg-start">
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-white">Home</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Product</a></li>
          <li><a href="#" class="nav-link px-2 text-white">About us</a></li>
          <li><a href="#" class="nav-link px-2 text-white">contact us</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Feedback</a></li>
        </ul>
        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
  
  )
}
