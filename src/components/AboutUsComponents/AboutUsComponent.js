import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
} from "../BreadcrumbComponent/BreadcrumbComponent";
import Image from "./ImageComponent/ImageComponent";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import { Helmet } from "react-helmet";
import "./AboutUsStyles.css";
import { Zoom, Fade } from "react-reveal";

class About extends Component {
  state = {
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
    responsive2: {
      0: {
        items: 1,
        dots: false,
        dotsEach: false,
      },
      600: {
        items: 1,
        dots: false,
        dotsEach: false,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  render() {
    return (
      <React.Fragment>
        <HeaderTitle heading="ABOUT THE CLUB" image="about-us.jpg" />
        <Helmet>
          <title>About The Club | TechnoHub BITD</title>
        </Helmet>
        <div className="aboutus-container">
          <Breadcrumb>
            <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
            <BreadcrumbItem
              icon="fas fa-info-circle"
              title="About Us"
              status="active"
            />
          </Breadcrumb>
          <div className="container">
            <div className="row row-content align-items-center justify-content-center">
              <Fade>
                <div className="col-12 col-md-4">
                  <img
                    src="./assets/images/logo.png"
                    height="150"
                    width="260"
                    alt="Technohub"
                  />
                </div>
              </Fade>
              <Zoom>
                <div className="col-12 col-md-8">
                  <h2>TechnoHub</h2>
                  <br />
                  <p className="aboutText">
                    The club provides an ambiance for students to prepare and to
                    showcase their skills at technical events and
                    entrepreneurship held all across India and Asia in various
                    colleges with the aim to add more feathers in the cap. The
                    ultimate goal of the TechnoHub club is to educate more
                    students and make robotics and entrepreneurship an everyday
                    phenomenon. The focus of the TechnoHub club primarily is to
                    help the students gain practical as well as theoretical
                    technical knowledge. The Journey started with a mere some 4
                    members and today it is a colossal family of 250+ members.
                  </p>
                </div>
              </Zoom>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-xl-4">
                <div className="title">
                  <h2>Training & Placement Officer</h2>
                  <br />
                </div>
              </div>
            </div>
            <div className="row">
              <OwlCarousel className="owl-theme" items={1}>
                <Fade up>
                  <Image
                    path="./assets/images/members/manisha.jpg"
                    name="Dr. Manisha Sharma"
                    post="Head"
                  >
                    TPO Head
                  </Image>
                </Fade>
              </OwlCarousel>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-xl-4">
                <div className="title">
                  <h2>President</h2>
                  <br />
                </div>
              </div>
            </div>
            <div className="row">
              <OwlCarousel className="owl-theme" items={1}>
                <Fade up>
                  <Image
                    path="./assets/images/members/sachet.jpg"
                    name="Sachet Sabarad"
                    contact="7722874355"
                  >
                    Electronics and Telecommunication
                  </Image>
                </Fade>
              </OwlCarousel>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-xl-4">
                <div className="title">
                  <h2>Vice Presidents</h2>
                  <br />
                </div>
              </div>
            </div>
            <div className="row">
              <OwlCarousel
                className="owl-theme"
                autoplay
                autoplayTimeout={2000}
                autoplayHoverPause
                responsive={this.state.responsive}
              >
                <Fade up>
                  <Image
                    path="./assets/images/members/shubham.jpg"
                    name="Shubham Agrawal"
                    contact="7771878241"
                  >
                    Electronics and Telecommunication
                  </Image>

                  <Image
                    path="./assets/images/members/harsha.jpg"
                    name="Harsha Dubey"
                    contact="9111258904"
                  >
                    Electronics and Telecommunication
                  </Image>
                </Fade>
              </OwlCarousel>
            </div>
          </div>
          {/* General Manager Start */}
          <div className="container">
            <div className="row">
              <div className="col-xl-4">
                <div className="title">
                  <h2>General Managers</h2>
                  <br />
                </div>
              </div>
            </div>
            <div className="row">
              <OwlCarousel
                className="owl-theme"
                autoplay
                autoplayTimeout={2000}
                autoplayHoverPause
                responsive={this.state.responsive2}
              >
                <Fade up>
                  <Image
                    path="./assets/images/members/nirbhay.jpg"
                    name="Nirbhay Kumar"
                    contact="8210886680"
                  >
                    Electronics and Telecommunication
                  </Image>

                  <Image
                    path="./assets/images/members/saisha.jpg"
                    name="T Saisha"
                    contact="8085999174"
                  >
                    Electronics and Telecommunication
                  </Image>

                  <Image
                    path="./assets/images/members/darshita.jpg"
                    name="Darshita Mahaski"
                    contact="7999766849"
                  >
                    Electronics and Telecommunication
                  </Image>

                  <Image
                    path="./assets/images/members/rishabh.jpg"
                    name="Rishabh Deshmukh"
                    contact="9057316055"
                  >
                    Electrical and Electronics
                  </Image>
                </Fade>
              </OwlCarousel>
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
            <div className="row">
              <OwlCarousel className="owl-theme" items={1}>
                <Fade up>
                  <Image
                    path="./assets/images/members/agney.jpg"
                    name="Agney Deshkar"
                    contact="6261731565"
                  >
                    Electronics and Telecommunication
                  </Image>
                </Fade>
              </OwlCarousel>
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
            <div className="row">
              <OwlCarousel
                className="owl-theme"
                autoplay
                autoplayTimeout={2000}
                autoplayHoverPause
                responsive={this.state.responsive2}
              >
                <Fade up>
                  <Image
                    path="./assets/images/members/shubharangshu.jpg"
                    name="Shubharangshu Chakraborty"
                    post="Marketing Manager"
                    contact="9407762880"
                  >
                    Electronics and Telecommunication
                  </Image>

                  <Image
                    path="./assets/images/members/arpit.jpg"
                    name="Arpit Sahu"
                    post="Finance Manager"
                    contact="8319560199"
                  >
                    Electronics and Telecommunication
                  </Image>

                  <Image
                    path="./assets/images/members/suchi.jpg"
                    name="Suchi Agrawal"
                    post="Public Relations Manager"
                    contact="9893010932"
                  >
                    Electronics and Telecommunication
                  </Image>

                  <Image
                    path="./assets/images/members/kuldeep.jpg"
                    name="Kuldeep Patel"
                    post="Technical Lead"
                    contact="7000728570"
                  >
                    Electronics and Telecommunication
                  </Image>

                  <Image
                    path="./assets/images/members/aditya.jpg"
                    name="Aditya Deshmukh"
                    post="Technical Lead"
                    contact="9584913846"
                  >
                    Electrical and Electronics
                  </Image>

                  <Image
                    path="./assets/images/members/navya.jpg"
                    name="Navya Singh"
                    contact="6264365144"
                  >
                    Information Technology
                  </Image>
                </Fade>
              </OwlCarousel>
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
            <div className="row">
              <OwlCarousel
                className="owl-theme"
                autoplay
                autoplayTimeout={2000}
                autoplayHoverPause
                responsive={this.state.responsive2}
              >
                <Fade up>
                  <Image
                    path="./assets/images/members/kartikey.jpg"
                    name="Kartikey Rawat"
                    contact="8839256099"
                  >
                    Computer Science
                  </Image>

                  <Image
                    path="./assets/images/members/nitesh.jpg"
                    name="Nitesh Bharti"
                    contact="7354124249"
                  >
                    Mechanical
                  </Image>

                  <Image
                    path="./assets/images/members/abhishek.jpg"
                    name="Abhishek Agrawal"
                    contact="8871637776"
                  >
                    Computer Science
                  </Image>

                  <Image
                    path="./assets/images/members/tanmay.jpg"
                    name="Tanmay Soni"
                    contact="9329847520"
                  >
                    Electronics and Telecommunication
                  </Image>

                  <Image
                    path="./assets/images/members/shubhangi.jpg"
                    name="Shubhangi Sharma"
                    contact="7489488979"
                  >
                    Electronics and Telecommunication
                  </Image>

                  <Image
                    path="./assets/images/members/aman.jpg"
                    name="Aman Mandal"
                    contact="7225952566"
                  >
                    Electronics and Telecommunication
                  </Image>
                </Fade>
              </OwlCarousel>
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
            <div className="row">
              <OwlCarousel
                className="owl-theme"
                autoplay
                autoplayTimeout={2000}
                autoplayHoverPause
                responsive={this.state.responsive2}
              >
                <Fade up>
                  <Image
                    path="./assets/images/members/aaryan.jpg"
                    name="Aaryan Khandelwal"
                    contact="8103445828"
                  >
                    Electronics and Telecommunication
                  </Image>

                  <Image
                    path="./assets/images/members/narayan.jpg"
                    name="Bavisetti Narayan"
                    contact="9406108766"
                  >
                    Electronics and Telecommunication
                  </Image>

                  <Image
                    path="./assets/images/members/bipul.jpg"
                    name="Bipul Biswas"
                    contact="9358222648"
                  >
                    Electronics and Telecommunication
                  </Image>

                  <Image
                    path="./assets/images/members/saumya.jpg"
                    name="Saumya Shrivastava"
                    contact="9893475993"
                  >
                    Computer Science
                  </Image>

                  <Image
                    path="./assets/images/members/preeti.jpg"
                    name="Preeti Gabel"
                    contact="9179243009"
                  >
                    Electrical and Electronics
                  </Image>

                  <Image
                    path="./assets/images/members/rishita.jpg"
                    name="Rishita Upadhyay"
                    contact="870289342"
                  >
                    Electrical and Electronics
                  </Image>

                  <Image
                    path="./assets/images/members/kritika.jpg"
                    name="Kritika Upadhyay"
                    contact="6261516782"
                  >
                    Civil
                  </Image>

                  <Image
                    path="./assets/images/members/pawan.jpg"
                    name="Pawan Kumar"
                    contact="9340400425"
                  >
                    Electrical
                  </Image>

                  <Image
                    path="./assets/images/members/stuti.jpg"
                    name="Stuti Mishra"
                    contact="7987671690"
                  >
                    Electrical and Electronics
                  </Image>

                  <Image
                    path="./assets/images/members/anshul.jpg"
                    name="Anshul Lanjewar"
                    contact="7049223604"
                  >
                    Electrical and Electronics
                  </Image>

                  <Image
                    path="./assets/images/members/vinayak.jpg"
                    name="Vinayak Rawat"
                    contact="9571089472"
                  >
                    Computer Science
                  </Image>

                  <Image
                    path="./assets/images/members/anubhav.jpg"
                    name="Anubhav Bhatt"
                    contact="8234993336"
                  >
                    Mechanical
                  </Image>

                  <Image
                    path="./assets/images/members/sija.jpg"
                    name="Sija Badgaiyan"
                    contact="9770314575"
                  >
                    Electronics and Telecommunication
                  </Image>

                  <Image
                    path="./assets/images/members/baisali.jpg"
                    name="Vaishali Pandey"
                    contact="7828516224"
                  >
                    Electronics and Telecommunication
                  </Image>

                  <Image
                    path="./assets/images/members/aanchal.jpg"
                    name="Aanchal Makhija"
                    contact="7999354593"
                  >
                    Electronics and Telecommunication
                  </Image>

                  <Image
                    path="./assets/images/members/palak.jpg"
                    name="Palak Dewangan"
                    contact="7617236125"
                  >
                    Electrical
                  </Image>
                </Fade>
              </OwlCarousel>
            </div>
          </div>
          {/* Secretaries End */}

          <div className="container">
            <div className="row">
              <div className="col-xl-4">
                <div className="title">
                  <h2>Our Vision</h2>
                  <br />
                </div>
              </div>
            </div>
            <div className="row text-justify ml-1">
              <p>
                ‘IMAGINE INVENT INSPIRE ‘TechnoHub, revolves and works under
                this catchphrase. Think of society with the technical
                perspective and lead the society technically (technical
                startups) to spread awareness of technology. The most impressive
                thing about TechnoHub is that it believes in team work. Each and
                every session and workshop is consummate because of each and
                every individual’s contribution. It toils on the principle
                ‘IMAGINE INVENT INSPIRE ‘ where each and every individual is
                given equal opportunity . TechnoHub stands out from the rest of
                the clubs because of its assiduous members and constant guidance
                and support from the faculty members. It is a matter of
                amour-propre and repletion that TechnoHub has its own website
                wherein students get to know about the upcoming events as well
                as they get to interact with the seniors to collab with them
                having same kind of interest. Technical part of TechnoHub has
                60+ members working in the technical ground and take up projects
                and showcase their talent. Also compete with other splendid
                talent.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
