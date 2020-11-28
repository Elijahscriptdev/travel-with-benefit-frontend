import React, { useEffect, useState } from "react";
import axios from 'axios'
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { getProfile } from "../../redux/actions/profile";
// import profile from "../../redux/reducers/profile";

const Dashboard = () => {

    // useEffect(() => {
    //     getProfile()
    // }, [])

    const data = JSON.parse(localStorage.getItem('user'));


    const [formData, setFormData] = useState({
        email: "",
      });
    
      const { email } = formData;
    
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
            const res = await axios.get("http://localhost:3000/booking-history", { params: { email: data.email}}, config);
            console.log("message", res.data);
          } catch (error) {
              console.log(error)
          }
      };

  return (
    <div>
      <h1>Dashboard</h1>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            value={data.email}
            placeholder='Email Address'
            name='email'
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Get Booking History' />
      </form>
      {res.data.email}
    </div>
  );
};

export default Dashboard;