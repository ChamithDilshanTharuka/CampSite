import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Gallery from './Gallery.jsx';

function ContactUs() {
  return (
    <>
    <Header/>
<div>
  <div className='contact-us'>Contact Us</div>
     <div className='contact-layout'>
        <div className='contact-form'>
          <Form>
          <div className='form-title'>Write to Us</div>
          <div className='form-subtitle'>We will get back to you as soon as possible...</div>
          <hr />
            <Form.Group className="mb-3">
              <Form.Label For="TextInput">Full Name</Form.Label>
              <Form.Control id="TextInput" placeholder="Full Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label For="TextInput">Phone Number</Form.Label>
              <Form.Control id="TextInput" placeholder="Phone Number" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label For="TextInput">Email</Form.Label>
              <Form.Control id="TextInput" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label For="TextInput">Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Enter your message here" />
            </Form.Group>
            <Button type="submit">Submit</Button>
            <div className='form-last'>**We are committed to protecting your privacy.
            </div>
        </Form></div>
    <div className='contact-data'>
      <div className='image-container'>
          <img src="SmallBanner/contact.jpg" className="card-img-top" alt="backpackImg"/>
          <div className="overlay-text">Contact Us</div>
          
          <div className='overlay-subtext-container'>
            <a href='https://maps.app.goo.gl/6utt6wVdjSTGwLHv5' target='_blank' className='overlay-subtext'>📍 Address: Kothmale, Sri Lanka</a>
            <a href="tel:+0528987932" className='overlay-subtext'>📞 Phone: 052- 8987932</a>
            <a href="mailto:campsitecontact@gmail.com" className='overlay-subtext'>📧 Email: campsitecontact@gmail.com</a>
          </div>
          
          </div>
        </div>
     </div>
      
     <div className='mt-3'>
      <div style={{backgroundColor:"lightgreen", height:"50px"}}>
        <center><h2>Gallery</h2></center>
      </div>
         <Gallery/>
      </div>

     <div>
          <div style={{backgroundColor:"lightgreen", height:"50px"}}>
          <center><h2>Hmmm....Where are We?📌</h2></center>
     </div>
        <iframe  className='contact-map mt-3' style={{height:"400px", width:"100%"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15839.621865236619!2d80.58919065!3d7.02039755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae377b544e561a1%3A0xaca4c365f97a79ae!2sKotmale!5e0!3m2!1sen!2slk!4v1719248544661!5m2!1sen!2slk"
       allowfullscreen="" loading="lazy">
       </iframe>
     </div>
   </div>
   
   <div className='footer-container'>
     <Footer/>
   </div>
   
 </>
  )
}

export default ContactUs;