import React from "react";
import { Breadcrumb, BreadcrumbItem } from "../BreadcrumbComponent/BreadcrumbComponent";
import { Link } from "react-router-dom";
import HeadingTitle from "../HeaderComponents/HeaderTitle";

const Projects = (props) => {
    return(
        <React.Fragment>    
            <div className="gallery-container">
                <HeadingTitle heading="Our Projects" />
                <Breadcrumb>
                    <BreadcrumbItem title="Home" path="/" />
                    <BreadcrumbItem title="Our Projects" status="active" />
                </Breadcrumb>
                <div className="container">
                    <div className="row">
                        <div className="title">
                            <h2>OUR Projects</h2>
                            <br />
                        </div>
                    </div>
                    <div className="row">
                    <div className="container">
          {/* <a href="#somethingtoremovewarning" name ="rcp"></a> */}
          <div className="row">
            <div className="col-lg-12">
              <div className="card-columns">
                <div className="card ">
                  <div className="card_iner overlay">
                    <img
                      src="assets/images/Drone.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Quadcopter</h5>
                      <p className="card-text">
                        Drone surveillance is the use of unmanned aeriel
                        vehichle to capture still images and video to gather
                        information about specific target which might be
                        idividuals, groups or environments.
                      </p>
                      <a
                        href="#somethingtoremovewarning"
                        className="portfolio_btn"
                      >
                        read more{" "}
                        <img src="assets/images/right-arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card_iner overlay">
                    <img
                      src="assets/images/eyantra2.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">e-yantra - Nutty Squirrel</h5>
                      <p className="card-text">
                        A squirrel builds itself an elevator mechanism to ease
                        its load-carrying capacity.
                      </p>
                      <a
                        href="#somethingtoremovewarning"
                        className="portfolio_btn"
                      >
                        read more{" "}
                        <img src="assets/images/right-arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card_iner overlay">
                    <img
                      src="assets/images/firebird.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Fire Bird V</h5>
                      <p className="card-text">
                        This bot detects colours and picks a particular coloured
                        box and place it to the destination.
                      </p>
                      <a
                        href="#somethingtoremovewarning"
                        className="portfolio_btn"
                      >
                        read more{" "}
                        <img src="assets/images/right-arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card_iner overlay">
                    <img
                      src="assets/images/unknown.jpeg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Visual Weight Detector</h5>
                      <p className="card-text">
                        The aim of this project is to present a visual body
                        weight estimation, which is suitable for medical
                        applications.
                      </p>
                      <a
                        href="#somethingtoremovewarning"
                        className="portfolio_btn"
                      >
                        read more{" "}
                        <img src="assets/images/right-arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* <div className="card see_more_project">
                            <blockquote className="blockquote1">
                                <a href="#somethingtoremovewarning" className="btn_1">more project</a>
                            </blockquote>
                        </div> */}
              </div>
            </div>
          </div>
        </div>
                    </div>
                    </div>

            </div>

        </React.Fragment>
    );
}
export default Projects;

