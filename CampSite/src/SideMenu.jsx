import React from 'react'


const SideMenu = () => {
  return (

    <div className='aside'>
    <div className="p-4 text-white">
      <span className="fs-2">Product Categories</span>
   
    <hr/>
    <ul className="nav nav-pills flex-column">
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
  </div>
  </div>
  )
}

export default SideMenu