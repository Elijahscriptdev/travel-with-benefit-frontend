import { connect } from "react-redux";
import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../redux/actions/alert";
import { register } from "../../redux/actions/auth";
import PropTypes from "prop-types";
import "./auth.css";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { first_name, last_name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords dont match", "danger");
      console.log("Passwords dont match");
    } else {
      console.log(formData);
      console.log("form submitted");
      register({ first_name, last_name, email, password });
    }
    // console.log(formData);
    // console.log("form submitted");
  };

  // redirect if login
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='booking-info'>
      <Jumbotron fluid className='jumbotron text-white'>
        <Container className='text-center mt-5'>
          <h3>
            Create Your Account <i className='fas fa-user'></i>
          </h3>
        </Container>
      </Jumbotron>
      <div className='form-auth'>
        <form className='form' onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <input
              className='p'
              type='text'
              value={first_name}
              placeholder='First Name'
              name='first_name'
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              className='p'
              type='text'
              value={last_name}
              placeholder='Last Name'
              name='last_name'
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              value={email}
              placeholder='eee@gmail.com'
              name='email'
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='************'
              value={password}
              name='password'
              onChange={(e) => onChange(e)}
              minLength='6'
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='************'
              value={password2}
              name='password2'
              onChange={(e) => onChange(e)}
              minLength='6'
            />
          </div>
          <input type='submit' className='btn btns' value='Register' />
          <p className='mt-2'>
            Already have an account? <Link to='/login'>Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
