import React,{useEffect,useState} from "react";
// import "./ArmedForceComponent.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
} from "reactstrap";
import { Helmet } from "react-helmet";
import { db } from "../../../firebase";
import Moment from "moment";



const SingleEvent = (props) => {
  // fetch the event
  const [event, setEvent] = useState("");
  const ref = db.collection("Events").doc(props.match.params.id);
  useEffect(() => {
    ref.get().then((doc) => {
      if (doc.exists) {
        const Test = doc.data();
        setEvent({
          eventtitle: Test.eventtitle,
          eventimage: Test.eventimage,
          eventdate: Test.eventdate,
          eventcontent: Test.eventcontent,
        });
      }
    });
  }, []);

  return (
    <div className="hackathon">
      <Helmet>
        <title>h | TechnoHub BITD</title>
      </Helmet>
      <Card className="events-card-hackathon">
        <CardImg
          style={{ alignSelf: "center" }}
          className="card_img"
          top
          width="100%"
          src={event.eventimage} alt={event.eventtitle}
          alt={event.eventtitle}
        />
        <Col>
          <CardBody className="events-card-body-hackathon">
            <CardTitle className="events-card-hackathon-title">
              {event.eventtitle}
            </CardTitle>
            <CardSubtitle className="events-card-hackathon-subtitle">
            {/* {Moment(event.eventdate.toDate()).format("ll")} */}
            </CardSubtitle>
          </CardBody>
        </Col>
        <CardText>
          <div
            dangerouslySetInnerHTML={{
              __html: event.eventcontent,
            }}
            className="blogDetails"
          ></div>
        </CardText>
      </Card>
    </div>
  );
};

export default SingleEvent;
