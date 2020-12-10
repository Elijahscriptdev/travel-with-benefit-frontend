import React from "react";
import RenderButton from "./RenderButton";
import "./style.css";

const BookingsTable = ({ data }) => {

  // const handleClick = (e) => {
  //   console.log("working");
  // }
  
  return (
  <table className='table'>
    <thead>
      <tr>
        <th scope='col'>Email</th>
        <th scope='col'>First Name</th>
        <th scope='col'>Last Name</th>
        <th scope='col'>Booking Ref</th>
        {/* <th scope="col">Departure</th>
          <th scope="col">Destination</th> */}
        {/* <th scope="col">Bus</th> */}
        <th scope='col'>Company</th>
        {/* <th scope="col">Traval Date</th>
          <th scope="col">Travel Time</th> */}
        <th scope='col'>Price</th>
        {/* <th scope="col">Seats</th> */}
        <th scope='col'>View</th>
      </tr>
    </thead>
    <tbody>
      {data.length > 0 ? (
        data.map((bookings) => (
          <tr key={bookings.id}>
            <td data-label='Account'>{bookings.email}</td>
            <td scope='row' data-label='Account'>
              {bookings.first_name}
            </td>
            <td data-label='Account'>{bookings.last_name}</td>
            <td data-label='Account'>{bookings.booking_ref}</td>
            {/* <td data-label="Account">{bookings.departure}</td>
              <td data-label="Account">{bookings.destination}</td> */}
            {/* <td data-label="Account">{bookings.bus_type}</td> */}
            <td data-label='Account'>{bookings.bus_company}</td>
            {/* <td data-label="Account">{bookings.travel_date}</td>
              <td data-label="Account">{bookings.travel_time}</td> */}
            <td data-label='Account'>{bookings.total_price}</td>
            {/* <td data-label="Account">{bookings.seats}</td> */}
            <td>
              <RenderButton bookings={bookings} />
              {/* <button
                  className='button muted-button'
                  // onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button> */}
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Booking</td>
        </tr>
      )}
    </tbody>
  </table>
)};

export default BookingsTable;
