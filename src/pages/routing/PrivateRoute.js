import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, admin },
  ...rest
}) => {
  if (isAuthenticated && !admin) {
    return <Redirect to='/' />;
  }

  if (!isAuthenticated) {
    return <Redirect to='/login' />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
// !isAuthenticated && !loading ? (
//   <Redirect to='/login' />
// ) : (
//   <Component {...props} />
// )
