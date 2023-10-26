import React from 'react'


const Navbar = () => {
  return (
    <nav className='md:flex md:justify-between shadow-md md:p-2'>

        <h4>Online Store</h4>
        <div className='md:flex md:items-center'> 
        <i class="fa-solid fa-magnifying-glass text-2xl mr-2"></i><input type="search" className='form-control'  name="" id="" />
        </div>
        <div className='md:flex md:justify-between'>
        <a href="/register"
           className='btn btn-primary mr-3' >Register
        </a>
          <a href='/login' className='btn btn-primary'>Login</a>
        </div>

       
    </nav>
  )
}

export default Navbar