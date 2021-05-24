import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
} from "../BreadcrumbComponent/BreadcrumbComponent";
import HeadingTitle from "../HeaderComponents/HeaderTitle";
import "./EventsComponent.css";
import SingleEvent from "./SingleEventComponent/SingleEvent";
import { Helmet } from "react-helmet";
import { Zoom } from "react-reveal";

class EventsComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <HeadingTitle heading="TECHNOHUB EVENTS" image="events.jpg" />
        <div className="events-container">
          <Helmet>
            <title>Events | TechnoHub BITD</title>
            <meta
              name="description"
              content="Shows TechnoHub's various successful events and associate programs briefly, which provide opportunities to the students and also foresee a glimpse of our upcoming events."
            />
          </Helmet>
          <Breadcrumb>
            <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
            <BreadcrumbItem
              icon="far fa-calendar-alt"
              title="Events"
              status="active"
            />
          </Breadcrumb>
          <div className="container">
            <h1 className="sectionTitle">Upcoming Events</h1>
            {/* <div className="eventsCard comingSoon">
              <div className="cardBody">
                <h2 className="cardTitle">Coming Soon</h2>
                <h5 className="cardSubtitle">Stay Tuned with Us</h5>
              </div>
            </div> */}
            <div className="eventsCardCont">
              <Zoom>
                <SingleEvent
                  to="/tedxbitd"
                  img="./assets/images/events_img/tedxbitd.jpg"
                  title="TEDxBITD"
                  subtitle="JUN 06 2021"
                />
              </Zoom>
            </div>
            <h1 className="sectionTitle">Past Events</h1>
            <div className="eventsCardCont">
              <Zoom>
                <SingleEvent
                  to="/hackathon2020"
                  img="./assets/images/events_img/hackathonlogo.jpeg"
                  title="Opportunities in Electronics Engineering, "
                  subtitle="MAy 01 2021"
                />

                <SingleEvent
                  to="/hackathon2020"
                  img="./assets/images/events_img/hackathonlogo.jpeg"
                  title="Opportunities in Civil Engineering, "
                  subtitle="APRIL 03 2021"
                />

                <SingleEvent
                  to="/hackathon2020"
                  img="./assets/images/events_img/hackathonlogo.jpeg"
                  title="How to Ace your summer internship"
                  subtitle="MAR 21 2021"
                />

                <SingleEvent
                  to="/hackathon2020"
                  img="./assets/images/events_img/hackathonlogo.jpeg"
                  title="Hackathon"
                  subtitle="OCT 17 - 18 2020"
                />

                <SingleEvent
                  to="/hult2021"
                  img="./assets/images/events_img/HultPrize_nov2020.png"
                  title="Hult Prize 2021"
                  subtitle="AUG 23 - NOV 08 2020"
                />

                <SingleEvent
                  to="/evbysurajsd"
                  img="./assets/images/events_img/EV.png"
                  title="Electrical Vehicle - By Suraj SD"
                  subtitle="OCT 04 2020"
                />

                <SingleEvent
                  to="/autocad"
                  img="./assets/images/events_img/EagleCAD.png"
                  title="EagleCAD Workshop"
                  subtitle="SEP 26 2020"
                />

                <SingleEvent
                  to="/positionyourself"
                  img="./assets/images/events_img/position_yourself.png"
                  title="How to position yourself in future.."
                  subtitle="FEB 9 2020"
                />

                <SingleEvent
                  to="/hult2020"
                  img="./assets/images/events_img/HultPrize_jan2020.png"
                  title="Hult Prize 2020"
                  subtitle="JAN 16 - 23 2020"
                />

                <SingleEvent
                  to="/roboticsworkshop"
                  img="./assets/images/events_img/Robotics.png"
                  title="Robotics Workshop"
                  subtitle="OCT 10 2019"
                />

                <SingleEvent
                  to="/headstartfriday"
                  img="./assets/images/events_img/headstart_startup_friday.png"
                  title="Headstart Startup Friday"
                  subtitle="SEP 21 2019"
                />

                <SingleEvent
                  to="/armedforces"
                  img="./assets/images/events_img/armed_forces.png"
                  title="Armed Force a Career Option"
                  subtitle="SEP 18 2019"
                />

                <SingleEvent
                  to="/techexpo2019"
                  img="./assets/images/events_img/teche.jpeg"
                  title="Tech Expo @ OJAS 2019"
                  subtitle="Apr 03 2019"
                />
              </Zoom>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EventsComponent;
