import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Products = () => {
  return (
      <>
        <Header/>
      <div className='main-layout'>
        
        <div className='content-home'>
          <main>
              <h1>Welcome to Products Page</h1>
              <p>Find All Needs</p>
          </main> 
      </div>
      </div>
    <div className='footer-container'>
        <Footer/>
    </div>
    </>
  )
}

export default Products