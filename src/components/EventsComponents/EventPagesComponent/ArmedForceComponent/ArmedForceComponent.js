import React, { Component } from 'react'
import './ArmedForceComponent.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col,Table, Row
  } from 'reactstrap';
import { Helmet } from "react-helmet";

class ArmedForcesComponents extends Component {
  render() {
    return (
      <div className="hackathon">
        <Helmet>
          <title>Hackathon 2020 | TechnoHub BITD</title>
        </Helmet>
        <Card className="events-card-hackathon">
          <CardImg style={{alignSelf:"center"}} className="card_img" top width="100%" src="assets/images/events_img/armed_forces.png" alt="hackathon" />
          <Col>
            <CardBody className="events-card-body-hackathon" >
              <CardTitle className="events-card-hackathon-title" >Armed Forces as a Carrer Option (Seminar)</CardTitle>
              <CardSubtitle className="events-card-hackathon-subtitle" >18 Sep 2019</CardSubtitle>
            </CardBody>
          </Col>
          <CardText>
            <div>
              <h3 className="event-hackathon-h3">Event Description</h3>
              <p className="event-hackathon-p">‘The True Soldier Fights Not Because he hates what is in front of him, but because he loves what is behind him.’ Next up was a guest lecture on “Armed Forces as a Career Option” where the dignified and honorable speakers motivated the students to take up the career and take the path of Armed Forces.

              </p>
              
              
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default ArmedForcesComponents;