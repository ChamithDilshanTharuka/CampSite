import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
   </div>
   
   <div className='footer-container'>
     <Footer/>
   </div>
   
 </>
  )
}

export default ContactUs