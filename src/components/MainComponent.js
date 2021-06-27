import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "../PrivateRoute";
import ScrollToTop from "./ScrollToTop";

//Pages
import Home from "./HomeComponents/HomeComponent";
import About from "./AboutUsComponents/AboutUsComponent";
import Navbar from "./HeaderComponents/NavbarComponents/NavbarComponent";
import Contact from "./ContactUsComponents/ContactComponents";
import OurMembers from "./MembersListComponent/MembersList";
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
import MyBlogs from "./ProfileComponents/MyBlogs";

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

//Event Pages
import AddEvent from "./EventsComponents/AddEventComponent/AddEventComponent";
import EditEvent from "./EventsComponents/EditEventComponent/EditEventUserCheck";
import EventsList from "./EventsComponents/EventsListComponent/EventsListComponent";
import SingleEvent from "./EventsComponents/SingleEventComponent/SingleEventComponent";

//Achievement Pages
import Achievements from "./AchievementsComponent/AchievementsComponent";
import AddAchievement from "./AchievementsComponent/AddAchievement.js/AddAchievement";
import EditAchievement from "./AchievementsComponent/EditAcievement.js/EditAchievement";

//Aptitude Test Pages
import CreateTest from "./AptitudeTestComponent/CreateTestComponent/CreateTestComponent";
import TestsList from "./AptitudeTestComponent/TestsListComponent/TestsListComponent";
import SingleTest from "./AptitudeTestComponent/SingleTestComponent/SingleTestComponent";
import Leaderboard from "./AptitudeTestComponent/LeaderboardComponent/LeaderboardComponent";
import MyTests from "./AptitudeTestComponent/MyTestsComponent/MyTestsComponent";
import AnswerKey from "./AptitudeTestComponent/AnswerKeyComponent/AnswerKeyComponent";
import EditTest from "./AptitudeTestComponent/EditTestComponent/EditTestUserCheck";



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
            {/* <Route exact path="/achievements" component={Achievements} /> */}
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
            <PrivateRoute
              exact
              path="/notifications"
              component={Notifications}
            />
            <PrivateRoute exact path="/register" component={Register} />

            {/* Admin Pages */}
            <PrivateRoute exact path="/admin" component={NewMembers} />

            {/* Blog Pages */}
            <PrivateRoute exact path="/addBlog" component={AddBlog} />
            <Route exact path="/blog" component={BlogCategories} />
            <Route exact path="/blog/:blogcategory" component={BlogList} />
            <Route
              exact
              path="/blog/:blogcategory/:blogname"
              component={Blog}
            />
            <PrivateRoute
              exact
              path="/editblog/:blogcategory/:blogname"
              component={EditBlog}
            />
            <PrivateRoute
              exact
              path="/editcategory"
              component={EditBlogCategory}
            />
            <PrivateRoute
              exact
              path="/editcategory/:id"
              component={EditCategory}
            />
            <PrivateRoute exact path="/myblogs" component={MyBlogs} />

            {/* Event Pages */}
            <Route exact path="/events" component={EventsList} />
            <Route exact path="/events/:eventname" component={SingleEvent} />
            <PrivateRoute exact path="/addevent" component={AddEvent} />
            <PrivateRoute exact path="/editevent/:eventname" component={EditEvent} />

             {/* Achievement Pages */}
             <Route exact path="/achievements" component={Achievements} />
             {/* <Route exact path="/achievement/:id" component={} /> */}
             {/* <Route exact path="/addachievement" component={AddAchievement} />
             <Route exact path="/editachievement/:id" component={EditAchievement} /> */}


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
