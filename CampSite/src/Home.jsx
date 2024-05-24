import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ImageSlider from './ImageSlider.jsx'
import CardDeck from './CardDeck.jsx'
import RectangleCard from './RectangleCard.jsx'
import Latest from './Latest.jsx'


const Home = () => {
 
  return (
    <>
       <Header/>
      <div>
        <div className='content-home'>
          <main>
              <h1>Welcome To CampSite</h1>
              <p>Your one-stop shop for all camping needs.</p>
          </main>
        </div>
        <ImageSlider/>
        <div>
        <CardDeck/>
        </div>
        <RectangleCard/>
        <h1>Latest Products</h1>
              <p>Explore Latest Hot Products</p>
        <Latest/>
      </div>
      <div className='footer-container'>
        <Footer/>
      </div>
      
    </>
  )
}

export default Home
