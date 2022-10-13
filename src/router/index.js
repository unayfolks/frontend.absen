import React from "react";
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
import Home from "../Views/Home";
import About from "../Views/About";
import Navbar from "../componenents/Navbar";
import Register from "../Views/auth/Register";
import Login from "../Views/auth/Login";

function Router() {
  return (
    <Routes>
      <Navbar />
      <div className="mt-4">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Routes>
  );
}

export default Router;
