import React, { useState, Fragment } from "react";
import FAQ from "./FAQ";
import "./HomeComponent.css";
import Header from "../HeaderComponents/HeaderComponent";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Fade } from 'react-reveal';

const Home = () => {
  const [faqs, setfaqs] = useState([
    {
      question: "Why TechnoHub?",
      answer:
        "TechnoHub is the technical club of BIT Durg and hence center of technical activities. It gives a lot of area for being creative with any technical activities that interests the students. It is the kind of college club that will help you advance your knowledge by indulging in a community of like minded people.",
      open: true,
    },
    {
      question: "How can I become a member of TechnoHub?",
      answer:
        "All you need to reach out to any of the Manager or Secretary of TechnoHub and get yourself signed up. There is registration fees involved which is a One Time Investment. After that, your college club's journey begins and you will learn and participate in various technical activities and projects throughout your college life.",
      open: false,
    },
    {
      question: "What if I don't know anything about robots?",
      answer: "Its absolutely Fine! At TechnoHub, we can learn first and then work on the project.",
      open: false,
    },
    {
      question: "How many of the robots are built by faculty?",
      answer:
        "None of the Projects are built by Faculty. Technical projects built by graduate and undergraduate students under the guidance of faculty remains this club's achievement.",
      open: false,
    },
    {
      question: "How do I start a new project?",
      answer: "If you have an idea that doesn’t align with projects already going on in the club, all you have to do is- bring your project idea to one of the coordinator or manger at technohub and they will help you fund it and also to find people who will be interested in the same field and want to work together. This way you can bring your project idea to life and contribute to the club achievements along with your own!",
      open: false,
    },
    {
      question: "How is TechnoHub put up?",
      answer:
        "TechnoHub is a student-run college club. Complete planning and execution of TechnoHub are done by the scholars of BIT Durg by an efficient hardworking team. We greatly rely on the perception of “Together everyone achieves more” and \"Imagine Invent Inspire\". Every success and failure is shared equally by all people. Although every facet of TechnoHub is not any dear to one coordinator than the opposite for correct functioning, certain assortments are made within the team. Each division is run by a team for a structured and well-planned club activity. Each assortment is specialised in its own task.",
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
      <Helmet>
        <title>Home | TechnoHub BITD</title>
      </Helmet>
      <section className="servicesSection">
        <div className="container-fluid">
          <div className="serviceCont">
            <Fade up>
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
                    preferential internship and job opportunities. Develop the Team
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
            </Fade>
          </div>
        </div>
      </section>

      <section className="homeSection">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <Fade left>
              <div className="col-md-6 col-lg-6">
                <div className="sectionImage">
                  <img
                    src="./assets/images/home/our-club-supports.jpg"
                    className="img-fluid"
                    alt="People Standing in Stairs Illustration"
                  />
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="col-md-6 col-lg-6">
                <div className="sectionText">
                  <h2>Technical Activities</h2>
                  <br />
                  <p className="text-justify">
                    For the all-round development of the students and to enrich
                    their technical knowledge the institute provides a platform
                    for various student's activities. This club envisages
                    conducive platform to explore student’s latent talents and
                    also to enable them to come out with their innovative ideas.
                  </p>
                  <Link to="/events" className="btn_2">
                    Read More&nbsp;&nbsp;<i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="homeSection">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between">
            <Fade left>
              <div className="col-md-6 col-lg-6">
                <div className="sectionText text-right">
                  <h2>Management</h2>
                  <br />
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
                    Read More&nbsp;&nbsp;<i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="col-md-5 col-lg-5">
                <div className="sectionImage">
                  <img
                    src="./assets/images/home/management.jpg"
                    className="img-fluid"
                    alt="Club Management"
                  />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="faq_part">
        <div className="container">
          <div className="allign">
            <h2 className="text-center">Frequently Asked Questions</h2>
            <hr />
          </div>
          <div className="container-fluid">
            <div className="faqs">
              <Fade up>
                {faqs.map((faq, i) => (
                  <FAQ faq={faq} key={i} index={i} toggleFAQ={toggleFAQ} />
                ))}
              </Fade>
            </div>
          </div>
        </div>
      </section>

      {/* <!--::industries end::--> */}
    </Fragment>
  );
}

export default Home;
