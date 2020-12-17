import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/vertical.css";
// `;

function TestimonySlider() {
  const slides = [
    {
      title: "Tosan",
      description: "Easily get all your previous bookings when logged in",
    },
    {
      title: "John",
      description: "Got my desired sitting position of my choice",
    },
    {
      title: "Fumi",
      description: "Smooth payment process integration paystack",
      image: "https://i.imgur.com/DCdBXcq.jpg",
    },
    // {
    //   title: "Second item",
    //   description: "Lorem ipsum",
    //   image: "https://i.imgur.com/DCdBXcq.jpg",
    // },
    // {
    //   title: "First item",
    //   description: "Lorem ipsum",
    //   image: "https://i.imgur.com/DCdBXcq.jpg",
    // },
    // {
    //   title: "Second item",
    //   description: "Lorem ipsum",
    //   image: "https://i.imgur.com/DCdBXcq.jpg",
    // },
  ];
  return (
    <div className='text-center testimonials my-3'>
      <h2 className='text-uppercase'>What they say about us ...</h2>

      <Slider autoplay={1000} animateOut direction='vertical'>
        {slides.slice(0, 3).map((item, index) => (
          <div
            key={index}
            style={{
            //   background: `red`,
              height: "30vh",
            //   width: "50vw",
              margin: "90px auto 0",
            }}
          >
            <div className='center testimony text-center'>
              <div className='testimonial'>
                <div className='name my-2'>{item.title}</div>
                <div className='stars'>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonySlider;
