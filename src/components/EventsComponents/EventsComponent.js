import React, { Component } from 'react';
import './EventsComponentStyles.css';
import {Breadcrumb, BreadcrumbItem} from "../BreadcrumbComponent/BreadcrumbComponent";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle, 
  Row,
  Col,

} from 'reactstrap';
import { Link } from 'react-router-dom';

class EventsComponent extends Component {
  render() {
    return (
        <div className="events-container">
          <Breadcrumb>
              <BreadcrumbItem title="Home" path="/" />
              <BreadcrumbItem title="Events" status="active" />
          </Breadcrumb>
          <div className="container">
            <div style={{marginBottom: "100px"}}>
              <h1 style={{textAlign:"center", margin: "15px"}} >Upcomming Events</h1>
                <Card className="events-card" style={{backgroundColor: "lightgray"}} >
                  <Row >
                    <CardBody className="events-card-body" >
                      <CardTitle className="events-card-title" >Comming Soon</CardTitle>
                      <CardSubtitle className="events-card-subtitle" >Stay Tuned With Us</CardSubtitle>
                    </CardBody>
                  </Row>
                </Card>
            </div>
            <h1 style={{textAlign:"center", margin: "15px"}} >Past Events</h1>
              <Link to="/hackathon2020" >
                <Card className="events-card">
                  <Row>
                    <Col style={{maxWidth: "350px"}} >
                      <CardImg style={{alignSelf:"center"}} className="card_img" top width="100%" src="assets/images/events_img/hackathonlogo.jpeg" alt="hackathon" />
                      <div className="top-right">ONLINE</div>
                    </Col>
                    <Col style={{alignSelf:"center"}} >
                      <CardBody className="events-card-body" >
                        <CardTitle className="events-card-title" >Hackathon</CardTitle>
                        <CardSubtitle className="events-card-subtitle" >OCT 17 - 18</CardSubtitle>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Link>
          </div>
        </div>
      );
  }
}
export default EventsComponent;
