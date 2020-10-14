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
                      <Card className="events-card-hackathon">
                          
                             <CardImg style={{alignSelf:"center"}} className="card_img" top width="100%" src="assets/images/events_img/hackathonlogo.jpeg" alt="hackathon" />
                          
                          <Col>
                              <CardBody className="events-card-body-hackathon" >
          <CardTitle className="events-card-hackathon-title" >Hackathon</CardTitle>
          <CardSubtitle className="events-card-hackathon-subtitle" >OCT 17 - 18</CardSubtitle>
         </CardBody>

          </Col>
          <CardText>
              <h3 className="event-hackathon-h3">Event Description</h3>
              <p className="event-hackathon-p">Greetings to all Tech Buddies!!</p>
    
    <p className="event-hackathon-p">We all know Hackathons are a great chance to meet people who are just as excited about programming as you are, And to provide you with an 
      opportunity to practice and compete among yourselves, Technohub brings an amazing Hackathon
    </p>
              <h3 className="event-hackathon-h3">About the contest</h3>
              <p className="event-hackathon-p">This hackathon can only be attend by BIT, Durg students.You can participate in team of 2-4, Registration for Technohub member is <b>Free</b> and <b>Rs.50</b> for teams with <b>Non-Technohub</b> member.</p>
<p className="event-hackathon-p">Certificate of Participation will be provided to all the participants. and Certificate of Appreciation will be provided to Winner. <b>Cash Prize upto Rs. 1000</b> </p>
              <h3 className="event-hackathon-h3">Schedule</h3>
              <h5 className="event-hackathon-h5">17th October</h5>
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
    <h5 className="event-hackathon-h5">18th October</h5>
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

    <h3 className="event-hackathon-h3">Registration</h3>
    <p className="event-hackathon-p">Team can have 2-4 members, and you have to submit this <a href="https://forms.gle/jRDUJEdJ9sf324Q79">registration form</a>  </p>

<h3 className="event-hackathon-h3">Problem Statement</h3 >
<p className="event-hackathon-p">It will upload on 16th October</p>
<h3 className="event-hackathon-h3">For Queries:</h3>
<p className="event-hackathon-p">Abhishek : +91-88716 37776</p>
<p className="event-hackathon-p">Kartikey : +91-88392 56099</p>

          </CardText>
          {/* <Button>Button</Button> */}
       </Card>
       </div>
            </div>
        )
    }
}

export default EventHackathonComponents;