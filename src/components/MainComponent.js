import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "../PrivateRoute";
import ScrollToTop from "./ScrollToTop";

//Pages
import Home from "./HomeComponents/HomeComponent";
import About from "./AboutUsComponents/AboutUsComponent";
//import EventPage from "./EventsComponents/EventsComponent";
import Navbar from "./HeaderComponents/NavbarComponents/NavbarComponent";
import Contact from "./ContactUsComponents/ContactComponents";
import OurMembers from "./MembersListComponent/MembersList";
import Achievements from "./AchievementsComponent/AchievementsComponent";
import Projects from "./ProjectsComponent/ProjectsComponent";
import Gallery from "./GalleryComponent/GalleryComponent";
import Footer from "./FooterComponents/FooterComponent";

//Profile Pages
import Settings from "./ProfileComponents/SettingsComponent";
import Notifications from "./ProfileComponents/Notifications";
import Register from "./ProfileComponents/RegisterComponent";
import EditProfile from "./ProfileComponents/EditComponent";
import SignUpComponent from "./SignUpComponents/SignUpComponent";
import Login from "./LogInComponents/LogInComponent";
import Profile from "./ProfileComponents/ProfileComponent";
import ForgotPassword from "./LogInComponents/ForgotPasswordComponent";

//Blog Pages
import AddBlog from "./AddBlogComponent/AddBlogComponent";
import EditBlog from "./BlogComponent/EditBlogComponent/EditBlogComponent";
import EditBlogCategory from "./BlogComponent/EditCategoryComponent/EditCategoryComponent";
import EditCategory from "./BlogComponent/EditCategoryComponent/EditCategory";
import Blog from "./BlogComponent/BlogComponent";
import Collaborations from "./CollaborationsComponent/CollaborationsComponent";
import BlogCategories from "./BlogComponent/CategoriesComponent/CategoriesComponent";
import BlogList from "./BlogComponent/BlogListComponent/BlogListComponent";

//Admin Pages
import NewMembers from "./AdminComponents/NewMembersComponent/NewMembersComponent";

//Events Pages
import AddEvent from "./EventsComponents/AddEvents/AddEvents";
import EventList from "./EventsComponents/DisplayEvents/EventList"
import SingleEvent from "./EventsComponents/DisplayEvents/SingleEvent";

import Hackathon2020 from "./EventsComponents/EventPagesComponent/HackathonComponent/HackathonComponent";
import ArmedForces from "./EventsComponents/EventPagesComponent/ArmedForceComponent/ArmedForceComponent";
import TechExpo2019 from "./EventsComponents/EventPagesComponent/Tech-ExpoComponent/Tech-ExpoComponent";
import Tedxbitd from "./EventsComponents/EventPagesComponent/TEDxBITDComponent/TEDxBITDComponent";

//Aptitude Test Pages
import CreateTest from "./AptitudeTestComponent/CreateTestComponent/CreateTestComponent";
import TestsList from "./AptitudeTestComponent/TestsListComponent/TestsListComponent";
import SingleTest from "./AptitudeTestComponent/SingleTestComponent/SingleTestComponent";
import Leaderboard from "./AptitudeTestComponent/LeaderboardComponent/LeaderboardComponent";
import MyTests from "./AptitudeTestComponent/MyTestsComponent/MyTestsComponent";
import AnswerKey from "./AptitudeTestComponent/AnswerKeyComponent/AnswerKeyComponent";
import EditTest from "./AptitudeTestComponent/EditTestComponent/EditTest";



//Dark mode light mode
// import styled,{ThemeProvider} from 'styled-components'
// import {lightTheme , darkTheme , GlobalStyle}  from "./Theme";

// const StyledApp = styled.div`
// color: ${(props) => props.theme.fontColor}
// `;

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
            <Route exact path="/home" component={Home} />
            <Route exact path="/aboutus" component={About} />
            <Route exact path="/contactus" component={Contact} />
            {/* <Route exact path="/events" component={EventPage} /> */}
            <PrivateRoute exact path="/ourmembers" component={OurMembers} />
            <Route exact path="/achievements" component={Achievements} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/collabs" component={Collaborations} />

            {/* Profile Pages */}
            <Route exact path="/signup" component={SignUpComponent} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/edit" component={EditProfile} />
            <PrivateRoute exact path="/settings" component={Settings} />
            <PrivateRoute exact path="/notifications" component={Notifications} />
            <PrivateRoute exact path="/register" component={Register} />

            {/* Admin Pages */}
            <PrivateRoute exact path="/admin" component={NewMembers} />

            {/* Blog Pages */}
            <PrivateRoute exact path="/addBlog" component={AddBlog} />
            <Route exact path="/blog" component={BlogCategories} />
            <Route exact path="/blog/:blogcategory" component={BlogList} />
            {/* <Route exact path="/bloglist" component={BlogList} /> */}
            {/* <Route exact path="/blogpost" component={Blog} /> */}
            <Route exact path="/blog/:blogcategory/:blogname" component={Blog} />
            <PrivateRoute exact path="/editblog/:blogcategory/:blogname" component={EditBlog} />
            <PrivateRoute exact path="/editcategory" component={EditBlogCategory} />
            <PrivateRoute exact path="/editcategory/:id" component={EditCategory} />

            {/* Event Pages */}
            <Route exact path="/addevent" component={AddEvent} />
            <Route exact path="/events" component={EventList} />
            <Route exact path="/events/:id" component={SingleEvent} />

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

            {/* Aptitude Test Pages */}
            <PrivateRoute exact path="/test/:id" component={SingleTest} />
            <PrivateRoute exact path="/edittest/:id" component={EditTest} />
            <PrivateRoute exact path="/createtest" component={CreateTest} />
            <Route exact path="/tests" component={TestsList} />
            <Route exact path="/leaderboard/:id" component={Leaderboard} />
            <PrivateRoute exact path="/mytests" component={MyTests} />
            <PrivateRoute exact path="/answerkey/:id" component={AnswerKey} />

            <Footer />
            {/* </Switch> */}
          </AuthProvider>
        </Router>
      </React.Fragment>
    );
  }
}

export default Main;
