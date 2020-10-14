import React, { Component } from 'react'
import './EventHackathonStyles.css';    
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col,Table
  } from 'reactstrap';

 class EventHackathonComponents extends Component {
    render() {
        return (
            <div className="hackathon" > 
                                <div className="container">
                      <Card className="events-card">
                          
                             <CardImg style={{alignSelf:"center"}} className="card_img" top width="100%" src="assets/images/events_img/hackathonlogo.jpeg" alt="hackathon" />
                           

                          
                          <Col>
                              <CardBody className="events-card-body" >
          <CardTitle className="events-card-title" >Hackathon</CardTitle>
          <CardSubtitle className="events-card-subtitle" >OCT 17 - 18</CardSubtitle>
         </CardBody>

          </Col>
          <CardText>
              <h2>Event Description</h2>
              <h5>TechnoHub is organising and virtual online hackathon.</h5>

              <h2>Who can attend ?</h2>
              <h5>This hackathon can only be attend by BIT, Durg students. and there will we minimal fees charge for non-technohub team members team</h5>

              <h2>Schedule</h2>
              <h4>17th October</h4>
              <Table responsive>
      <thead>
        <tr>
          <th>Time</th>
          <th>Event</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>4:00 PM</td>
          <td>Opening Ceremony</td>
        </tr>
        <tr>
          <td>5:00 PM</td>
          <td>Hackathon Start</td>
        </tr>
        <tr>
          <td>7:30 PM</td>
          <td>Idea Pitching Round</td>
        </tr>
      </tbody>
    </Table>
    <h4>18th October</h4>
              <Table responsive>
      <thead>
        <tr>
          <th>Time</th>
          <th>Event</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10:00 AM</td>
          <td>Mentoring Round</td>
        </tr>
        <tr>
          <td>4:00 PM</td>
          <td>Judging Round</td>
        </tr>
        <tr>
          <td>6:30 PM</td>
          <td>Closing Ceremony</td>
        </tr>
      </tbody>
    </Table>

    <h2>Registration</h2>
    <h5>Team can have 2-4 members, and you have to submit this registration form </h5>

<h2>Problem Statement</h2>
<p>It will upload on 16th October</p>
<h2>Contact-Us</h2>
<h5>For any quiory you can contact us at</h5>
<p>Abhishek : +91-XXXXXXX</p>
<p>Kartikey : +91-XXXXXXX</p>

          </CardText>
          {/* <Button>Button</Button> */}
       </Card>
       </div>
            </div>
        )
    }
}

export default EventHackathonComponents;