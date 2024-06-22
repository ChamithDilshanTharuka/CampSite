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
              <Form.Control as="textarea" rows={3} placeholder="Enter your message here" />
            </Form.Group>
            <Button type="submit">Submit</Button>
            <div className='form-last'>**We are committed to protecting your privacy.
            </div>
        </Form></div>
          <div className='contact-data'>
      <img src="SmallBanner/small-banner1.jpg" className="card-img-top" alt="backpackImg"/>
              <h1>Contact Us</h1>
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