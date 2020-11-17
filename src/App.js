import React from "react";
import { BrowserRouter as  Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Homepage />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
