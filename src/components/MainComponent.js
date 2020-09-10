import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutUsComponent';
import Header from './HeaderComponent';
import Contact from './ContactComponents';
import Footer from './FooterComponent';
import Register from "./RegisterComponents";
import { Switch, Route, Redirect } from 'react-router-dom';
import Members from './MembersComponent';
import ProfileCompletion from './ProfileCompletionComponents';
import { AuthProvider } from '../Auth';
import PrivateRoute from '../PrivateRoute';
import Forum from './ForumComponent';
class Main extends Component {

  render() {
    const HomePage = () => {
      return(
        <Home />
      );
    }

    const AboutPage = () => {
      return(
        <About />
      );
    };

    return (
      <AuthProvider>
      <React.Fragment>
        <Header />
              <Switch location={this.props.location}>
                  <Route path='/home' component={HomePage} />
                  <Route path='/register' component={Register} />
                  <PrivateRoute exact path="/members" component={Members} />
                  <Route exact path="/profileCompletion" component={ProfileCompletion}/>
                  <Route exact path='/aboutus' component={AboutPage} />
                  <PrivateRoute exact path='/forum' component={() => <Forum />} />
                  <Route exact path='/contactus' component={() => <Contact />} />
                  <Redirect to="/home" />
              </Switch>
        <Footer />
      </React.Fragment>
      </AuthProvider>
    );
  }
}

export default Main;