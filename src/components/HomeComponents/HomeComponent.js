import React, { useState, Fragment } from "react";
import FAQ from "./FAQ";
import "./HomeComponent.css";
import Header from "../HeaderComponents/HeaderComponent";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

function Home(props) {
  const [faqs, setfaqs] = useState([
    {
      question: "Why TechnoHub ?",
      answer:
        "In its attempt to provide a national platform for the youth to showcase their talents and skills in aggressive competitions, displaying latest technology and having renowned personalities motivate the youth and providing solutions to various significant problems, TechnoHub endeavors for one and all to get inspired and look up to.",
      open: true,
    },
    {
      question: "How do I start a new project ?",
      answer:
        "If you don't like any of the current projects that are being worked on in the Club, you can start your own! That is the beauty of TechnoHub, we are here for you. Just approach any coordinator and tell them about your idea. They will help you get funding and publicity so you can recruit others into your crazy robot plot.",
      open: false,
    },
    {
      question: "What if I don't know anything about robots?",
      answer:
        "That's fine! There is no entrance exam or prerequisites. No experience is required.",
      open: false,
    },
    {
      question: "How many of the robots are built by faculty ?",
      answer:
        "Absolutely none of the robots are built by faculty. They are built by a majority of undergraduate students, as well as some graduate students.",
      open: false,
    },
    {
      question: "How can I become a member ?",
      answer:
        "Even if you don't know much to begin with, you,ll learn a lot throughout the year till your graduation. Just come down to the club and any current manager can sign you up and take your dues. Note: If you pay dues that cover only one time investment. ",
      open: false,
    },
    {
      question: "How is TechnoHub put up ?",
      answer:
        "Complete planning and execution of TechnoHub are done by the students of BIT Durg in a five-layer team structure. We greatly rely upon the perception of “Together everyone achieves more”. Every success and failure is shared equally by all of us.Although every facet of TechnoHub is no dear to one coordinator than the other for proper functioning, certain assortments are made within the team. The assortments can be broadly categorised into six sections. Each domain is specialised in its own task. The various groups are Tech Team, Documentation Team, Design Team and Marketing Team. They collaboratively take care of the various happenings and initiatives of TechnoHub. ",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <Fragment>
      <Header />

      <section className="servicesSection">
        <div className="container">
          <div>
            <OwlCarousel
              className="owl-theme"
              margin={20}
              dots={false}
              loop
              autoplay
              autoplayTimeout={1500}
              autoplayHoverPause
              stagePadding={20}
            >
              <div className="services">
                <i className="fa fa-microchip"></i>
                <div className="line"></div>
                <h4>Project Development</h4>
                <div className="entinner">
                <p>
                  The focus of the TechnoHub club primarily is to help the
                  students gain practical as well as theoretical technical knowledge.
                </p>
                </div>
              </div>

              <div className="services">
                <i className="fa fa-wrench"></i>
                <div className="line"></div>
                <h4>Learn and Develop</h4>
                <div className="entinner">
                  <p>
                    Learn through exclusive capacity building programs,
                    preferential internship and job opportunities.Develop the Team
                    by participating in projects that create a huge impact.
                  </p>
                </div>
              </div>

              <div className="services">
                <i className="fa fa-users"></i>
                <div className="line"></div>
                  <h4>Leadership Skills </h4>
                  <div className="entinner">
                  <p>
                    Enhance your leadership skills and competencies in learning by
                    doing approach. Become equipped to inspire, build and manage
                    strong teams.
                  </p>
                </div>
              </div>
            
              <div className="services">
                <i className="fa fa-graduation-cap"></i>
                <div className="line"></div>
                <h4>Entrepreneurship</h4>
                <div className="entinner">
                  <p>
                    Develop an entrepreneurial mindset to innovate and create new
                    value with hands-on training and workshops Get support and
                    mentorship from the TechnoHub network for your ideas and
                    innovations.
                  </p>
                </div>
              </div>
            
              {/* <div className="services">
                <i className="fab fa-android"></i>
                <div className="line"></div>
                <h4>App & Software Development</h4>
                <div className="entinner">
                  <p>
                    Dummy text
                  </p>
                </div>
              </div>
            
              <div className="services">
                <i className="fas fa-tv"></i>
                <div className="line"></div>
                <h4>Web Development</h4>
                <div className="entinner">
                  <p>
                    Dummy text
                  </p>
                </div>
              </div> */}
            </OwlCarousel>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="allign">
          <h2>Our Club Supports</h2>
          <hr />
        </div>
        <div className="row"></div>
      </div>
      {/* <!-- about part start--> */}
      <section className="about_part section_bg section_padding">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-lg-6">
              <div className="about_img">
                <img
                  src="assets/images/technology.jpg"
                  className="img-fluid"
                  alt="Technology"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="about_text1 text-left">
                <h2>Technical Activities</h2>
                <p className="text-justify">
                  For the all-round development of the students and to enrich
                  their technical knowledge the institute provides a platform
                  for various students’ activities. This club envisages
                  conducive platform to explore student’s latent talents and
                  also to enable them to come out with their innovative ideas.
                </p>
                <Link to="/events" className="btn_2">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_bg section_padding">
        <div className="about_part1">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6 col-lg-6">
                <div className="about_text text-left">
                  <h2>Management</h2>
                  <p className="text-justify">
                    The aim of this club is to offer the ability to plan and
                    execute events throughout the college. Event Management for
                    students have the opportunity to gain experience in
                    Management and create important contacts that they can use
                    once they have completed the course. The club also aims to
                    create leadership skills, team building skills,
                    interpersonal skills and social atmosphere which will
                    encourage members to get involved in activities outside
                    their academic timetables.
                  </p>
                  <Link to="/aboutus" className="btn_2">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-lg-5">
                <div className="about_img">
                  <img
                    src="assets/images/management1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq_part">
        <div className="container">
          <div className="allign">
            <h2>Frequently Asked Questions</h2>
            <hr />
          </div>
          <div className="container-fluid">
            <div className="faqs">
              {faqs.map((faq, i) => (
                <FAQ faq={faq} key={i} index={i} toggleFAQ={toggleFAQ} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <!--::industries end::-->

    <!-- portfolio_part start--> */}
      <section className="portfolio_part">
        
      </section>
      {/*<!-- portfolio_part part end-->*/}
    </Fragment>
  );
}

export default Home;
