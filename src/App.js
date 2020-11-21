import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/footer/Footer";
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import AboutPage from "./components/aboutpage/AboutPage";
import Booking from "./components/bookings/Booking";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' exact component={Homepage} />
          {/* <Route path='/' exact component={Home} />
          <Route path='/contact-us' component={contactUs} />
          <Route path='/post/:postId' component={Post} /> */}
          <Route path='/bookings-listings' component={Booking} />
          <Route path='/about-us' exact component={AboutPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
