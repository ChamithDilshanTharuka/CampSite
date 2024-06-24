import React from 'react'
import Header from './Header.jsx'
import Button from 'react-bootstrap/Button';
import Footer from './Footer.jsx'

function AboutUs() {
  return (
    <>
    <Header/>
   <div>
     <div className='content-home'>
       <div className="overlay-text-about">WHO ARE WE...</div>
     </div>
     <div className='about-image-container'>
        <img src="/SmallBanner/aboutImg.jpg" alt="aboutImg" />
     </div>
     <div className='overlay-subtext-container-about'>
     <h1>We are the No.1 camping Providers in Sri lanka.</h1>
     <p>At CAMPSITE, we pride ourselves on being the premier provider of high-quality
       camping gear and accessories in Sri Lanka.
      <br />Our journey began with a simple mission: to make every 
       outdoor adventure more enjoyable and accessible for everyone. </p>

       <div className='learn-more'>
        <Button variant="outline-info" href="https://www.jungletide.com/a-trip-to-kotmale/" type="button" size="lg">Learn More</Button>
       </div>
          </div>
   </div>
   <div className='footer-container'>
     <Footer/>
   </div>
   
 </>
  )
}

export default AboutUs