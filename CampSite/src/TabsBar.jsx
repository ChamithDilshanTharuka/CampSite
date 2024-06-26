import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TabsBar() {
    return (
<div className='tabs'>
  
<Tabs  className="mt-3" justify>
      <Tab className='A-tab' eventKey="commitment" title="Our Commitment">
      <Container className='my-5 conatainer-card'>
      <Row className='row-card p-3'>
        <Col lg={4}>
          <Card.Img variant="top" src="AboutUsImg/about-1.jpg" />
        </Col>
        <Col lg={8}>
          <Card className='card-data'>
            <Card.Body>
              <Card.Title>Our Commitment</Card.Title>
              <Card.Text>
               <div>
               <b>Quality and Durability</b>: We understand that when you’re out in the wild, you need
                equipment that you can rely on. That’s why we only stock products from trusted brands 
                that meet our rigorous standards for quality and durability.
                </div> 
                <br />
                <div>
                <b>Wide Range of Products</b>: Whether you're planning a weekend getaway or an extended 
                expedition, we have everything you need to make your camping experience unforgettable.
                 From tents, sleeping bags, and backpacks to cooking gear, lighting, and safety equipment,
                  our extensive range ensures you're well-prepared for any adventure.
                </div> 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
      </Tab>

      <Tab className='A-tab' eventKey="whyus" title="Why Choose Us?">
      <Container className='my-5 conatainer-card'>
      <Row className='row-card p-3'>
        <Col lg={4}>
          <Card.Img variant="top" src="AboutUsImg/about-1.jpg" />
        </Col>
        <Col lg={8}>
          <Card className='card-data'>
            <Card.Body>
              <Card.Title>Why Choose Us?</Card.Title>
              <Card.Text>
                <div>
                <b>Customer-Centric Approach:</b> Your satisfaction is our top priority.
                 We strive to provide a seamless shopping experience from start to finish,
                  with easy navigation, detailed product descriptions, and a hassle-free return policy.
                </div>
                <br />
                <div>
                <b>Competitive Prices:</b> We believe that top-quality camping gear should be accessible to everyone. 
                That’s why we offer competitive prices and frequent promotions to ensure you get the best value for your money.
                </div>
                 </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
      </Tab> 

      <Tab className='A-tab' eventKey="ourstory" title="Our Story">
      <Container className='my-5 conatainer-card'>
      <Row className='row-card p-3'>
        <Col lg={4}>
          <Card.Img variant="top" src="AboutUsImg/about-1.jpg" />
        </Col>
        <Col lg={8}>
          <Card className='card-data'>
            <Card.Body>
              <Card.Title>Our Story</Card.Title>
              <Card.Text>
              Founded by a group of avid campers, CAMPSITE was born out of a love for 
              the great outdoors and a desire to share that passion with others. Over the years,
               we have grown from a small startup into a leading online retailer, serving thousands 
               of happy customers nationwide. 
               </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
      </Tab>

      <Tab className='A-tab' eventKey="joinus" title="Join Our Community">
      <Container className='my-5 conatainer-card'>
      <Row className='row-card p-3'>
        <Col lg={4}>
          <Card.Img variant="top" src="AboutUsImg/about-1.jpg" />
        </Col>
        <Col lg={8}>
          <Card className='card-data'>
              <Card.Body>
                <Card.Title>Join Our Community</Card.Title>
                <Card.Text>
                At CAMPSITE, we believe that the best adventures are shared.
                 Join our community of like-minded outdoor enthusiasts on social media,
                  where we share tips, stories, and inspiration to help you make the most
                   of your time in nature.
                 </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>
        </Tab>
              
</Tabs>
</div>
        );
    }

export default TabsBar;