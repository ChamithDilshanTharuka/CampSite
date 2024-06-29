import React from 'react'
import Header from './Header'
import Footer from './Footer'
import SideMenu from './SideMenu'
import CardDeck from './CardDeck'

const Products = () => {
  return (
      <>
        <Header/>
      
    <div className='main-layout'>
    
        <div className='content-home'>
        <SideMenu/>
          <main>
              <h1>Welcome to Products Page</h1>
              <p>Find All Needs</p>

              <div className='row'>
                <h2>Accessories</h2>
                <CardDeck/>
              </div>
              <div className='row'>
                <h2>Backpack</h2>
                <CardDeck/>
              </div>
              <div className='row'>
                <h2>Gear</h2>
                <CardDeck/>
              </div>
              <div className='row'>
                <h2>Tents</h2>
                <CardDeck/>
              </div>
          </main> 
      </div>
    
  
      
    <div className='footer-container'>
        <Footer/>
    </div>
    </div>
    </>
  )
}

export default Products