import React, { Component } from 'react';
import './EventsComponentStyles.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom';

class EventsComponent extends Component {
    render() {
        return (
            <div className="events-container" >
                <div className="container">
                <h1 style={{textAlign:"center", margin: "15px"}} >Upcomming Events</h1>
                      <Link  >
                      <Card className="events-card">
                          <Row>
                              <Col style={{maxWidth: "350px"}} >
                             <CardImg style={{alignSelf:"center"}} className="card_img" top width="100%" src="assets/images/aboutus_img/DSC_2055.jpg" alt="Card image cap sample" />
                            <  div className="top-right">ONLINE</div>
                              </Col>
                              <Col>
                              <CardBody className="events-card-body" >
          <CardTitle className="events-card-title" >Hackathon</CardTitle>
          <CardSubtitle className="events-card-subtitle" >OCT 17 - 18</CardSubtitle>
         </CardBody>

          </Col>
                          </Row>

          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
          {/* <Button>Button</Button> */}
       </Card>
       </Link>
       </div>
            </div>
        )
    }
}
export default EventsComponent;
// import React from 'react';
// import {
//   Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button
// } from 'reactstrap';

// const EventsComponent = (props) => {
//   return (
//     <div>
//       <Card>
//         <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
//         <CardBody>
//           <CardTitle>Card title</CardTitle>
//           <CardSubtitle>Card subtitle</CardSubtitle>
//           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//           <Button>Button</Button>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default EventsComponent;