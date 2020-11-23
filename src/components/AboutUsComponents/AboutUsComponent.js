import React, { Component } from "react";
import {Breadcrumb, BreadcrumbItem} from "../BreadcrumbComponent/BreadcrumbComponent";
import Image from "./ImageComponent/ImageComponent";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import HeaderTitle from "../HeaderComponents/HeaderTitle";

import "./AboutUsStyles.css";

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
          items: 2.
        },
        1000: {
          items: 2,
        },
    },
    responsive2: {
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
          items: 3,
        },
    },
  }

  render() {
    return (
      <React.Fragment>
        {/* <NavbarPage/> */}
        <div className="aboutus-container">
          <HeaderTitle heading="ABOUT THE CLUB" />
          <Breadcrumb>
            <BreadcrumbItem title="Home" path="/" />
            <BreadcrumbItem title="About Us" status="active" />
          </Breadcrumb>
          <div className="container">
            <div className="row row-content align-items-center justify-content-center">
              <div className="col-12 col-md-4">
                <img
                  src="./assets/images/logo.png"
                  height="150"
                  width="260"
                  alt="Technohub"
                />
              </div>
              <div className="col-12 col-md-8">
                <h2>TechnoHub</h2>
                <br />
                <p className="aboutText">
                  The club provides an ambiance for students to prepare and to
                  showcase their skills at technical events and entrepreneurship
                  held all across India and Asia in various colleges with the aim
                  to add more feathers in the cap. The ultimate goal of the
                  TechnoHub club is to educate more students and make robotics and
                  entrepreneurship an everyday phenomenon.
                  The focus of the TechnoHub club primarily is to help the students gain practical as well as theoretical technical knowledge. The Journey started with a mere some 4 members and today it is a colossal family of 125+ members.
                </p>
              </div>
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
              <OwlCarousel
                className="owl-theme"
                items={1}
              >
                <Image path="./assets/images/aboutus_img/manisha.jpg" name="Dr. Manisha Sharma" post="Head">
                  TPO Head
                </Image>
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
              <OwlCarousel
                className="owl-theme"
                items={1}
              >
                <Image path="./assets/images/aboutus_img/sachet.jpg" name="Sachet Sabarad" contact="7722874355">
                  Electronics and Telecommunication
                </Image>
              </OwlCarousel>
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
            <div className="row">
              <OwlCarousel
                className="owl-theme"
                loop
                autoplay
                autoplayTimeout={2000}
                autoplayHoverPause
                responsive={this.state.responsive}
              >  
                <Image path="./assets/images/aboutus_img/shubham.jpeg" name="Shubham Agrawal" contact="7771878241" >
                  Electronics and Telecommunication
                </Image>
                
                <Image path="./assets/images/aboutus_img/harsha.jpeg" name="Harsha Dubey" contact="9111258904" >
                  Electronics and Telecommunication
                </Image>
              </OwlCarousel>
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
            <div className="row">
              <OwlCarousel
                className="owl-theme"
                loop
                autoplay
                autoplayTimeout={2000}
                autoplayHoverPause
                responsive={this.state.responsive2}
              >
                <Image path="./assets/images/aboutus_img/nirbhay.jpeg" name="Nirbhay Kumar" contact="8210886680">
                  Electronics and Telecommunication
                </Image>
              
                <Image path="./assets/images/aboutus_img/Saisha.jpeg" name="T Saisha" contact="8085999174">
                  Electronics and Telecommunication
                </Image>

                <Image path="./assets/images/aboutus_img/darshita.jpeg" name="Darshita Mahaski" contact="7999766849">
                  Electronics and Telecommunication
                </Image>
                
                <Image path="./assets/images/aboutus_img/rishabh.jpeg" name="Rishabh Deshmukh" contact="9057316055" >
                  Electrical and Electronics
                </Image>
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
              <OwlCarousel
                className="owl-theme"
                items={1}
              >
                <Image path="./assets/images/aboutus_img/agney.jpg" name="Agney Deshkar" contact="6261731565">
                  Electronics and Telecommunication
                </Image>
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
                loop
                autoplay
                autoplayTimeout={2000}
                autoplayHoverPause
                responsive={this.state.responsive2}
              >
                <Image path="./assets/images/aboutus_img/shubharangshu.jpg" name="Shubharangshu Chakraborty" post="Marketing Manager" contact="9407762880">
                  Electronics and Telecommunication
                </Image>
                
                <Image path="./assets/images/aboutus_img/arpit.jpg" name="Arpit Sahu" post="Finance Manager" contact="8319560199">
                  Electronics and Telecommunication
                </Image>
                
                <Image path="./assets/images/aboutus_img/Suchi.jpg" name="Suchi Agrawal" post="Public Relations Manager" contact="9893010932">
                  Electronics and Telecommunication
                </Image>
                <Image path="./assets/images/aboutus_img/aditya.jpg" name="Aditya Deshmukh" post="Technical Lead" contact="9584913846">
                  Electrical and Electronics
                </Image>

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
                loop
                autoplay
                autoplayTimeout={2000}
                autoplayHoverPause
                responsive={this.state.responsive2}
              >

                <Image path="./assets/images/aboutus_img/kartikey.jpg" name="Kartikey Rawat"  contact="8839256099">
                  Computer Science
                </Image>
                
                <Image path="./assets/images/aboutus_img/nitesh.jpg" name="Nitesh Bharti" contact="7354124249">
                  Mechanical
                </Image>
                
                <Image path="./assets/images/aboutus_img/abhishek.jpg" name="Abhishek Agrawal" contact="8871637776">
                  Computer Science
                </Image>
                
                <Image path="./assets/images/aboutus_img/navya.jpg" name="Navya Singh" contact="6264365144" >
                  Information Technology
                  </Image>
                  
                <Image path="./assets/images/aboutus_img/tanmay.jpg" name="Tanmay Soni" contact="9329847520">
                  Electronics and Telecommunication
                </Image>
                
                <Image path="./assets/images/aboutus_img/shubhangi.jpg" name="Shubhangi Sharma" contact="7489488979">
                  Electronics and Telecommunication
                </Image>
                
                <Image path="./assets/images/aboutus_img/kuldeep.jpg" name="Kuldeep Patel" contact="7000728570">
                  Electronics and Telecommunication
                </Image>
                
                <Image path="./assets/images/aboutus_img/aman.jpg" name="Aman Mandal" contact="7225952566" >
                  Electronics and Telecommunication
                </Image>
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
                loop
                autoplay
                autoplayTimeout={2000}
                autoplayHoverPause
                responsive={this.state.responsive2}
              >
                <Image path="./assets/images/aboutus_img/aaryan.jpg" name="Aaryan Khandelwal" contact="8103445828">
                  Electronics and Telecommunication
                </Image>
                
                <Image path="./assets/images/aboutus_img/narayan.jpg" name="Bavisetti Narayan" contact="9406108766">
                  Electronics and Telecommunication
                </Image>
                
                <Image path="./assets/images/aboutus_img/bipul.jpeg" name="Bipul Biswas" contact="9358222648">
                  Electronics and Telecommunication
                </Image>
                
                <Image path="./assets/images/aboutus_img/saumya.jpeg" name="Saumya Shrivastava" contact="9893475993">
                  Computer Science
                </Image>
                
                <Image path="./assets/images/aboutus_img/PREETI.jpeg" name="Preeti Gabel" contact="9179243009">
                  Electrical and Electronics
                </Image>
                
                <Image path="./assets/images/aboutus_img/rishita.jpeg" name="Rishita Upadhyay" contact="870289342">
                  Electrical and Electronics
                </Image>
                
                <Image path="./assets/images/aboutus_img/kritika.jpeg" name="Kritika Upadhyay" contact="6261516782">
                  Civil
                </Image>
                
                <Image path="./assets/images/aboutus_img/pawan.jpeg" name="Pawan Kumar" contact="9340400425">
                  Electrical
                </Image>
                
                <Image path="./assets/images/aboutus_img/stuti.jpeg" name="Stuti Mishra" contact="7987671690">
                  Electronics and Telecommunication
                </Image>
                
                <Image path="./assets/images/aboutus_img/anshul.jpeg" name="Anshul Lanjewar" contact="7049223604">
                  Electrical and Electronics
                </Image>
                
                <Image path="./assets/images/aboutus_img/vinayak.jpeg" name="Vinayak Rawat" contact="9571089472">
                  Computer Science
                </Image>
                
                <Image path="./assets/images/aboutus_img/anubhav.jpeg" name="Anubhav Bhatt" contact="8234993336">
                  Mechanical
                </Image>
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
                ‘IMAGINE INVENT INSPIRE ‘TechnoHub, revolves and works under this catchphrase. 
                Think of society with the technical perspective and lead the society technically (technical startups) to spread awareness of technology.
                The most impressive thing about TechnoHub is that it believes in team work. Each and every session and workshop is consummate because of each and every individual’s contribution. It toils on the principle   ‘IMAGINE INVENT INSPIRE ‘ where each and every individual is given equal opportunity . TechnoHub stands out from the rest of the clubs because of its assiduous members and constant guidance and support from the faculty members.
                It is a matter of amour-propre and repletion that TechnoHub has its own website wherein students get to know about the upcoming events as well as they get to interact with the seniors to collab with them having same kind of interest. Technical part of TechnoHub has 60+ members working in the technical ground and take up projects and showcase their talent. Also compete with other splendid talent.
              </p>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-xl-4">
                <div className="title">
                  <h2>Our Mission</h2>
                  <br />
                </div>
              </div>
            </div>
            <div className="row text-justify ml-1">
              <p>
                Forthcoming, TechnoHub has sessions delineated. A Google Developers Group (GDG) meetup event is being planned which includes talks on a wide range of technical topics where one can learn new skills through hands-on workshops. From containerizing applications to data engineering, study jams can be tailored to specific cloud topics and skill levels and much more. 
                Furthermore, many more bracing and exhilarating sessions and workshops are being planned and strategized. 
                TechnoHub grabbed each and everyone’s attention and thus today it is a colossal family of 125+ members. In mere future TechnoHub promises to increase its gargantuan family, due to its perseverance and dedication that every TechnoHub member poses. 
              </p>
            </div>
          </div>

        </div>
      </React.Fragment>
    );
  }
}

export default About;
