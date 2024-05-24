import React from 'react'


const SideMenu = () => {
  return (
   <div className='container-fluid'>
    <div className='aside'>
    <div className="p-3 text-white bg-dark col-auto">
      <span className="fs-4">Product Categories</span>
   
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto ">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          
          Orders
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">

          Products
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          
          Customers
        </a>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white
       text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <strong>Profile</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
  </div>
  </div>
  )
}

export default SideMenu