import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/footer/Footer";
import Homepage from "./pages/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import AboutPage from "./pages/aboutpage/AboutPage";
import Contact from "./components/contact/Contact";
import BookingInfo from "./components/booking/BookingInfo";
import BusListings from "./components/booking/BusListings";
import Terms from "./components/terms/Terms";
import Destinations from "./components/booking/Destinations";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' exact component={Homepage} />
          {/* <Route path='/' exact component={Home} />
          <Route path='/post/:postId' component={Post} /> */}
          {/* <Route path='/booking/lstin' component={Contact} /> */}
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route path='/contact-us' component={Contact} />
          <Route path='/booking-info' component={BookingInfo} />
          <Route path='/bus/listings' component={BusListings} />
          <Route path='/about-us' exact component={AboutPage} />
          <Route path='/terms-and-conditions' exact component={Terms} />
          <Route path='/all-destinations' exact component={Destinations} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
