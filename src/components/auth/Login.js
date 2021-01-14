import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAlert } from "../../redux/actions/alert";
import { login } from "../../redux/actions/auth";
import "./auth.css";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";

const Login = ({ login, isAuthenticated, setAlert }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setAlert("Password cannot be less than 6", "danger");
    } else {
      login({ email, password });
    }
  };

  // redirect if login
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='booking-info py-3'>
      <Jumbotron fluid className='jumbotron text-white'>
        <Container className='text-center mt-5'>
          <h3>
            Sign into Your Account <i className='fas fa-user'></i>
          </h3>
        </Container>
      </Jumbotron>

      <div className='form-auth'>
        <form className='form py-5' onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='email'
              value={email}
              placeholder='eee@gmail.com'
              name='email'
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='*****************'
              value={password}
              name='password'
              onChange={(e) => onChange(e)}
              // minLength='6'
            />
          </div>
          <div className='text-center'>
            <input type='submit' className='btn btns' value='Login' />
          </div>
          <p className='mt-2'>
            Already have an account? <Link to='/register'>Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, setAlert })(Login);
