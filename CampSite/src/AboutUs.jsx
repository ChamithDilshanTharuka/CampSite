import React from 'react'
import Header from './Header.jsx'
import Button from 'react-bootstrap/Button';
import Footer from './Footer.jsx'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

          <div className='tabs'>
          <Tabs defaultActiveKey="commitment" id="justify-tab-example" className="mb-3" justify>
      <Tab eventKey="commitment" title="Our Commitment">
        <Container>
          <Row>
            <Col md={4}>
              <Card.Img variant="top" src="path/to/your/image1.jpg" />
            </Col>
            <Col md={8}>
              <Card>
                <Card.Body>
                  <Card.Title>Our Commitment</Card.Title>
                  <Card.Text>
                    We are dedicated to providing the highest quality camping gear and accessories. Our mission is to ensure that every outdoor enthusiast has access to reliable, durable, and affordable equipment to enhance their adventure experiences.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Tab>
                <Tab eventKey="ContactUs.jsx" title="Profile">
                  Tab content for Profile
                </Tab>
                <Tab eventKey="longer-tab" title="Loooonger Tab">
                  Tab content for Loooonger Tab
                </Tab>
                <Tab eventKey="contact" title="Contact">
                  Tab content for Contact
                </Tab>
          </Tabs>
          </div>

          <div className='commitment'>
            <h1>Our Commitment</h1>
          </div>
          <div className='whyus'>
            <h1>Why Choose Us?</h1>
          </div>
          <div className='our-story'>
            <h1>Our Story</h1>
          </div>
          <div className='joinus'>
            <h1>Join Or Community</h1>
          </div>
      </div>

   <div className='footer-container'>
     <Footer/>
   </div>
   
 </>
  )
}

export default AboutUs