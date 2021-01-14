import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Col, Form } from "react-bootstrap";
import "./HeroSection.css";

const HeroSection = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    departure: "",
    destination: "",
    travel_date: "",
  });

  const { departure, destination, travel_date } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        "https://travel-backend-api.herokuapp.com/travel-information/search",
        {
          params: {
            departure: departure,
            destination: destination,
            travel_date: travel_date,
          },
        },
        config
      );
      localStorage.setItem("travel-info", JSON.stringify(res.data));
      history.push("/bus/listings");
      console.log("message", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='hero-container'>
      <div className='hero-highlight'>
        <div className='hero-caption'>
          <hr className='line' />
          <h5 className='hero-title'>TRAVEL WITH BENEFITS</h5>
        </div>
        <div className='hero-captain-two'>
          <h1>
            Travel Smart And Get <br /> Awesome Benefits
          </h1>
        </div>
      </div>

      <div className='hero-form'>
        <Form className='form-body' onSubmit={(e) => onSubmit(e)}>
          <p className='text-white mb-5'>Search for available buses</p>
          <Form.Row>
            <Col className='input-form' xs={12} md={3}>
              <Form.Control
                placeholder='Departure'
                value={departure}
                name='departure'
                onChange={(e) => onChange(e)}
              />
            </Col>
            <Col className='input-form' xs={12} md={3}>
              <Form.Control
                placeholder='Destination'
                value={destination}
                name='destination'
                onChange={(e) => onChange(e)}
              />
            </Col>
            <Col className='input-form' xs={12} md={3}>
              <Form.Control
                type='Date'
                placeholder='Date'
                value={travel_date}
                name='travel_date'
                onChange={(e) => onChange(e)}
              />
            </Col>
            <Col xs={12} md={3} className='hero-btn-form'>
              <button className='btn text-white btn-form'>Let's go</button>
            </Col>
          </Form.Row>
        </Form>
      </div>
    </div>
  );
};

export default HeroSection;
