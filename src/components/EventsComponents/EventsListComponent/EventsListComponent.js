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
      db.collection("Events")
        .orderBy("eventdate", "desc")
        .onSnapshot(function (data) {
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
        <h3 className="text-center py-5">
          This section is under construction!
          <br />
          Will be live back soon.
        </h3>
        {/* <div className="container">
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
                    <a href={"/events/" + item.id} className="singleEvent">
                      <img
                        src={
                          "https://drive.google.com/uc?export=view&id=" +
                          item.eventimage
                        }
                        className="eventImage"
                        alt={item.eventtitle}
                      />
                      <div className="eventHeader">
                        <div className="headerContent">
                          <div className="eventTitle">{item.eventtitle}</div>
                          <div className="eventDate">
                            Held on {Moment(item.eventdate).format("ll")}
                          </div>
                        </div>
                      </div>
                    </a>
                  </Zoom>
                );
              }
            })}
          </div>
          {eventCounter === 0 ? (
            <div className="comingSoon">
              <h2>More events are coming</h2>
              <h5>Stay tuned with us</h5>
            </div>
          ) : null}
          <h1 className="sectionTitle">Past Events</h1>
          <div className="eventsCardCont">
            {event.map((item) => {
              if (item.eventtype === "Past Event")
                return (
                  <Zoom>
                    <a href={"/events/" + item.id} className="singleEvent">
                      <img
                        src={
                          "https://drive.google.com/uc?export=view&id=" +
                          item.eventimage
                        }
                        className="eventImage"
                        alt={item.eventtitle}
                      />
                      <div className="eventHeader">
                        <div className="headerContent">
                          <div className="eventTitle">{item.eventtitle}</div>
                          <div className="eventDate">
                            Held on {Moment(item.eventdate).format("ll")}
                          </div>
                        </div>
                      </div>
                    </a>
                  </Zoom>
                );
            })}
          </div>
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default EventList;
