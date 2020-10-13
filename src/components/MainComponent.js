import React, { Component } from "react";
import Home from "./HomeComponents/HomeComponent";
import About from "./AboutUsComponents/AboutUsComponent";
import Header from "./HeaderComponents/HeaderComponent";
import Contact from "./ContactUsComponents/ContactComponents";
import Footer from "./FooterComponents/FooterComponent";
import {  Route, Redirect } from "react-router-dom";

class Main extends Component {
  render() {

    return (
      <React.Fragment>
        <Header />
        <Route path="/home" component={Home} />
        <Route exact path="/aboutus" component={About} />
        <Route exact path="/contactus" component={Contact} />
        <Redirect to="/home" />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;