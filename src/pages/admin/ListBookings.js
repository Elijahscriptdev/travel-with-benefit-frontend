import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import axios from "axios";
import BookingsTable from "./BookingsTable";

const ListBookings = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     // const body = JSON.stringify({ email, password });
  //     try {
  //       const res = await axios.get(
  //         "https://travel-backend-api.herokuapp.com/booking-history",
  //         { params: { email: email } },
  //         config
  //       );
  //       console.log(res.data);
  //     //   setBooking(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const [data, setData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    try {
      const res = await axios.get(
        "https://travel-backend-api.herokuapp.com/bookings",
      );
      localStorage.setItem("all-bookings", JSON.stringify(res.data));
      const data = JSON.parse(localStorage.getItem("all-bookings"));
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='containe p-3'>
      <h1>View all bookings made</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          <h2>Search with email</h2>
          <Form className='' onSubmit={(e) => handleSubmit(e)}>
            <Form.Row>
              <Col className='input-form' xs={9} md={5}>
                <Form.Control
                  placeholder='email'
                  value={email}
                  name='email'
                  onChange={(e) => handleChange(e)}
                />
              </Col>
              <Col xs={4} md={3} className='text-center'>
                <button className='btn btn-secondary btn-form'>Search</button>
              </Col>
            </Form.Row>
          </Form>
        </div>
        <div className='flex-large'>
          <h2>All Bookings</h2>
          <BookingsTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default ListBookings;
