import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const BookingInfo = () => {
  const data = JSON.parse(localStorage.getItem("info"));
  const history = useHistory();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    departure: data.departure,
    destination: data.destination,
    bus_type: data.bus_type,
    bus_company: data.bus_company,
    travel_date: data.travel_date,
    travel_time: data.travel_time,
    price: data.price,
    seats: 1,
    total_price: data.price,
  });

  const {
    first_name,
    last_name,
    email,
    departure,
    destination,
    bus_type,
    bus_company,
    travel_date,
    travel_time,
    price,
    seats,
    total_price = seats * price + 1500,
  } = formData;

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

    const body = JSON.stringify({
      first_name,
      last_name,
      email,
      departure,
      destination,
      bus_type,
      bus_company,
      travel_date,
      travel_time,
      price,
      total_price: seats * price + 1500,
      seats,
    });

    try {
      const res = await axios.post(
        "https://travel-backend-api.herokuapp.com/book-ticket",
        body,
        config
      );
      console.log(res);
      localStorage.setItem("booking", JSON.stringify(res.data));
      history.push("/confirm-your-bookings");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      
      <div className='booking-info'>
      <Jumbotron fluid className='jumbotron text-white pt-5'>
        <Container className='text-center'>
          <h3>
          Confirm Your Booking
          </h3>
        </Container>
      </Jumbotron>
        <div className='texts'>
          <Toast>
            <ToastHeader className=''>
              Additional #1500 fee
            </ToastHeader>
          </Toast>
        </div>
        <div className='container'>

          <form className='form-new' onSubmit={(e) => onSubmit(e)}>
            <div className='form-row'>
              <div className='form-group col-md-4'>
                <label>First Name</label>
                <input
                  type='text'
                  className='form-control'
                  value={first_name}
                  name='first_name'
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div className='form-group col-md-4'>
                <label>Last Name</label>
                <input
                  type='text'
                  className='form-control'
                  value={last_name}
                  name='last_name'
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div className='form-group col-md-4'>
                <label>Email</label>
                <input
                  type='email'
                  className='form-control'
                  value={email}
                  name='email'
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-4'>
                <label>Departure</label>
                <input
                  type='text'
                  className='form-control'
                  value={data.departure}
                  name='departure'
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='form-group col-md-4'>
                <label>Destination</label>
                <input
                  type='text'
                  className='form-control'
                  value={data.destination}
                  name='destination'
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='form-group col-md-4'>
                <label>Bus</label>
                <input
                  type='text'
                  className='form-control'
                  value={data.bus_type}
                  name='bus_type'
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-4'>
                <label>Company</label>
                <input
                  type='text'
                  className='form-control'
                  value={data.bus_company}
                  name='bus_company'
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='form-group col-md-4'>
                <label>Time</label>
                <input
                  type='text'
                  className='form-control'
                  value={data.travel_time}
                  name='travel_time'
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='form-group col-md-4'>
                <label>Date</label>
                <input
                  type='text'
                  className='form-control'
                  value={data.travel_date}
                  name='travel_date'
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-4'>
                <label>Seats</label>
                <select
                  className='form-control'
                  value={seats}
                  name='seats'
                  onChange={(e) => onChange(e)}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className='form-group col-md-4'>
                <label>Price</label>
                <input
                  type='text'
                  className='form-control'
                  value={data.price}
                  name='unit_price'
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='form-group col-md-4'>
                <label>Total Price</label>
                <input
                  type='text'
                  className='form-control'
                  value={seats * price + 1500}
                  name='total_price'
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <button type='submit' className='btn btn-primary mb-5'>
              Book Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingInfo;
