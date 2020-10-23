import React, { Component } from 'react'
import './EventHackathonStyles.css';    
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col,Table
  } from 'reactstrap';

 class EventHackathonComponents extends Component {
    render() {
        return (
            <div className="hackathon" > 
                                {/* <div className="container"> */}
                      <Card className="events-card-hackathon">
                          
                             <CardImg style={{alignSelf:"center"}} className="card_img" top width="100%" src="assets/images/events_img/hackathonlogo.jpeg" alt="hackathon" />
                          
                          <Col>
                              <CardBody className="events-card-body-hackathon" >
          <CardTitle className="events-card-hackathon-title" >Hackathon</CardTitle>
          <CardSubtitle className="events-card-hackathon-subtitle" >OCT 17 - 18</CardSubtitle>
         </CardBody>

          </Col>
          <CardText>
            <div>
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
          <td>7:00 PM</td>
          <td>Personal Mentoring Starts</td>
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
          <td>5:30 PM</td>
          <td>Closing Ceremony</td>
        </tr>
      </tbody>
    </Table>
{/* 
    <h3 className="event-hackathon-h3">Registration</h3>
    <p className="event-hackathon-p">Team can have 2-4 members, and you have to submit this <a href="https://forms.gle/jRDUJEdJ9sf324Q79">registration form</a>  </p> */}

<h3 className="event-hackathon-h3">Problem Statement</h3 >
<Table responsive>
      <thead>
        <tr>
          <th>SNo.</th>
          <th>Statement</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><p className="event-hackathon-p">Design A WebApp/Mobile App that lets insurance buyers upload regular health checks. Ability to read and classify comments/observations for common parameters will be a big plus When a customer is uploading his health check report regularly, then also a trend chart can be plotted for key parameters</p>
</td>
        </tr>
        <tr>
          <td>2</td>
          <td><p className="event-hackathon-p">Design an application for assessment of income generation of the jute farmers, jute mills workers in the jute sector through a web-based portal. The system should accept as input a variety of information and generate different reports as output.</p>
</td>
        </tr>
        <tr>
          <td>3</td>
          <td><p className="event-hackathon-p">Develop a mobile app which is capable of collecting all the details of general equipments (Date of installation, model, etc) by scanning a barcode or entering the details manually. Also, provide a way to update the details after a maintenance service.</p>
</td>
        </tr>
        <tr>
          <td>4</td>
          <td><p className="event-hackathon-p">Design an app (Mobile/Web) for virtual incubation of startups.</p>

</td>
        </tr>        <tr>
          <td>5</td>
          <td><p className="event-hackathon-p">Design an app (Mobile/Web) for online OPD appointment and Hospital Information System</p>

</td>
        </tr>        <tr>
          <td>6</td>
          <td><p className="event-hackathon-p">Design an app to sent automated alerts to Hospital/Police about an accident based on the live feed of CCTV camera.</p>

</td>
        </tr>        <tr>
          <td>7</td>
          <td><p className="event-hackathon-p">Interactive & user-friendly map application for the public to inform police about the crimes and emergencies in real-time.</p>

</td>
        </tr>        <tr>
          <td>8</td>
          <td><p className="event-hackathon-p">Build a Mobile-app which contains an efficient and user-friendly Chatbot Based Crime Registration & Crime Awareness System</p>

</td>
        </tr>        <tr>
          <td>9</td>
          <td><p className="event-hackathon-p">Build a web-app for Spam Detection</p>

</td>
        </tr>
      </tbody>
    </Table>
    


<h3 className="event-hackathon-h3">For Queries:</h3>
<p className="event-hackathon-p">Abhishek : +91-88716 37776</p>
<p className="event-hackathon-p">Kartikey : +91-88392 56099</p>
</div>
          </CardText>
          {/* <Button>Button</Button> */}
       </Card>
       </div>
            // </div>
        )
    }
}

export default EventHackathonComponents;