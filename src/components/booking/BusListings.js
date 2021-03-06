import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Booking.css";
import RenderForm from "./RenderForm";
import { Col, Container, Jumbotron, Form } from "react-bootstrap";

const BusListings = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("travel-info"));
    setInfo(data);
  }, []);

  const [formData, setFormData] = useState({
    departure: "",
    destination: "",
    travel_date: "",
  });

  const { departure, destination, travel_date } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
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
      const data = JSON.parse(localStorage.getItem("travel-info"));
      console.log(data);
      setInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='background pt-1'>
      <Jumbotron fluid className='jumbotron text-white'>
        <Container className='text-center mt-5'>
          <h3>
            View all search result
          </h3>
        </Container>
      </Jumbotron>
      <div className='container update'>
        <h1 className='text-center my'>UPDATE SEARCH</h1>
        <Form className='form mb-5' onSubmit={(e) => handleSubmit(e)}>
          <p className=''>Search for available buses</p>
          <Form.Row>
            <Col className='input-form' xs={12} md={3}>
              <Form.Control
                placeholder='From'
                value={departure}
                name='departure'
                onChange={(e) => handleChange(e)}
              />
            </Col>
            <Col className='input-form' xs={12} md={3}>
              <Form.Control
                placeholder='To'
                value={destination}
                name='destination'
                onChange={(e) => handleChange(e)}
              />
            </Col>
            <Col className='input-form' xs={12} md={3}>
              <Form.Control
                type='Date'
                placeholder='Date'
                value={travel_date}
                name='travel_date'
                onChange={(e) => handleChange(e)}
              />
            </Col>
            <Col xs={12} md={3} className='text-center'>
              <button className='btn-proceed text-white'>PROCEED</button>
            </Col>
          </Form.Row>
        </Form>

        <h1 className='text-bold'>RESULT OF SEARCH</h1>
        {info && info.map((data, index) => (
          <RenderForm data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BusListings;
