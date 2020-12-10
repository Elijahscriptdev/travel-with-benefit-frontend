import React, { useEffect, useState } from "react";
import { Col, Form } from "react-bootstrap";
import axios from "axios";
import BookingsTable from "./BookingsTable";
import BookingSearchForm from "./BookingSearchForm";

const ListBookings = () => {
  const [data, setData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        "https://travel-backend-api.herokuapp.com/bookings"
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
      <h1 className='my-5 text-center text-uppercase'>all bookings</h1>
      <div className='flex-row'>
        <div className='flex-large '>
          <BookingSearchForm />
        </div>
        <div className='flex-large mt-5'>
          <Form className='' onSubmit={(e) => handleSubmit(e)}>
            <Form.Row>
              <Col xs={4} md={3} className='text-center'>
                <button className='btn btn-secondary btn-form'>
                  View All Bookings
                </button>
              </Col>
            </Form.Row>
          </Form>
          <h2 className='mt-3'>All Bookings</h2>
          <BookingsTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default ListBookings;
