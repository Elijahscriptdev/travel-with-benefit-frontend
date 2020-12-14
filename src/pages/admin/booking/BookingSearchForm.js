import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import axios from "axios";
import "./style.css";

const BookingSearchForm = () => {
  const [bookingInfo, setBookingInfo] = useState([]);

  // const data = JSON.parse(localStorage.getItem("user"));
  const [formData, setFormData] = useState({
    booking_ref: "",
  });
  const { booking_ref } = formData;

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleClick = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        "https://travel-backend-api.herokuapp.com/booking-history",
        { params: { booking_ref: booking_ref } },
        config
      );
      console.log(res.data);
      setBookingInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='px-3 my-3'>
      <Form className='' onSubmit={(e) => handleClick(e)}>
        <Form.Row>
          <Col className='input-form' xs={9} md={5}>
            <Form.Control
              placeholder='Search with Booking Ref'
              value={booking_ref}
              name='booking_ref'
              onChange={(e) => handleChange(e)}
            />
          </Col>
          <Col xs={4} md={3} className='text-center'>
            <button className='btn text-white btn-form'>search</button>
          </Col>
        </Form.Row>
      </Form>

      {bookingInfo.map((booking, index) => (
        <ul key={index} className='p mt-3 row display'>
          <li className='col-md-3 col-sm-6 px-2'>{booking.email}</li>
          <li className='col-md-3 col-sm-6'>{booking.first_name}</li>
          <li className='col-md-3 col-sm-6'>{booking.last_name}</li>
          <li className='col-md-3 col-sm-6'>{booking.booking_ref}</li>
          <li className='col-md-3 col-sm-6'>{booking.departure}</li>
          <li className='col-md-3 col-sm-6'>{booking.destination}</li>
          <li className='col-md-3 col-sm-6'>{booking.bus_type}</li>
          <li className='col-md-3 col-sm-6'>{booking.bus_company}</li>
          <li className='col-md-3 col-sm-6'>{booking.travel_date}</li>
          <li className='col-md-3 col-sm-6'>{booking.travel_time}</li>
          <li className='col-md-3 col-sm-6'>{booking.total_price}</li>
          <li className='col-md-3 col-sm-6'>{booking.seats}</li>
        </ul>
      ))}
    </div>
  );
};

export default BookingSearchForm;
