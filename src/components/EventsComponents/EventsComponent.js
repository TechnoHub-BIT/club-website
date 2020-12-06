import React, { Component } from 'react';
import {Breadcrumb, BreadcrumbItem} from "../BreadcrumbComponent/BreadcrumbComponent";
import { Link } from 'react-router-dom';
import HeadingTitle from "../HeaderComponents/HeaderTitle";
import './EventsComponent.css';

class EventsComponent extends Component {
  render() {
    return (
        <div className="events-container">
          <HeadingTitle heading="TECHNOHUB EVENTS" />
          <Breadcrumb>
              <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
              <BreadcrumbItem icon="far fa-calendar-alt" title="Events" status="active" />
          </Breadcrumb>
          <div className="container">
            <h1 className="sectionTitle">Upcoming Events</h1>
            <div className="eventsCard comingSoon">
              <div className="cardBody">
                <h2 className="cardTitle">Coming Soon</h2>
                <h5 className="cardSubtitle">Stay Tuned with Us</h5>
              </div>
            </div>
            <h1 className="sectionTitle">Past Events</h1>
            <div className="eventsCardCont">
              <Link to="/hackathon2020">
                <div className="eventsCard">
                  <div className="cardImage">
                    <img src="./assets/images/events_img/hackathonlogo.jpeg" alt="Hackathon" />
                  </div>
                  <div className="cardBody">
                    <h2 className="cardTitle">Hackathon</h2>
                    <h5 className="cardSubtitle">Oct 17 - 18 2020</h5>
                  </div>
                </div>
              </Link>
              <Link to="/hultprize2020">
                <div className="eventsCard">
                  <div className="cardImage">
                    <img src="./assets/images/events_img/HultPrize_nov2020.png" alt="Hult Prize 2021" />
                  </div>
                  <div className="cardBody">
                    <h2 className="cardTitle">Hult Prize 2021</h2>
                    <h5 className="cardSubtitle">Aug 23 - Nov 08</h5>
                  </div>
                </div>
              </Link>
              <Link to="/hultprize2020">
                <div className="eventsCard">
                  <div className="cardImage">
                    <img src="./assets/images/events_img/EV.png" alt="Hult Prize 2021" />
                  </div>
                  <div className="cardBody">
                    <h2 className="cardTitle">Electical Vehicle - By Suraj SD</h2>
                    <h5 className="cardSubtitle">Oct 04 2020</h5>
                  </div>
                </div>
              </Link>
              <Link to="/eaglecad">
                <div className="eventsCard">
                  <div className="cardImage">
                    <img src="./assets/images/events_img/EagleCAD.png" alt="Hult Prize 2021" />
                  </div>
                  <div className="cardBody">
                    <h2 className="cardTitle">EagleCAD Workshop</h2>
                    <h5 className="cardSubtitle">Sep 26 2020</h5>
                  </div>
                </div>
              </Link>
              <Link to="/hultprize2020">
                <div className="eventsCard">
                  <div className="cardImage">
                    <img src="./assets/images/events_img/HultPrize_jan2020.png" alt="Hult Prize 2021" />
                  </div>
                  <div className="cardBody">
                    <h2 className="cardTitle">Hult Prize 2020</h2>
                    <h5 className="cardSubtitle">Jan 16 - 23 2020</h5>
                  </div>
                </div>
              </Link>
              <Link to="/hultprize2020">
                <div className="eventsCard">
                  <div className="cardImage">
                    <img src="./assets/images/events_img/Robotics.png" alt="Hult Prize 2021" />
                  </div>
                  <div className="cardBody">
                    <h2 className="cardTitle">Robotics Workshop</h2>
                    <h5 className="cardSubtitle">Sep 28 - 29 2019</h5>
                  </div>
                </div>
              </Link>
              <Link to="/hultprize2020">
                <div className="eventsCard">
                  <div className="cardImage">
                    <img src="./assets/images/events_img/teche.jpeg" alt="Hult Prize 2021" />
                  </div>
                  <div className="cardBody">
                    <h2 className="cardTitle">Tech Expo @ OJAS 2019</h2>
                    <h5 className="cardSubtitle">Apr 03 2019</h5>
                  </div>
                </div>
              </Link>
            </div>
            </div>
          </div>
      );
  }
}
export default EventsComponent;
