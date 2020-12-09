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
import { BrowserRouter as Router,  Route } from "react-router-dom";
import {AuthProvider} from '../contexts/AuthContext';
import PrivateRoute from "../PrivateRoute";
import ForgotPassword from './LogInComponents/ForgotPasswordComponent';
import Achievements from "./AchievementsComponent/AchievementsComponent";
import Gallery from "./Gallery/gallery";
import Settings from "./ProfileComponents/SettingsComponent";
import Register from "./ProfileComponents/RegisterComponent";
import EditProfile from "./ProfileComponents/EditComponent";
import OurMembers from "./MembersListComponent/MembersList";
import Projects from "./ProjectsComponent/ProjectsComponent";
import Admin from "./AdminComponents/AdminComponent";
import ScrollToTop from './ScrollToTop';


class Main extends Component {
  render() {

    return (
      <React.Fragment>
        <Router>
          <AuthProvider>
              {/* <Switch> */}
              <ScrollToTop />
              <Navbar />
              <Route exact path="/" component={Home} />
              <PrivateRoute exact path="/admin" component={Admin} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/aboutus" component={About} />
              <Route exact path="/contactus" component={Contact} />
              <Route exact path="/events" component={EventPage} />
              <Route exact path="/signup" component={SignUpComponent} />
              <PrivateRoute exact path="/register" component={Register} />
              <PrivateRoute exact path="/edit" component={EditProfile} />
              <PrivateRoute exact path="/ourmembers" component={OurMembers} />
              <PrivateRoute exact path="/profile" component={Profile}/>
              <PrivateRoute exact path="/settings" component={Settings}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/forgot-password" component={ForgotPassword}/>
              <Route exact path="/hackathon2020" component={HackathonPage} />
              <Route exact path="/achievements" component={Achievements} />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/projects" component={Projects} />

              <Footer />
              {/* </Switch> */}
            </AuthProvider>
        </Router>
      </React.Fragment>
    );
  }
}

export default Main;