import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AboutPage.css";

function AboutPage() {
  return (
    <>
      <Jumbotron fluid className='jumbotron text-white'>
        <Container className='text-center mt-5'>
          <h3>
            <Link to='/' className='text-white'>
              Home/
            </Link>
            About us
          </h3>
        </Container>
      </Jumbotron>

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
          <p>
              Our social service has created avenues for both the poor, the
              average and rich Nigerians to have access to medical care, pay
              bills with ease whenever the need arises through our social retail
              service providers.
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

      <section className='container partners'>
        <div className='partners-title'>
          <h1>Our Partners</h1>
        </div>

        <div className='partners-container'>
          <div className='partner'>
            <img
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1610232364/Vector_t5hghd.png'
              alt='img'
            />
          </div>
          <div className='partner-three'>
            <img
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1610232364/Vector_1_xrsjeu.png'
              alt='img'
            />
          </div>
          <div className='partner-two'>
            <img
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1610232364/svgg_1_lcujgm.png'
              alt='img'
            />
          </div>
          <div className='partner-one'>
            <img
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1610232364/svgg_d6n4hm.png'
              alt='img'
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
