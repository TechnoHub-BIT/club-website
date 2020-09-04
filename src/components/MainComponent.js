import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutUsComponent';
import Header from './HeaderComponent';
import Contact from './ContactComponents';
import Footer from './FooterComponent';
import Register from "./RegisterComponents";
import { Switch, Route, Redirect } from 'react-router-dom';
import Members from './MembersComponent';
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
      <div>
        <Header />
              <Switch location={this.props.location}>
                  <Route path='/home' component={HomePage} />
                  <Route path='/register' component={Register} />
                  <Route exact path='/forum' component={() => <Forum />} />
                  <Route exact path="/members" component={Members} />
                  <Route exact path='/aboutus' component={AboutPage} />
                  <Route exact path='/contactus' component={() => <Contact />} />
                  <Redirect to="/home" />
              </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;