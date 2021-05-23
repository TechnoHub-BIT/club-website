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

  return <h3 className="text-center">Events are Under Construction</h3>;

  // return (
  //   <React.Fragment>
  //     <HeadingTitle heading="TECHNOHUB EVENTS" image="events.jpg" />
  //     <div className="events-container">
  //       <Helmet>
  //         <title>Events | TechnoHub BITD</title>
  //         <meta
  //           name="description"
  //           content="Shows TechnoHub's various successful events and associate programs briefly, which provide opportunities to the students and also foresee a glimpse of our upcoming events."
  //         />
  //       </Helmet>
  //       <Breadcrumb>
  //         <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
  //         <BreadcrumbItem
  //           icon="far fa-calendar-alt"
  //           title="Events"
  //           status="active"
  //         />
  //       </Breadcrumb>
  //       <div className="container">
  //         <h1 className="sectionTitle">Upcoming Events</h1>
  //         {/* <div className="eventsCard comingSoon">
  //             <div className="cardBody">
  //               <h2 className="cardTitle">Coming Soon</h2>
  //               <h5 className="cardSubtitle">Stay Tuned with Us</h5>
  //             </div>
  //           </div> */}
  //         <div className="eventsCardCont">
  //             {event.map((item) => {
  //               if (item.eventtype === "Upcoming Event")
  //                 return (
  //                   <Zoom>
  //                     <a href={"/events/" + item.id}>
  //                       <div className="eventsCard">
  //                         <div className="cardImage">
  //                           <img src={item.eventimage} alt={item.eventtitle} />
  //                         </div>
  //                         <div className="cardBody">
  //                           <h2 className="cardTitle">{item.eventtitle}</h2>
  //                           <h5 className="cardSubtitle">
  //                             {Moment(item.eventdate).format("ll")}
  //                           </h5>
  //                         </div>
  //                       </div>
  //                     </a>
  //                   </Zoom>
  //                 );
  //             })}
  //         </div>
  //         <h1 className="sectionTitle">Past Events</h1>
  //         <div className="eventsCardCont">
  //             {event.map((item) => {
  //               if (item.eventtype === "Past Event")
  //                 return (
  //                   <Zoom>
  //                     <a href={"/events/" + item.id}>
  //                       <div className="eventsCard">
  //                         <div className="cardImage">
  //                           <img src={item.eventimage} alt={item.eventtitle} />
  //                         </div>
  //                         <div className="cardBody">
  //                           <h2 className="cardTitle">{item.eventtitle}</h2>
  //                           <h5 className="cardSubtitle">
  //                             {Moment(item.eventdate).format("ll")}
  //                           </h5>
  //                         </div>
  //                       </div>
  //                     </a>

  //             {/* <SingleEvent to="/hackathon2020" img="./assets/images/events_img/hackathonlogo.jpeg" title="Opportunities in Electronics Engineering, " subtitle="MAy 01 2021" />

  //               <SingleEvent to="/hackathon2020" img="./assets/images/events_img/hackathonlogo.jpeg" title="Opportunities in Civil Engineering, " subtitle="APRIL 03 2021" />

  //               <SingleEvent to="/hackathon2020" img="./assets/images/events_img/hackathonlogo.jpeg" title="How to Ace your summer internship" subtitle="MAR 21 2021" />

  //               <SingleEvent to="/hackathon2020" img="./assets/images/events_img/hackathonlogo.jpeg" title="Hackathon" subtitle="OCT 17 - 18 2020" />

  //               <SingleEvent to="/hult2021" img="./assets/images/events_img/HultPrize_nov2020.png" title="Hult Prize 2021" subtitle="AUG 23 - NOV 08 2020" />

  //               <SingleEvent to="/evbysurajsd" img="./assets/images/events_img/EV.png" title="Electrical Vehicle - By Suraj SD" subtitle="OCT 04 2020" />

  //               <SingleEvent to="/autocad" img="./assets/images/events_img/EagleCAD.png" title="EagleCAD Workshop" subtitle="SEP 26 2020" />

  //               <SingleEvent to="/positionyourself" img="./assets/images/events_img/position_yourself.png" title="How to position yourself in future.." subtitle="FEB 9 2020" />

  //               <SingleEvent to="/hult2020" img="./assets/images/events_img/HultPrize_jan2020.png" title="Hult Prize 2020" subtitle="JAN 16 - 23 2020" />

  //               <SingleEvent to="/roboticsworkshop" img="./assets/images/events_img/Robotics.png" title="Robotics Workshop" subtitle="OCT 10 2019" />

  //               <SingleEvent to="/headstartfriday" img="./assets/images/events_img/headstart_startup_friday.png" title="Headstart Startup Friday" subtitle="SEP 21 2019" />

  //               <SingleEvent to="/armedforces" img="./assets/images/events_img/armed_forces.png" title="Armed Force a Career Option" subtitle="SEP 18 2019" />

  //               <SingleEvent to="/techexpo2019" img="./assets/images/events_img/teche.jpeg" title="Tech Expo @ OJAS 2019" subtitle="Apr 03 2019" /> */}
  //           </Zoom>
  //                       );
  //                   })}
  //         </div>
  //       </div>
  //     </div>
  //   </React.Fragment>
  // );
};

export default EventList;
