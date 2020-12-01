import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Col, Form } from "react-bootstrap";
import "./Booking.css";

const BusListings = () => {
  const [info, setInfo] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("travel-info"));
    setInfo(data);
    // setFormData(data);
    // setSelected(true);
  }, []);

  const [formData, setFormData] = useState({
    departure: "",
    destination: "",
    travel_date: "",
  });

  const [selected, setSelected] = useState({
    departure: "",
    destination: "",
    travel_date: "",
    bus_type: "",
    bus_company: "",
    price: "",
    travel_time: "",
  });

  const { departure, destination, travel_date } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setSelected({
      departure: document.getElementsByClassName("1")[0].value,
      destination: document.getElementsByClassName("2")[0].value,
      travel_date: document.getElementsByClassName("3")[0].value,
      bus_type: document.getElementsByClassName("4")[0].value,
      bus_company: document.getElementsByClassName("5")[0].value,
      price: document.getElementsByClassName("6")[0].value,
      travel_time: document.getElementsByClassName("7")[0].value,
    });
    console.log(selected);
    console.log("form submitted");
    localStorage.setItem("selected", JSON.stringify(selected));
    // history.push("/");
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
      console.log(data);
      setInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='background'>
      <div className='container py'>
        <h1>UPDATE SEARCH</h1>
        <Form className='form my-3' onSubmit={(e) => handleSubmit(e)}>
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
                placeholder='Date'
                value={travel_date}
                name='travel_date'
                onChange={(e) => handleChange(e)}
              />
            </Col>
            <Col xs={12} md={3} className='text-center'>
              <button className='btn btn-secondary btn-form'>PROCEED</button>
            </Col>
          </Form.Row>
        </Form>

        <h1 className='text-bold'>RESULT OF SEARCH</h1>
        {info.map((data, index) => (
          <div className='card p-2 my-4' key={index}>
            <form className='' onSubmit={(e) => handleClick(e)}>
              <div className='box-container'>
                <div className='box m-1'>
                  <label>Departure</label>
                  <input
                    type='text'
                    className='1'
                    value={data.departure}
                    name='departure'
                    // onChange={(e) => onChange(e)}
                  />
                </div>
                <div className='box m-1'>
                  <label>Destination</label>
                  <input
                    type='text'
                    className='2'
                    value={data.destination}
                    name='destination'
                    // onChange={(e) => onChange(e)}
                  />
                </div>
                <div className='box m-1'>
                  <label>Bus</label>
                  <input
                    type='text'
                    className='3'
                    value={data.bus_type}
                    name='bus_type'
                    // onChange={(e) => onChange(e)}
                  />
                </div>
                <div className='box m-1'>
                  <label>Company</label>
                  <input
                    type='text'
                    className='4'
                    value={data.bus_company}
                    name='bus_company'
                    // onChange={(e) => onChange(e)}
                  />
                </div>
                <div className='box m-1'>
                  <label>price</label>
                  <input
                    type='text'
                    className='5'
                    value={data.price}
                    name='price'
                    // onChange={(e) => onChange(e)}
                  />
                </div>
                <div className='box m-1'>
                  <label>Date</label>
                  <input
                    type='text'
                    className='6'
                    value={data.travel_date}
                    name='travel_date'
                    // onChange={(e) => onChange(e)}
                  />
                </div>
                <div className='box m-1'>
                  <label>Time</label>
                  <input
                    type='text'
                    className='7'
                    value={data.travel_time}
                    name='travel_time'
                    // onChange={(e) => onChange(e)}
                  />
                </div>
                <div className='box m-1'>
                  <label>{data.price}</label>
                  <button
                    type='submit'
                    className='btn-list'
                    // onClick={handleClick}
                  >
                    Proceed
                  </button>
                </div>
              </div>
            </form>
          </div>
        ))}
        {/* {info.map((data, index) => (
          <div className='card p-2' key={index}>
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
                  <button
                    type='submit'
                    className='px-1 btn-list'
                    onClick={(e) => onClick(e)}
                  >
                    Proceed
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default BusListings;
