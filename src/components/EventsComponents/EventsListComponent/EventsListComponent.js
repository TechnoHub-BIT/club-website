import React, { useState, useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
} from "../../BreadcrumbComponent/BreadcrumbComponent";
import HeadingTitle from "../../HeaderComponents/HeaderTitle";
import "./EventsComponent.css";
import { Helmet } from "react-helmet";
import { Zoom } from "react-reveal";
import { db } from "../../../firebase";
import Moment from "moment";
import { useAuth } from "../../../contexts/AuthContext";

const EventList = () => {
  const [event, setEvent] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      db.collection("Events").onSnapshot(function (data) {
        setEvent(
          data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    };
    fetchdata();
  }, []);

  const { currentUser, logout } = useAuth();

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    if (currentUser) {
      db.collection("members")
        .doc(currentUser.uid)
        .onSnapshot(function (doc) {
          const data = doc.data();
          setProfiles(data);
        });
    }
  }, [currentUser]);

  let eventCounter = 0;

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
          {profiles.id === 1 || profiles.id === 3 ? (
            <a href="/addevent">
              <button className="btn btn-success">
                <i className="fas fa-plus"></i>&nbsp;&nbsp;Add New Event
              </button>
            </a>
          ) : null}
          <h1 className="sectionTitle">Upcoming Events</h1>
          <div className="eventsCardCont">
            {event.map((item) => {
              if (item.eventtype === "Upcoming Event") {
                eventCounter++;
                return (
                  <Zoom>
                    <a href={"/events/" + item.id}>
                      <div className="eventsCard">
                        <div className="cardImage">
                          <img
                            src={
                              "https://drive.google.com/uc?export=view&id=" +
                              item.eventimage
                            }
                            alt={item.eventtitle}
                          />
                        </div>
                        <div className="cardBody">
                          <h2 className="cardTitle">{item.eventtitle}</h2>
                          <h5 className="cardSubtitle">
                            {Moment(item.eventdate).format("ll")}
                          </h5>
                        </div>
                      </div>
                    </a>
                  </Zoom>
                );
              }
            })}
          </div>
          {eventCounter === 0 ? (
            <div className="eventsCard comingSoon">
              <div className="cardBody">
                <h2 className="cardTitle">More events are coming</h2>
                <h5 className="cardSubtitle">Stay tuned with us</h5>
              </div>
            </div>
          ) : null}
          <h1 className="sectionTitle">Past Events</h1>
          <div className="eventsCardCont">
            {event.map((item) => {
              if (item.eventtype === "Past Event")
                return (
                  <Zoom>
                    <a href={"/events/" + item.id}>
                      <div className="eventsCard">
                        <div className="cardImage">
                          <img
                            src={
                              "https://drive.google.com/uc?export=view&id=" +
                              item.eventimage
                            }
                            alt={item.eventtitle}
                          />
                        </div>
                        <div className="cardBody">
                          <h2 className="cardTitle">{item.eventtitle}</h2>
                          <h5 className="cardSubtitle">
                            {Moment(item.eventdate).format("ll")}
                          </h5>
                        </div>
                      </div>
                    </a>
                  </Zoom>
                );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EventList;
