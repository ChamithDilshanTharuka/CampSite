import React from 'react'

const Header = () => {

    return (
      <div>
        <h1 className='campsite'>CampSite</h1>
        <nav className='navabar'>
            <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Products">Products</a></li>
                    <li><a href="/AboutUs">About Us</a></li>
                    <li><a href="/ContactUs">Contact Us</a></li>
                </ul>
        </nav>
      </div>
    )
  
}

export default Header