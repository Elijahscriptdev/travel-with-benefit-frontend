import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Form } from "react-bootstrap";
import "./Booking.css";

const BusListings = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("travel-info"));
    setInfo(data);
    console.log(data);
  }, []);

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
        "http://localhost:3000/travel-information/search",
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
      setInfo(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='background'>
      <div className='container py'>
        <Form className='form my-5' onSubmit={(e) => onSubmit(e)}>
          <p className=''>Search for available buses</p>
          <Form.Row>
            <Col className='input-form' xs={12} md={3}>
              <Form.Control
                placeholder='From'
                value={departure}
                name='departure'
                onChange={(e) => onChange(e)}
              />
            </Col>
            <Col className='input-form' xs={12} md={3}>
              <Form.Control
                placeholder='To'
                value={destination}
                name='destination'
                onChange={(e) => onChange(e)}
              />
            </Col>
            <Col className='input-form' xs={12} md={3}>
              <Form.Control
                placeholder='Date'
                value={travel_date}
                name='travel_date'
                onChange={(e) => onChange(e)}
              />
            </Col>
            <Col xs={12} md={3} className='text-center'>
              <button className='btn btn-secondary btn-form'>PROCEED</button>
            </Col>
          </Form.Row>
        </Form>
        <h1 className='text-bold'>RESULT OF SEARCH</h1>
        {info.map((data) => (
          <div className='card p-2'>
            <div className='box-container'>
              <ul className='m-1 box text-'>
                <li className='title my-2'>Departure</li>
                <li className='title1'>{data.departure}</li>
              </ul>
              <ul className='m-1 box text-'>
                <li className='title my-2'>Destination</li>
                <li className='title1'>{data.destination}</li>
              </ul>
              <ul className='m-1 box text-'>
                <li className='title my-2'>Bus</li>
                <li className='title1'>{data.bus_type}</li>
              </ul>
              <ul className='m-1 box text-'>
                <li className='title my-2'>Company</li>
                <li className='title1'>{data.bus_company}</li>
              </ul>
              <ul className='m-1 box text-'>
                <li className='title my-2'>price</li>
                <li className='title1'>{data.price}</li>
              </ul>
              <ul className='m-1 box text-'>
                <li className='title my-2'>Date</li>
                <li className='title1'>{data.travel_date}</li>
              </ul>
              <ul className='m-1 box text-'>
                <li className='title my-2'>Time</li>
                <li className='title1'>{data.travel_time}</li>
              </ul>
              <ul className='m-1 box text-'>
                <li className='title my-2'>{data.price}</li>
                <li>
                  <button type='submit' className='px-1 btn-list'>
                    Proceed
                  </button>
                </li>
              </ul>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default BusListings;
