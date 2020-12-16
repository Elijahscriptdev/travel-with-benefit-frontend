import React, { useState } from "react";
import axios from "axios";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { getProfile } from "../../redux/actions/profile";
// import profile from "../../redux/reducers/profile";
import "./Dashboard.css";

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
        "https://travel-backend-api.herokuapp.com/booking-history",
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
    <div className='dash-info p-5'>
      <h1 className='text-right'>Welcome {data.first_name}!!!</h1>
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

      <div>
        <table className='table'>
          <thead>
            <tr>
              {/* <th scope='col'>Email</th> */}
              <th scope='col' colSpan={2}>
                First Name
              </th>
              <th scope='col' colSpan={2}>
                Last Name
              </th>
              <th scope='col' colSpan={2}>
                Booking Ref
              </th>
              <th scope='col' colSpan={2}>
                Departure
              </th>
              <th scope='col' colSpan={2}>
                Destination
              </th>
              <th scope='col' colSpan={2}>
                Bus
              </th>
              <th scope='col' colSpan={2}>
                Company
              </th>
              <th scope='col' colSpan={2}>
                Traval Date
              </th>
              <th scope='col' colSpan={2}>
                Travel Time
              </th>
              <th scope='col' colSpan={2}>
                Price
              </th>
              <th scope='col' colSpan={2}>
                Seats
              </th>
            </tr>
          </thead>
          <tbody>
            {booking.length > 0 ? (
              booking.map(
                booking(
                  <tr key={booking.id}>
                    {/* <td data-label='email'>{booking.email}</td> */}
                    <td data-label='first name' colSpan={2}>
                      {booking.first_name}
                    </td>
                    <td data-label='last name' colSpan={2}>
                      {booking.last_name}
                    </td>
                    <td data-label='booking ref' colSpan={2}>
                      {booking.booking_ref}
                    </td>
                    <td data-label='departure' colSpan={2}>
                      {booking.departure}
                    </td>
                    <td data-label='destination' colSpan={2}>
                      {booking.destination}
                    </td>
                    <td data-label='bus_type' colSpan={2}>
                      {booking.bus_type}
                    </td>
                    <td data-label='bus company' colSpan={2}>
                      {booking.bus_company}
                    </td>
                    <td data-label='travel date' colSpan={2}>
                      {booking.travel_date}
                    </td>
                    <td data-label='travel time' colSpan={2}>
                      {booking.travel_time}
                    </td>
                    <td data-label='price' colSpan={2}>
                      {booking.total_price}
                    </td>
                    <td data-label='seat' colSpan={2}>
                      {booking.seats}
                    </td>
                  </tr>
                )
              )
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
