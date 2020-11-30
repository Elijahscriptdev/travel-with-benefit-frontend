import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Col, Form } from "react-bootstrap";
import "./Booking.css";

const BusListings = () => {
  const [info, setInfo] = useState([]);
  // const [selected, setSelected] = useState({
  //   departure: "",
  //   destination: "",
  //   travel_date: "",
  //   bus_type: "",
  //   bus_company: "",
  //   price: "",
  //   travel_time: "",
  // });
  const history = useHistory();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("travel-info"));
    setInfo(data);
    console.log(data);
  }, []);

  const [formData, setFormData] = useState({
    departure: "",
    destination: "",
    travel_date: "",
    bus_type: "",
    bus_company: "",
    price: "",
    travel_time: "",
  });

  const { departure, destination, travel_date, bus_type, bus_company, price, travel_time } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onClick = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log("form submitted");
    // localStorage.setItem("travel-info", JSON.stringify(res.data));
    // history.push("/");
  };

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
      console.log(data)
      setInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='background'>
      <div className='container py'>
        <h1>UPDATE SEARCH</h1>
        <Form className='form my-3' onSubmit={(e) => onSubmit(e)}>
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
        {info.map((data, index) => (
        <div className='card p-2 my-4'>
          <form className=''>
            <div className='box-container'>
              <div className='box m-1'>
                <label>Departure</label>
                <input
                  type='text'
                  className='form-'
                  value={data.departure}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='box m-1'>
                <label>Destination</label>
                <input
                  type='text'
                  className='form-'
                  value={data.destination}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='box m-1'>
                <label>Bus</label>
                <input
                  type='text'
                  className='form-'
                  value={data.bus_type}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='box m-1'>
                <label>Company</label>
                <input
                  type='text'
                  className='form-'
                  value={data.bus_company}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='box m-1'>
                <label>price</label>
                <input
                  type='text'
                  className='form-'
                  value={data.price}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='box m-1'>
                <label>Date</label>
                <input
                  type='text'
                  className='form-'
                  value={data.travel_date}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='box m-1'>
                <label>Time</label>
                <input
                  type='text'
                  className='form-'
                  value={data.travel_time}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='box m-1'>
                <label>{data.price}</label>
                <button
                  type='button'
                  className='btn-list'
                  onClick={(e) => onClick(e)}
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
