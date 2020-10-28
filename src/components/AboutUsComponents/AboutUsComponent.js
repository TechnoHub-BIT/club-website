import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import Image from "./ImageComponent/ImageComponent";

import "./AboutUsStyles.css";

class About extends Component {

  render() {
    return (
      <React.Fragment>
        {/* <NavbarPage/> */}
        <div className="aboutus-container">
          <div className="container">
            <div className="row">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/home">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>About Us</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                <h3>About Us</h3>
                <hr />
              </div>
            </div>
            <div className="row row-content">
              <div className="col-12 col-md-6">
                <h2>Technohub</h2>
                <br />
                <p>
                  The club provides an ambiance for students to prepare and to
                  showcase their skills at technical events and entrepreneurship
                  held all across India and Asia in various colleges with the aim
                  to add more feathers in the cap. The ultimate goal of the
                  TechnoHub club is to educate more students and make robotics and
                  entrepreneurship an everyday phenomenon.
                </p>
              </div>
              <div className="col-12 col-md-5">
                <img
                  src="./assets/images/logo.png"
                  height="150"
                  width="260"
                  alt="Technohub"
                />
              </div>
            </div>
            <div className="row justify-content-around">
              <div className="col-12">
                <h2>Training & Placement Officer</h2>
                <br />
              </div>
              <div className="col-lg-4 col-sm-6">
                <Image path="./assets/images/aboutus_img/manisha.jpg" name="Dr. Manisha Sharma" />
              </div>
            </div>
            <div className="row justify-content-around">
              <div className="col-12">
                <h2>President</h2>
                <br />
              </div>
              <div className="col-lg-4 col-sm-6">
                <Image path="./assets/images/aboutus_img/sachet.jpg" name="Sachet Sabarad" contact="7722874355" />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-xl-4">
                <div className="title">
                  <h2>Vice President</h2>
                  <br />
                </div>
              </div>
            </div>
            <div className="row justify-content-around">
              <div className="col-lg-4 col-sm-6">
                <Image path="./assets/images/aboutus_img/shubham.jpeg" name="Shubham Agrawal" contact="7771878241" />
              </div>
              <div className="col-lg-4 col-sm-6">
                <Image path="./assets/images/aboutus_img/harsha.jpeg" name="Harsha Dubey" contact="9111258904" />
              </div>
            </div>
          </div>
          {/* General Manager Start */}
          <div className="container">
            <div className="row">
              <div className="col-xl-4">
                <div className="title">
                  <h2>General Manager</h2>
                  <br />
                </div>
              </div>
            </div>
            <div className="row justify-content-around">
              <div className="col-lg-4 col-sm-6">
                <Image path="./assets/images/aboutus_img/nirbhay.jpeg" name="Nirbhay Kumar" contact="8210886680" />
              </div>
              
              <div className="col-lg-4 col-sm-6">
                <Image path="./assets/images/aboutus_img/saisha.jpeg" name="T Saisha" contact="8085999174" />
              </div>
              <div className="col-lg-4 col-sm-6">
                <Image path="./assets/images/aboutus_img/darshita.jpeg" name="Darshita Mahaski" contact="7999766849" />
              </div>
              <div className="col-lg-4 col-sm-6">
                <Image path="./assets/images/aboutus_img/rishabh.jpeg" name="Rishabh Deshmukh" contact="9057316055" />
              </div>
            </div>
          </div>
          {/* General Manager End */}


          <div className="container">
            <div className="row">
              <div className="col-xl-4">
                <div className="title">
                  <h2>Program Manager</h2>
                  <br />
                </div>
              </div>
            </div>
            <div className="row justify-content-around">
              <div className="col-lg-4 col-sm-6">
                <Image path="./assets/images/aboutus_img/agney.jpg" name="Agney Deshkar" contact="6261731565" />
              </div>
            </div>
          </div>

          {/* Project Managers start */}
          <div className="container">
            <div className="row">
              <div className="col-xl-4">
                <div className="title">
                  <h2>Project Managers</h2>
                  <br />
                </div>
              </div>
            </div>
            <div className="row justify-content-around">
              <div className="col-lg-4 col-sm-6">
                <Image path="./assets/images/aboutus_img/shubharangshu.jpg" name="Shubharangshu Chakraborty" post="Marketing Manager" contact="9407762880" />
              </div>
              <div className="col-lg-4 col-sm-6">
                <Image path="./assets/images/aboutus_img/arpit.jpg" name="Arpit Sahu" post="Finance Manager" contact="8319560199" />
              </div>
              <div className="col-lg-4 col-sm-6">
                <Image path="./assets/images/aboutus_img/suchi.jpg" name="Suchi Agrawal" post="Public Relations Manager" contact="9893010932" />
              </div>
              <div className="col-lg-4 col-sm-6">
                <Image path="./assets/images/aboutus_img/kartikey.jpg" name="Kartikey Rawat" post="Technical Lead" contact="8839256099" />
              </div>
            </div>
          </div>
          {/* Project Managers End */}

          <div className="container">
            <div className="row">
              <div className="col-xl-4">
                <div className="title">
                  <h2>Coordinators</h2>
                  <br />
                </div>
              </div>
            </div>
            <div className="row justify-content-around">
              <div className="col-lg-4 col-sm-6">
                <Image path="./assets/images/aboutus_img/aditya.jpg" name="Aditya Deshmukh" contact="9584913846" />
              </div>
              <div className="col-lg-4 col-sm-6">
                <Image path="./assets/images/aboutus_img/nitesh.jpg" name="Nitesh Bharti" contact="7354124249" />
              </div>
              <div className="col-lg-4 col-sm-6">
                <Image path="./assets/images/aboutus_img/abhishek.jpg" name="Abhishek Agrawal" contact="8871637776" />
              </div>
              <div className="col-lg-4 col-sm-6">
                <Image path="./assets/images/aboutus_img/navya.jpg" name="Navya Singh" contact="6264365144" />
              </div>
              <div className="col-lg-4 col-sm-6">
                <Image path="./assets/images/aboutus_img/tanmay.jpg" name="Tanmay Soni" contact="9329847520" />
              </div>
              <div className="col-lg-4 col-sm-6">
                <Image path="./assets/images/aboutus_img/shubhangi.jpg" name="Shubhangi Sharma" contact="7489488979" />
              </div>
              <div className="col-lg-4 col-sm-6">
                <Image path="./assets/images/aboutus_img/kuldeep.jpg" name="Kuldeep Patel" contact="7000728570" />
              </div>
              <div className="col-lg-4 col-sm-6">
                <Image path="./assets/images/aboutus_img/aman.jpg" name="Aman Mandal" contact="7225952566" />
              </div>
            </div>
          </div>
      
          {/* Secretaries start */}
          <div className="container">
            <div className="row">
              <div className="col-xl-4">
                <div className="title">
                  <h2>Secretaries</h2>
                  <br />
                </div>
              </div>
            </div>
            <div className="row justify-content-around">
              <div className="col-lg-4 col-sm-6">
                <Image path="./assets/images/aboutus_img/aaryan.jpg" name="Aaryan Khandelwal" contact="8103445828" />
              </div>
              <div className="col-lg-4 col-sm-6">
                <Image path="./assets/images/aboutus_img/narayan.jpg" name="Bavisetti Narayan" contact="9406108766" />
              </div>
            </div>
          </div>
          {/* Secretaries End */}
        </div>
      </React.Fragment>
    );
  }
}

export default About;
