import React, { Component } from "react";
import Home from "./HomeComponent";
import About from "./AboutUsComponent";
import Header from "./HeaderComponent";
import Contact from "./ContactComponents";
import Footer from "./FooterComponent";
import Register from "./RegisterComponents";
import { Route, Redirect } from "react-router-dom";
import Members from "./MembersComponent";
import Profile from "./ProfileComponent";
// import { AuthProvider } from "../Auth";
// import PrivateRoute from "../PrivateRoute";
import Admin from "./AdminComponent/AdminComponent";

class Main extends Component {
  render() {
    const HomePage = () => {
      return <Home />;
    };

    const AboutPage = () => {
      return <About />;
    };

    return (
      // <AuthProvider>
      <React.Fragment>
        <Header />
        {/* <Switch location={this.props.location}> */}
        <Route path="/home" component={HomePage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/members" component={Members} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/aboutus" component={AboutPage} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/contactus" component={() => <Contact />} />
        <Redirect to="/home" />
        {/* </Switch> */}
        <Footer />
      </React.Fragment>
      //  </AuthProvider>
    );
  }
}

export default Main;
