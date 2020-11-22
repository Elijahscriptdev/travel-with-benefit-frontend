import React from "react";
import { Col, Form } from "react-bootstrap";
import { Button } from "../button/Button";
import "./HeroSection.css";
function HeroSection() {
  return (
    <div className='hero-container'>
      <Form className='form'>
        <p className=''>Search for available buses</p>
        <Form.Row>
          <Col className="input-form" xs={12} md={3}>
            <Form.Control placeholder='From' />
          </Col>
          <Col className="input-form" xs={12} md={3}>
            <Form.Control placeholder='To' />
          </Col>
          <Col className="input-form" xs={12} md={3}>
            <Form.Control placeholder='Date' />
          </Col>
          <Col xs={12} md={3} className='text-center'>
            <button className='btn btn-secondary btn-form'>PROCEED</button>
          </Col>
        </Form.Row>
      </Form>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      {/* <h1>ADVENTURE AWAITS</h1> */}
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          BOOK NOW
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log("hey")}
        >
          CONTACT US <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
