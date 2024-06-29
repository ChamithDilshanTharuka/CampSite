import React from 'react'


const SideMenu = () => {
  return (

    <div className='aside'>
    <div className="p-4 text-white">
      <span className="fs-2">Product Categories</span>
   
    <hr/>
    <ul className="nav nav-pills flex-column">
      <li className="nav-item">
        <a href="Accessories" className="nav-link active" aria-current="page">
          Accessories
        </a>
      </li>
      <li>
        <a href="Backpack" className="nav-link text-white">
          Backpack
        </a>
      </li>
      <li>
        <a href="Gear" className="nav-link text-white">
          Gear
        </a>
      </li>
      <li>
        <a href="Tents" className="nav-link text-white">
          Tents
        </a>
      </li>
    </ul>
  </div>
  </div>
  )
}

export default SideMenu