import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';


function Gallery() {
  return (
    <div className="container">
          <div className="row justify-content-center mt-5"> 
      <Carousel  style={{ width: '600px', height: '300px'}}>
        <Carousel.Item>
          <div className="zoom-container">
            <img
              className="d-block w-100 zoom-image"
              src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp"
              alt="Table Full of Spices"
            />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="zoom-container">
            <img
              className="d-block w-100 zoom-image"
              src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/2.webp"
              alt="Winter Landscape"
            />
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="zoom-container">
            <img
              className="d-block w-100 zoom-image"
              src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp"
              alt="View of the City in the Mountains"
            />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="zoom-container">
            <img
              className="d-block w-100 zoom-image"
              src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/4.webp"
              alt="Place Royale Bruxelles"
            />
          </div>
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  );
}

export default Gallery;
