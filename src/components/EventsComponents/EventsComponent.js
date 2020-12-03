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
import HeadingTitle from "../HeaderComponents/HeaderTitle";

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
            <div style={{marginBottom: "100px"}}>
              <h1 style={{textAlign:"center", margin: "15px"}} >Upcoming Events</h1>
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
                        <CardSubtitle className="events-card-subtitle" >OCT 17 - 18 2020</CardSubtitle>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Link>
              <Link to="/hultprize2020" >
                <Card className="events-card">
                  <Row>
                    <Col style={{maxWidth: "350px"}} >
                      <CardImg style={{alignSelf:"center"}} className="card_img" top width="100%" src="assets/images/events_img/HultPrize_nov2020.png" alt="Hult Prize BITD" />
                      <div className="top-right">ONLINE</div>
                    </Col>
                    <Col style={{alignSelf:"center"}} >
                      <CardBody className="events-card-body" >
                        <CardTitle className="events-card-title" >Hult Prize 2021</CardTitle>
                        <CardSubtitle className="events-card-subtitle" >Aug 23 - Nov 08</CardSubtitle>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Link>
              <Link to="/hultprize2020" >
                <Card className="events-card">
                  <Row>
                    <Col style={{maxWidth: "350px"}} >
                      <CardImg style={{alignSelf:"center"}} className="card_img" top width="100%" src="assets/images/events_img/EV.png" alt="Hult Prize BITD" />
                      <div className="top-right">ONLINE</div>
                    </Col>
                    <Col style={{alignSelf:"center"}} >
                      <CardBody className="events-card-body" >
                        <CardTitle className="events-card-title" >Electical Vehicle - By Suraj SD</CardTitle>
                        <CardSubtitle className="events-card-subtitle" >OCT 04 2020</CardSubtitle>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Link>
              <Link to="/eaglecad" >
                <Card className="events-card">
                  <Row>
                    <Col style={{maxWidth: "350px"}} >
                      <CardImg style={{alignSelf:"center"}} className="card_img" top width="100%" src="assets/images/events_img/EagleCAD.png" alt="Hult Prize BITD" />
                      <div className="top-right">ONLINE</div>
                    </Col>
                    <Col style={{alignSelf:"center"}} >
                      <CardBody className="events-card-body" >
                        <CardTitle className="events-card-title" >EagleCAD Workshop</CardTitle>
                        <CardSubtitle className="events-card-subtitle" >SEP 26 2020</CardSubtitle>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Link>
              <Link to="/hultprize2020" >
                <Card className="events-card">
                  <Row>
                    <Col style={{maxWidth: "350px"}} >
                      <CardImg style={{alignSelf:"center"}} className="card_img" top width="100%" src="assets/images/events_img/HultPrize_jan2020.png" alt="Hult Prize BITD" />
                      <div className="top-right2">OFFLINE</div>
                    </Col>
                    <Col style={{alignSelf:"center"}} >
                      <CardBody className="events-card-body" >
                        <CardTitle className="events-card-title" >Hult Prize 2020</CardTitle>
                        <CardSubtitle className="events-card-subtitle" >JAN 16 - 23 2020</CardSubtitle>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Link>
              <Link to="/hultprize2020" >
                <Card className="events-card">
                  <Row>
                    <Col style={{maxWidth: "350px"}} >
                      <CardImg style={{alignSelf:"center"}} className="card_img" top width="100%" src="assets/images/events_img/Robotics.png" alt="Hult Prize BITD" />
                      <div className="top-right2">OFFLINE</div>
                    </Col>
                    <Col style={{alignSelf:"center"}} >
                      <CardBody className="events-card-body" >
                        <CardTitle className="events-card-title" >Robotics Workshop</CardTitle>
                        <CardSubtitle className="events-card-subtitle" >SEP 28 - 29 2019</CardSubtitle>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Link>
              <Link to="/hultprize2020" >
                <Card className="events-card">
                  <Row>
                    <Col style={{maxWidth: "350px"}} >
                      <CardImg style={{alignSelf:"center"}} className="card_img" top width="100%" src="assets/images/events_img/teche.jpeg" alt="Hult Prize BITD" />
                      <div className="top-right2">OFFLINE</div>
                    </Col>
                    <Col style={{alignSelf:"center"}} >
                      <CardBody className="events-card-body" >
                        <CardTitle className="events-card-title" >Tech Expo @ OJAS 2019</CardTitle>
                        <CardSubtitle className="events-card-subtitle" >APR 03 2019</CardSubtitle>
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
