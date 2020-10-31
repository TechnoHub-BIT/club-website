import React, { Component } from "react";
import Home from "./HomeComponents/HomeComponent";
import About from "./AboutUsComponents/AboutUsComponent";
import EventPage from './EventsComponents/EventsComponent';
import HackathonPage from './EventsComponents/EventHackathonComponents';
import Navbar from './HeaderComponents/NavbarComponents/NavbarComponent'
import Contact from "./ContactUsComponents/ContactComponents";
import Footer from "./FooterComponents/FooterComponent";
import SignUpComponent from './SignUpComponents/SignUpComponent'
import Login from './LogInComponents/LogInComponent';
import Profile from './ProfileComponents/ProfileComponent';
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {AuthProvider} from '../contexts/AuthContext';
import PrivateRoute from "../PrivateRoute";
import ForgotPassword from './LogInComponents/ForgotPasswordComponent';
import Achievements from "./AchievementsComponent/AchievementsComponent";
import gallery from "./Gallery/gallery";

class Main extends Component {
  render() {

    return (
      <React.Fragment>
        <Router>
          <AuthProvider>
            {/* <Switch> */}
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutus" component={About} />
            <Route exact path="/contactus" component={Contact} />
            <Route exact path="/events" component={EventPage} />
            <Route exact path="/signup" component={SignUpComponent}/>
            <PrivateRoute exact path="/profile" component={Profile}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/forgot-password" component={ForgotPassword}/>
            <Route exact path="/hackathon2020" component={HackathonPage} />
            <Route exact path="/achievements" component={Achievements} />
            <Route exact path="/gallery" component={gallery} />
            <Footer />
            {/* </Switch> */}
          </AuthProvider>
        </Router>
      </React.Fragment>
    );
  }
}

export default Main;