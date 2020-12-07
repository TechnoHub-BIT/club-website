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
              <Link to="#">
                <div className="eventsCard">
                  <div className="cardImage">
                    <img src="./assets/images/events_img/HultPrize_nov2020.png" alt="Hult Prize 2021" />
                  </div>
                  <div className="cardBody">
                    <h2 className="cardTitle">Hult Prize 2021</h2>
                    <h5 className="cardSubtitle">AUG 23 - NOV 08 2020</h5>
                  </div>
                </div>
              </Link>
              <Link to="#">
                <div className="eventsCard">
                  <div className="cardImage">
                    <img src="./assets/images/events_img/EV.png" alt="EV Technologies" />
                  </div>
                  <div className="cardBody">
                    <h2 className="cardTitle">Electical Vehicle - By Suraj SD</h2>
                    <h5 className="cardSubtitle">OCT 04 2020</h5>
                  </div>
                </div>
              </Link>
              <Link to="#">
                <div className="eventsCard">
                  <div className="cardImage">
                    <img src="./assets/images/events_img/EagleCAD.png" alt="EagleCAD Workshop" />
                  </div>
                  <div className="cardBody">
                    <h2 className="cardTitle">EagleCAD Workshop</h2>
                    <h5 className="cardSubtitle">SEP 26 2020</h5>
                  </div>
                </div>
              </Link>
              <Link to="#">
                <div className="eventsCard">
                  <div className="cardImage">
                    <img src="./assets/images/events_img/position_yourself.png" alt="Position Yourself" />
                  </div>
                  <div className="cardBody">
                    <h2 className="cardTitle">How to position yourself in future ..</h2>
                    <h5 className="cardSubtitle">FEB 9 2020</h5>
                  </div>
                </div>
              </Link>
              <Link to="#">
                <div className="eventsCard">
                  <div className="cardImage">
                    <img src="./assets/images/events_img/HultPrize_jan2020.png" alt="Hult Prize 2020" />
                  </div>
                  <div className="cardBody">
                    <h2 className="cardTitle">Hult Prize 2020</h2>
                    <h5 className="cardSubtitle">JAN 16 - 23 2020</h5>
                  </div>
                </div>
              </Link>
              <Link to="#">
                <div className="eventsCard">
                  <div className="cardImage">
                    <img src="./assets/images/events_img/Robotics.png" alt="Robotics Workshop" />
                  </div>
                  <div className="cardBody">
                    <h2 className="cardTitle">Robotics Workshop</h2>
                    <h5 className="cardSubtitle">OCT 10 2019</h5>
                  </div>
                </div>
              </Link>
              <Link to="#">
                <div className="eventsCard">
                  <div className="cardImage">
                    <img src="./assets/images/events_img/headstart_startup_friday.png" alt="Headstart Startup" />
                  </div>
                  <div className="cardBody">
                    <h2 className="cardTitle">Headstart Startup Friday</h2>
                    <h5 className="cardSubtitle">SEP 21 2019</h5>
                  </div>
                </div>
              </Link>
              <Link to="#">
                <div className="eventsCard">
                  <div className="cardImage">
                    <img src="./assets/images/events_img/armed_forces.png" alt="Armed Forces" />
                  </div>
                  <div className="cardBody">
                    <h2 className="cardTitle">Armed Force a Career Option</h2>
                    <h5 className="cardSubtitle">SEP 18 2019</h5>
                  </div>
                </div>
              </Link>
              <Link to="#">
                <div className="eventsCard">
                  <div className="cardImage">
                    <img src="./assets/images/events_img/teche.jpeg" alt="Tech-Expo" />
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
