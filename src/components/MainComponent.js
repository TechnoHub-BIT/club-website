import React, { Component } from "react";
import Home from "./HomeComponents/HomeComponent";
import About from "./AboutUsComponents/AboutUsComponent";
import EventPage from './EventsComponents/EventsComponent';
import Navbar from './HeaderComponents/NavbarComponents/NavbarComponent'
import Contact from "./ContactUsComponents/ContactComponents";
import Footer from "./FooterComponents/FooterComponent";
import {  Route, Redirect } from "react-router-dom";

class Main extends Component {
  render() {

    return (
      <React.Fragment>
        <Navbar />
        <Route path="/home" component={Home} />
        <Route exact path="/aboutus" component={About} />
        <Route exact path="/contactus" component={Contact} />
        <Route export path="/events" component={EventPage} />
        <Redirect to="/home" />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;