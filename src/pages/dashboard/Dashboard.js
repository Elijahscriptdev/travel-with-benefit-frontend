import React, { useState } from "react";
import axios from "axios";
import "./Dashboard.css";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { getProfile } from "../../redux/actions/profile";
// import profile from "../../redux/reducers/profile";

const Dashboard = () => {
  const [booking, setBooking] = useState([]);

  const data = JSON.parse(localStorage.getItem("user"));
  const [formData, setFormData] = useState({
    email: "",
  });
  // const { email } = formData;

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
        "https://travel-backend-api.herokuapp.com/booking-info",
        { params: { email: data.email } },
        config
      );
      console.log(res.data);
      setBooking(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='contain'>
      <h1 className='text-right'>Welcome {data.first_name}!!!!</h1>
      
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='hidden'
            // type='email'
            value={data.email}
            placeholder='Email Address'
            name='email'
            onChange={(e) => onChange(e)}
          />
        </div>
        <input
          type='submit'
          className='btn btn-primary'
          value='Get Booking History'
        />
      </form>

      <div className='dash-info'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Email</th>
              <th scope='col'>First Name</th>
              <th scope='col'>Last Name</th>
              <th scope='col'>Booking Ref</th>
              <th scope='col'>Departure</th>
              <th scope='col'>Destination</th>
              <th scope='col'>Bus</th>
              <th scope='col'>Company</th>
              <th scope='col'>Traval Date</th>
              <th scope='col'>Travel Time</th>
              <th scope='col'>Price</th>
              <th scope='col'>Seats</th>
            </tr>
          </thead>
          <tbody>
            {booking.length > 0 ? (
              booking.map((bookings, index) => (
                <tr key={index}>
                  <td data-label='email'>{bookings.email}</td>
                  <td data-label='first name'>{bookings.first_name}</td>
                  <td data-label='last name'>{bookings.last_name}</td>
                  <td data-label='booking ref'>{bookings.booking_ref}</td>
                  <td data-label='Account'>{bookings.departure}</td>
                  <td data-label='Account'>{bookings.destination}</td>
                  <td data-label='Account'>{bookings.bus_type}</td>
                  <td data-label='bus company'>{bookings.bus_company}</td>
                  <td data-label='Account'>{bookings.travel_date}</td>
                  <td data-label='Account'>{bookings.travel_time}</td>
                  <td data-label='price'>{bookings.total_price}</td>
                  <td data-label='Account'>{bookings.seats}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2}>No Booking</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// // import PropTypes from "prop-types";
// // import { connect } from "react-redux";
// // import { getProfile } from "../../redux/actions/profile";
// // import profile from "../../redux/reducers/profile";

// const Dashboard = () => {
//   const [booking, setBooking] = useState([]);
//   const [userEmail, setUserEmail] = useState("");
//   const [formData, setFormData] = useState({
//     email: "",
//   });
//   // const { email } = formData;

//   const onChange = (e) =>
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("user"));
//     setUserEmail(data.email)
//     console.log(data.email)
//   }, [])

//   useEffect(() => {
//     const onSubmit = async (e) => {
//       // e.preventDefault();
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       try {
//         const res = await axios.get(
//           "http://localhost:3000/booking-history",
//           { params: { email: userEmail } },
//           config
//         );
//         console.log("message", res.data);
//         setBooking(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     onSubmit();
//   }, [userEmail])

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <form className='form'>
//         <div className='form-group'>
//           <input
//             type='email'
//             value={userEmail}
//             placeholder='Email Address'
//             name='email'
//             onChange={(e) => onChange(e)}
//           />
//         </div>
//         <input
//           type='submit'
//           className='btn btn-primary'
//           value='Get Booking History'
//         />
//       </form>

//       <div>
//         {userEmail ? booking.map((booking, index) => (
//           <p key={index}>{booking.email}</p>
//         ) ): <p>loading</p>}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
