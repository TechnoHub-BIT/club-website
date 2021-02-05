import React, { Component } from "react";
import Home from "./HomeComponents/HomeComponent";
import About from "./AboutUsComponents/AboutUsComponent";
import EventPage from './EventsComponents/EventsComponent';
import Navbar from './HeaderComponents/NavbarComponents/NavbarComponent'
import Contact from "./ContactUsComponents/ContactComponents";
import Footer from "./FooterComponents/FooterComponent";
import SignUpComponent from './SignUpComponents/SignUpComponent'
import Login from './LogInComponents/LogInComponent';
import Profile from './ProfileComponents/ProfileComponent';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {AuthProvider} from '../contexts/AuthContext';
import PrivateRoute from "../PrivateRoute";
import ForgotPassword from './LogInComponents/ForgotPasswordComponent';
import Achievements from "./AchievementsComponent/AchievementsComponent";
import Gallery from "./GalleryComponent/GalleryComponent";
import Settings from "./ProfileComponents/SettingsComponent";
import Register from "./ProfileComponents/RegisterComponent";
import EditProfile from "./ProfileComponents/EditComponent";
import OurMembers from "./MembersListComponent/MembersList";
import Projects from "./ProjectsComponent/ProjectsComponent";
import Admin from "./AdminComponents/AdminComponent";
import ScrollToTop from './ScrollToTop';
import AddBlog from "./AddBlogComponent/AddBlogComponent";
import EditBlog from "./BlogComponent/EditBlogComponent/EditBlogComponent";
import EditBlogCategory from "./BlogComponent/EditCategoryComponent/EditCategoryComponent"
import EditCategory from "./BlogComponent/EditCategoryComponent/EditCategory"
import Blog from "./BlogComponent/BlogComponent";
import Collaborations from "./CollaborationsComponent/CollaborationsComponent";
import BlogCategories from "./BlogComponent/CategoriesComponent/CategoriesComponent";
import BlogList from "./BlogComponent/BlogListComponent/BlogListComponent";

//Events Pages
import Hackathon2020 from "./EventsComponents/EventPagesComponent/HackathonComponent/HackathonComponent";
import Hult2021 from "./EventsComponents/EventPagesComponent/HackathonComponent/HackathonComponent";
import EVbySurajSD from "./EventsComponents/EventPagesComponent/HackathonComponent/HackathonComponent";
import EagleCAD from "./EventsComponents/EventPagesComponent/HackathonComponent/HackathonComponent";
import PositionYourself from "./EventsComponents/EventPagesComponent/HackathonComponent/HackathonComponent";
import Hult2020 from "./EventsComponents/EventPagesComponent/HackathonComponent/HackathonComponent";
import RoboticsWorkshop from "./EventsComponents/EventPagesComponent/HackathonComponent/HackathonComponent";
import HeadstartFriday from "./EventsComponents/EventPagesComponent/HackathonComponent/HackathonComponent";
import ArmedForces from "./EventsComponents/EventPagesComponent/ArmedForceComponent/ArmedForceComponent";
import TechExpo2019 from "./EventsComponents/EventPagesComponent/Tech-ExpoComponent/Tech-ExpoComponent";
import Tedxbitd from "./EventsComponents/EventPagesComponent/TEDxBITDComponent/TEDxBITDComponent";

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
              <Route exact path="/achievements" component={Achievements} />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/projects" component={Projects} />
              <PrivateRoute exact path ="/addBlog" component={AddBlog} />
              <Route exact path="/blogpost" component={Blog} />
              <Route exact path="/collabs" component={Collaborations} />
              <Route exact path="/blog" component={BlogCategories} />
              <Route exact path="/bloglist" component={BlogList} />
              
              <PrivateRoute exact path="/editblog" component={EditBlog} /> 
              <PrivateRoute exact path="/editblogcategory" component={EditBlogCategory} />
              <PrivateRoute exact path="/editcategory/:id" component={EditCategory} />

              {/* Event Pages */}
              <Route exact path="/hackathon2020" component={Hackathon2020} />
              <Route exact path="/hult2021" component={TechExpo2019} />
              <Route exact path="/evbysurajsd" component={TechExpo2019} />
              <Route exact path="/autocad" component={TechExpo2019} />
              <Route exact path="/positionyourself" component={TechExpo2019} />
              <Route exact path="/hut2020" component={TechExpo2019} />
              <Route exact path="/roboticsworkshop" component={TechExpo2019} />
              <Route exact path="/headstartfriday" component={TechExpo2019} />
              <Route exact path="/armedforces" component={ArmedForces} />
              <Route exact path="/techexpo2019" component={TechExpo2019} />
              <Route exact path="/tedxbitd" component={Tedxbitd} />

              <Footer />
              {/* </Switch> */}
            </AuthProvider>
        </Router>
      </React.Fragment>
    );
  }
}

export default Main;