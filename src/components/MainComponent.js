import React, { Component } from "react";
import Home from "./HomeComponent";
import About from "./AboutUsComponent";
import Header from "./HeaderComponent";
import Contact from "./ContactComponents";
import Footer from "./FooterComponent";
import Register from "./RegisterComponents";
import Profile from "./ProfileComponent";
import { AuthProvider } from "../Auth";
// import PrivateRoute from "../PrivateRoute";
import Admin from "./AdminComponent/AdminComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postFeedback, loginUser, logoutUser, googleLogin } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import Members from './MembersComponent';
import Forum from './ForumComponent';

const mapStateToProps = state => {
    return {
      auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => ({
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  postFeedback: (feedback) => dispatch(postFeedback(feedback)),
  googleLogin: () => dispatch(googleLogin())
});

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
          <Switch location={this.props.location}>
            <Route path="/home" component={HomePage} />
            <Route path="/register" component={Register} />
            <Route exact path="/members" component={Members} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/aboutus" component={AboutPage} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/contactus" component={() => <Contact />} />
            <Redirect to="/home" />
          </Switch>
          <Footer />
        </React.Fragment>
      //  </AuthProvider>
//       <div>
//         <Header />
//               <Switch location={this.props.location}>
//                   <Route path='/home' component={HomePage} />
//                   <Route path='/register' component={() => <Register auth={this.props.auth} 
//           loginUser={this.props.loginUser} 
//           logoutUser={this.props.logoutUser}
//           googleLogin={this.props.googleLogin} />} />
//                   <Route exact path='/forum' component={() => <Forum />} />
//                   <Route exact path="/members" component={Members} />
//                   <Route exact path='/aboutus' component={AboutPage} />
//                   <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
//                   <Redirect to="/home" />
//               </Switch>
//         <Footer />
//       </div>
    );
  }
}

export default Main;
