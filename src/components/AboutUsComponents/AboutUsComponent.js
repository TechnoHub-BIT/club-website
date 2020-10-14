import React from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "./AboutUsStyles.css";

function About(props) {
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
                src="assets/images/logo.png"
                height="150"
                width="260"
                alt="Technohub"
              />
            </div>
            <div className="col-12">
              <Card>
                <CardBody className="bg-faded">
                  <blockquote className="blockquote">
                    <p className="mb-0">
                      You have to grow from the inside out. None can teach you,
                      none can make you spiritual. There is no other teacher but
                      your own soul.
                    </p>
                    <footer className="blockquote-footer">
                      Swami Vivekananda,
                      <cite title="Source Title">
                        {" "}
                        Indian monk, a chief disciple of the 19th-century Indian
                        mystic Ramakrishna.
                      </cite>
                    </footer>
                  </blockquote>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-12">
              <h2>Training & Placement Officer</h2>
              <br />
            </div>
            <div className="col-lg-4 col-sm-6">
              <img
                src="assets/images/aboutus_img/DSC_2055.jpg"
                className="img-fluid" 
                alt=""
              />

              <div className="single_industries_text">
                <h3>Dr. Manisha Sharma</h3>
                <h5>( Head )</h5>

                <p>Training and Placement Cell</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-12">
              <h2>President</h2>
              <br />
            </div>
            <div className="col-lg-4 col-sm-6">
              <img
                src="assets/images/aboutus_img/DSC_0733_3.jpg"
                alt="Sachet Sabarad"
                className="img-fluid"
              />

              <div className="single_industries_text">
                <h3>Sachet Sabarad</h3>

                <p>
                  <i className="fa fa-phone"></i>+91-7722874355
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="section_tittle">
                <h2>Vice President</h2>
                <br />
              </div>
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-lg-4 col-sm-6">
              <div className="single_industries">
                <img
                  src="assets/images/aboutus_img/shub.jpeg"
                  alt="Shubham Agrawal"
                  className="img-fluid" 
                U
                />
                <div className="single_industries_text">
                  <h3>Shubham Agrawal</h3>
                  <p>
                    <i className="fa fa-phone"></i>+91-7771878241
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single_industries">
                <img
                  src="assets/images/aboutus_img/harsha.jpeg"
                  alt="Harsha Dubey"
                  className="img-fluid" 
                U
                />
                <div className="single_industries_text">
                  <h3>Harsha Dubey</h3>
                  <p>
                    <i className="fa fa-phone"></i>+91-9111258904
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* General Manager Start */}
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="section_tittle">
                <h2>General Manager</h2>
                <br />
              </div>
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-lg-4 col-sm-6">
              <div className="single_industries">
                <img
                  src="assets/images/aboutus_img/nir.jpeg"
                  alt="Nirbhay Kumar"
                  className="img-fluid" 
                U
                />
                <div className="single_industries_text">
                  <h3>Nirbhay Kumar</h3>
                  <p>
                    <i className="fa fa-phone"></i>+91-8210886680
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-sm-6">
              <div className="single_industries">
                <img
                  src="assets/images/aboutus_img/Saisha.jpeg"
                  alt="T Saisha"
                  className="img-fluid" 
                U
                />
                <div className="single_industries_text">
                  <h3>T Saisha</h3>
                  <p>
                    <i className="fa fa-phone"></i>+91-8085999174
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single_industries">
                <img
                  src="assets/images/aboutus_img/Darshita1.jpeg"
                  alt="Darshita Mahaski"
                  className="img-fluid" 
                U
                />
                <div className="single_industries_text">
                  <h3>Darshita Mahaski</h3>
                  <p>
                    <i className="fa fa-phone"></i>+91-7999766849
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single_industries">
                <img
                  src="assets/images/aboutus_img/rishabh.jpeg"
                  alt="Rishabh Deshmukh"
                  className="img-fluid" 
                U
                />
                <div className="single_industries_text">
                  <h3>Rishabh Deshmukh</h3>
                  <p>
                    <i className="fa fa-phone"></i>+91-9057316055
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* General Manager End */}


        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="section_tittle">
                <h2>Program Manager</h2>
                <br />
              </div>
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-lg-4 col-sm-6">
              <div className="single_industries">
                <img
                  src="assets/images/aboutus_img/agney.jpg"
                  alt="Agney Deshkar"
                  className="img-fluid" 
                U
                />
                <div className="single_industries_text">
                  <h3>Agney Deshkar</h3>
                  
                  <p>
                    <i className="fa fa-phone"></i>+91-6261731565
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

