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
              <span className='notice'>Travel-with-benefits.com</span> is a
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
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1607635639/cbf1416d52b34edbbfaf01b7adabc10e_r9a5wt.jpg'
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
            through user-friendly technologic innovations and administrative
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

      <Container fluid className='places p-5'>
        <div className='places-content text-white text-center m-4'>
          <h3>Most Visited Places</h3>
        </div>
        <Row>
          <Col className='places-card' xs={12} md={3}>
            <Card>
              <Card.Img
                variant='top'
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1605813064/narciso-arellano-773s0MrPTMA-unsplash_sxmnmy.jpg'
              />
              <Card.Body>
                <Card.Title>Lagos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {/* <Button buttonStyle='btn--outline'>Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col className='places-card' xs={12} md={3}>
            <Card>
              <Card.Img
                variant='top'
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1605813063/lynda-hinton-qUb4_r8Macg-unsplash_xwktky.jpg'
              />
              <Card.Body>
                <Card.Title>Abuja</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {/* <Button buttonStyle='btn--outline'>Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col className='places-card' xs={12} md={3}>
            <Card>
              <Card.Img
                variant='top'
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1605813472/fas-khan-fG_6H0URdos-unsplash_ykkp3y.jpg'
              />
              <Card.Body>
                <Card.Title>Cross River</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {/* <Button buttonStyle='btn--outline'>Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col className='places-card' xs={12} md={3}>
            <Card>
              <Card.Img
                variant='top'
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1605813060/cedric-blondeau-n9-fnypa6U0-unsplash_h8oila.jpg'
              />
              <Card.Body>
                <Card.Title>Asaba</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {/* <Button buttonStyle='btn--outline'>Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Slider />

      <Container className='testimony text-center'>
        <h2 className='text-uppercase'>What they say about us ...</h2>
        <Row>
          <Col xs={12} md={4} className='my-3'>
            <div className='testimonial'>
              <div className='name my-2'>John Waddrob</div>
              <div className='stars'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                {/* <i className='fas fa-star'></i> */}
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                repellat aspernatur temporibus assumenda sint odio minima.
                Voluptate alias possimus aspernatur voluptates excepturi placeat
                iusto cupiditate.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4} className='my-3'>
            <div className='testimonial'>
              <div className='name my-2'>John Waddrob</div>
              <div className='stars'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                repellat aspernatur temporibus assumenda sint odio minima.
                Voluptate alias possimus aspernatur voluptates excepturi placeat
                iusto cupiditate.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4} className='my-3'>
            <div className='testimonial'>
              <div className='name my-2'>John Waddrob</div>
              <div className='stars'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                {/* <i className='fas fa-star'></i> */}
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                repellat aspernatur temporibus assumenda sint odio minima.
                Voluptate alias possimus aspernatur voluptates excepturi placeat
                iusto cupiditate.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
