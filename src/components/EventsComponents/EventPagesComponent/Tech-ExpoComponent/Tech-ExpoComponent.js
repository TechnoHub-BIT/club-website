import React, { Component } from "react";
import "./Tech-ExpoComponent.css";
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

class TechExpoComponents extends Component {
  render() {
    return (
      <div className="hackathon">
        <Helmet>
          <title>Hackathon 2020 | TechnoHub BITD</title>
        </Helmet>
        <Card className="events-card-hackathon">
          <CardImg
            style={{ alignSelf: "center" }}
            className="card_img"
            top
            width="100%"
            src="assets/images/events_img/teche.jpeg"
            alt="hackathon"
          />
          <Col>
            <CardBody className="events-card-body-hackathon">
              <CardTitle className="events-card-hackathon-title">
                Tech-Expo 2019
              </CardTitle>
              <CardSubtitle className="events-card-hackathon-subtitle">
                Apr 2019
              </CardSubtitle>
            </CardBody>
          </Col>
          <CardText>
            <div>
              <h3 className="event-hackathon-h3">Event Description</h3>
              <p className="event-hackathon-p">
                Greetings to all Tech Buddies!!
              </p>
              <p className="event-hackathon-p">
                The first momentous event organized was the TECHEXPO, where many
                adept and talented students showcased their projects. And the
                winning team was awarded a cash prize worth Rs.5000.
              </p>
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default TechExpoComponents;