{/* Project Managers start */}
<div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="section_tittle">
                <h2>Project Managers</h2>
                <br />
              </div>
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-lg-4 col-sm-6">
              <div className="single_industries">
                <img
                  src="assets/images/aboutus_img/shubharangshu.jpg"
                  alt="Shubharangshu"
                  className="img-fluid" 
                U
                />
                <div className="single_industries_text">
                  <h3>Shubharangshu Chakraborty </h3>
                  <h6>Marketing Manager</h6>
                  <p>
                    <i className="fa fa-phone"></i>+91-9407762880
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single_industries">
                <img
                  src="assets/images/aboutus_img/arpit.jpg"
                  alt="Arpit Sahu"
                  className="img-fluid" 
                U
                />
                <div className="single_industries_text">
                  <h3>Arpit Sahu </h3>
                  <h6>Finance Manager</h6>
                  <p>
                    <i className="fa fa-phone"></i>+91-8319560199
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single_industries">
                <img
                  src="assets/images/aboutus_img/Suchi.jpg"
                  alt="Shuchi Agrawal"
                  className="img-fluid" 
                U
                />
                <div className="single_industries_text">
                  <h3>Shuchi Agrawal</h3>
                  <h6>Public Relations Manager</h6>
                  <p>
                    <i className="fa fa-phone"></i>+91-9893010932
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single_industries">
                <img
                  src="assets/images/aboutus_img/kartikey.jpg"
                  alt=""
                  className="img-fluid" 
                U
                />
                <div className="single_industries_text">
                  <h3>Kartikey Rawat </h3>
                  <h6>Technical Lead</h6>
                  <p>
                    <i className="fa fa-phone"></i>+91-8839256099
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* Project Managers End */}
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="section_tittle">
                <h2>Coordinators</h2>
                <br />
              </div>
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-lg-4 col-sm-6">
              <div className="single_industries">
                <img
                  src="assets/images/aboutus_img/aditya.jpg"
                  alt=""
                  className="img-fluid" 
                U
                />
                <div className="single_industries_text">
                  <h3>Aditya Deshmukh </h3>
                  <p>
                    <i className="fa fa-phone"></i>+91-9584913846
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single_industries">
                <img
                  src="assets/images/aboutus_img/nitesh.jpg"
                  alt=""
                  className="img-fluid" 
                U
                />
                <div className="single_industries_text">
                  <h3>Nitesh Bharti</h3>
                  <p>
                    <i className="fa fa-phone"></i>+91-7354124249
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single_industries">
                <img
                  src="assets/images/aboutus_img/abhishek.jpg"
                  alt=""
                  className="img-fluid" 
                U
                />
                <div className="single_industries_text">
                  <h3>Abhishek Agrawal</h3>
                  <p>
                    <i className="fa fa-phone"></i>+91-8871637776
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single_industries">
                <img
                  src="assets/images/aboutus_img/navya.jpg"
                  alt=""
                  className="img-fluid" 
                U
                />
                <div className="single_industries_text">
                  <h3>Navya Singh</h3>
                  <p>
                    <i className="fa fa-phone"></i>+91-6264365144
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single_industries">
                <img
                  src="assets/images/aboutus_img/tanmay.jpg"
                  alt=""
                  className="img-fluid" 
                U
                />
                <div className="single_industries_text">
                  <h3>Tanmay Soni</h3>
                  <p>
                    <i className="fa fa-phone"></i>+91-9329847520
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single_industries">
                <img
                  src="assets/images/aboutus_img/shubhangi.jpg"
                  alt=""
                  className="img-fluid" 
                U
                />
                <div className="single_industries_text">
                  <h3>Shubhangi Sharma</h3>
                  <p>
                    <i className="fa fa-phone"></i>+91-7489488979
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single_industries">
                <img
                  src="assets/images/aboutus_img/kuldeep.jpg"
                  alt=""
                  className="img-fluid" 
                U
                />
                <div className="single_industries_text">
                  <h3>Kuldeep Patel</h3>
                  <p>
                    <i className="fa fa-phone"></i>+91-7000728570
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single_industries">
                <img
                  src="assets/images/aboutus_img/aman.jpg"
                  alt=""
                  className="img-fluid" 
                U
                />
                <div className="single_industries_text">
                  <h3>Aman Mandal</h3>
                  <p>
                    <i className="fa fa-phone"></i>+91-7225952566
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
