import React from "react";
import HeroSection from "../../components/hero-section/HeroSection";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Homepage.css";
import Slider from "../../components/slider/Slider";

function Homepage() {
  return (
    <div>
      <HeroSection />

      <Container className='welcome'>
        <Row>
          <Col xs={12} md={6} className='m-auto'>
            <h1 className=''>TRAVEL WITH BENEFITS</h1>
            <p>
              <span className='notice'>Travel with benefits</span> is a
              transport retail service delivery that enables customers to buy
              tickets with benefits to enable them access to social services.
              Our service has been proven to be supportive to Nigerians
              travelling across the country by road. The benefit of our social
              retail services enable individuals to have access to various
              Travel-with-benefits retail service benefits each time they travel
              with our transport companies listed above with a zero account
              balance any time, anywhere.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <img
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1605813472/fas-khan-fG_6H0URdos-unsplash_ykkp3y.jpg'
              alt='img'
              className='img-fluid'
            />
          </Col>
        </Row>
      </Container>

      <Container fluid className='choose-us'>
        <div className=' text-center'>
          <h1>WHY CHOOSE US</h1>
          <p>
            Providing customers-centric retail service delivery solutions for
            <br />
            all road users that patronize Travel-with-benefits social service,
            <br />
            through user-friendly technological innovations and administrative
            benefits.
          </p>
        </div>
        <Row>
          <Col xs={12} md={3}>
            <div className='choose-us-content text-center'>
              <i className='fas icon fa-map-marker-alt'></i>
              <h5>Diverse Destinations</h5>
              <p>
                orem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod.
              </p>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className='choose-us-content text-center'>
              <i className='fas icon fa-money-check'></i>
              <h5>Value for Money</h5>
              <p>
                orem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod.
              </p>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className='choose-us-content text-center'>
              <i className='fas icon fa-globe-africa'></i>
              <h5>Beautiful Places</h5>
              <p>
                orem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod.
              </p>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className='choose-us-content text-center'>
              <i className='fas icon fa-location-arrow'></i>
              <h5>Passionate Travel</h5>
              <p>
                orem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className='places p-4'>
        <div className='places-content text-center m-4'>
          <h1>Most Visited Places</h1>
        </div>
        <Row>
          <Col className='places-card' xs={12} md={4}>
            <Card className='show'>
              <Card.Img
                variant='top'
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1605813064/narciso-arellano-773s0MrPTMA-unsplash_sxmnmy.jpg'
              />
            </Card>
            <div className='visited'>
              <div className='card'>
                <span className='location'>
                  <i className='fas fa-map-marker-alt'></i> Lagos, Nigeria
                </span>
                <h5>Victoria-Island Lagos, Nigeria</h5>
                <div className='review'>
                  <i className='far fa-smile'></i>
                  <span>12</span>
                  <span>Superb</span>
                </div>
                <p className='hide'>
                  A wonderful little cottage right on the seashore - perfect for
                  exploring.
                </p>
                <hr />
                <ul className='list'>
                  <li>
                    <i className='far fa-clock'></i>7 Days
                  </li>
                  <li>
                    <i className='far fa-user-friends'></i>65+
                  </li>
                  {/* <li className='money'>$2000</li> */}
                </ul>
              </div>
            </div>
            <div className='visited1 hide'>
              <div className='card show'>
                <span className='location show'>
                  <i className='fas fa-map-marker-alt'></i> Lagos, Nigeria
                </span>
                <h5 className='show'>Victoria-Island Lagos, Nigeria</h5>
                <div className='review show'>
                  <i className='far fa-smile show'></i>
                  <span className='show'>9</span>
                  <span className='show'>Superb</span>
                </div>
                <p className='show'>
                  A wonderful little cottage right on the seashore - perfect for
                  exploring.
                </p>
                <hr />
                <ul className='list show'>
                  <li>
                    <i className='far fa-clock'></i>7 Days
                  </li>
                  <li>
                    <i className='far fa-user-friends'></i>65+
                  </li>
                  {/* <li className='money show'>$2000</li> */}
                </ul>
              </div>
            </div>
          </Col>
          <Col className='places-card' xs={12} md={4}>
            <Card>
              <Card.Img
                variant='top'
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1605813063/lynda-hinton-qUb4_r8Macg-unsplash_xwktky.jpg'
              />
            </Card>
            <div className='visited'>
              <div className='card'>
                <span className='location'>
                  <i className='fas fa-map-marker-alt'></i> Abuja, Nigeria
                </span>
                <h5>Wuse II Abuja, Nigeria</h5>
                <div className='review'>
                  <i className='far fa-smile'></i>
                  <span>9</span>
                  <span>Superb</span>
                </div>
                <p className='hide'>
                  A wonderful little cottage right on the seashore - perfect for
                  exploring.
                </p>
                <hr />
                <ul className='list'>
                  <li>
                    <i className='far fa-clock'></i>7 Days
                  </li>
                  <li>
                    <i className='far fa-user-friends'></i>65+
                  </li>
                  {/* <li className='money'>$2000</li> */}
                </ul>
              </div>
            </div>
            <div className='visited1 hide'>
              <div className='card show'>
                <span className='location show'>
                  <i className='fas fa-map-marker-alt'></i> Abuja, Nigeria
                </span>
                <h5 className='show'>Wuse II Abuja, Nigeria</h5>
                <div className='review show'>
                  <i className='far fa-smile show'></i>
                  <span className='show'>9</span>
                  <span className='show'>Superb</span>
                </div>
                <p className='show'>
                  A wonderful little cottage right on the seashore - perfect for
                  exploring.
                </p>
                <hr />
                <ul className='list show'>
                  <li>
                    <i className='far fa-clock'></i>7 Days
                  </li>
                  <li>
                    <i className='far fa-user-friends'></i>65+
                  </li>
                  {/* <li className='money show'>$2000</li> */}
                </ul>
              </div>
            </div>
          </Col>
          <Col className='places-card' xs={12} md={4}>
            <Card>
              <Card.Img
                variant='top'
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1605813472/fas-khan-fG_6H0URdos-unsplash_ykkp3y.jpg'
              />
            </Card>
            <div className='visited'>
              <div className='card'>
                <span className='location'>
                  <i className='fas fa-map-marker-alt'></i> Cross-River, Nigeria
                </span>
                <h5>Cross-River, Nigeria</h5>
                <div className='review'>
                  <i className='far fa-smile'></i>
                  <span>9</span>
                  <span>Superb</span>
                </div>
                <p className='hide'>
                  A wonderful little cottage right on the seashore - perfect for
                  exploring.
                </p>
                <hr />
                <ul className='list'>
                  <li>
                    <i className='far fa-clock'></i>7 Days
                  </li>
                  <li>
                    <i className='far fa-user-friends'></i>65+
                  </li>
                  {/* <li className='money'>$2000</li> */}
                </ul>
              </div>
            </div>
            <div className='visited1 hide'>
              <div className='card show'>
                <span className='location show'>
                  <i className='fas fa-map-marker-alt'></i> Cross-River, Nigeria
                </span>
                <h5 className='show'>Cross-River, Nigeria</h5>
                <div className='review show'>
                  <i className='far fa-smile show'></i>
                  <span className='show'>9</span>
                  <span className='show'>Superb</span>
                </div>
                <p className='show'>
                  A wonderful little cottage right on the seashore - perfect for
                  exploring.
                </p>
                <hr />
                <ul className='list show'>
                  <li>
                    <i className='far fa-clock'></i>7 Days
                  </li>
                  <li>
                    <i className='far fa-user-friends'></i>65+
                  </li>
                  {/* <li className='money show'>$2000</li> */}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Slider />

      <Container className='testimony text-center'>
        <h2 className='text-uppercase'>What they say about us ...</h2>
        <Row>
          <Col xs={12} md={4} className='my-3'>
            <div className='testimonial'>
              <div className='name my-2'>Tosan</div>
              <div className='stars'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
              </div>
              <p>Easily get all your previous bookings when logged in.</p>
            </div>
          </Col>
          <Col xs={12} md={4} className='my-3'>
            <div className='testimonial'>
              <div className='name my-2'>John </div>
              <div className='stars'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
              </div>
              <p>Got my desired sitting position of my choice</p>
            </div>
          </Col>
          <Col xs={12} md={4} className='my-3'>
            <div className='testimonial'>
              <div className='name my-2'>Funmi</div>
              <div className='stars'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
              </div>
              <p>Smooth payment process integration paystack</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
