import React from "react";
import HeroSection from "../../components/hero-section/HeroSection";
// import { Container, Row, Col, Card } from "react-bootstrap";
import "./Homepage.css";
// import Slider from "../../components/slider/Slider";
// import TestimonySlider from "../../components/testimony/TestimonySlider";

function Homepage() {
  return (
    <div>
      <HeroSection />

      <section className='container intro'>
        <div className='intro-one'>
          <h1 className='intron-one-heading'>Travel With Benefits</h1>
          <p>
            Travel with benefits is a transport retail service delivery that
            enables customers to buy tickets with benefits to enable them access
            to social services. Our service has been proven to be supportive to
            Nigerians travelling across the country by road. The benefit of our
            social retail services enable individuals to have access to various
            Travel-with-benefits retail service benefits each time they travel
            with our transport companies listed above with a zero account
            balance any time, anywhere.
          </p>
        </div>
        <div className='intro-img'>
          <div className='img-one'>
            <img
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1610141425/Rectangle_13_rcacba.png'
              alt='img'
            />
          </div>
          <div className='img-two'>
            <img
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1610141425/Rectangle_14_o3ftg8.png'
              alt='img'
            />
          </div>
        </div>
      </section>

      <section className='container choose-us'>
        <div className='choose-us-title'>
          <h1>Why Choose Us</h1>
        </div>

        <div className='choose-us-one'>
          <div className='col-one'>
            <div className='col-one-title text-right'>
              <h1>01</h1>
            </div>
            <div className='col-one-body'>
              <h5>
                <hr className='line' /> DIVERSE DESTINATION
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                deleniti voluptatem consequuntur suscipit nulla neque dolores
                quo natus deserunt officiis.
              </p>
            </div>
          </div>
          <div className='col-two'>
            <img
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1610143034/3_n0mmj2.png'
              alt='img'
            />
          </div>
        </div>

        <div className='choose-us-one'>
          <div className='col-two-right'>
            <img
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1610143034/3_n0mmj2.png'
              alt='img'
            />
          </div>
          <div className='col-one-right'>
            <div className='col-one-title text-left'>
              <h1>02</h1>
            </div>
            <div className='col-one-body'>
              <h5>
                <hr className='line' /> VALUE FOR MONEY
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                deleniti voluptatem consequuntur suscipit nulla neque dolores
                quo natus deserunt officiis.
              </p>
            </div>
          </div>
        </div>

        <div className='choose-us-one'>
          <div className='col-one'>
            <div className='col-one-title text-right'>
              <h1>03</h1>
            </div>
            <div className='col-one-body'>
              <h5>
                <hr className='line' /> TRAVEL COMFORT
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                deleniti voluptatem consequuntur suscipit nulla neque dolores
                quo natus deserunt officiis.
              </p>
            </div>
          </div>
          <div className='col-two'>
            <img
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1610143034/3_n0mmj2.png'
              alt='img'
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
