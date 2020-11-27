import React from "react";
import { Breadcrumb, BreadcrumbItem } from "../BreadcrumbComponent/BreadcrumbComponent";
import { Link } from "react-router-dom";
import HeadingTitle from "../HeaderComponents/HeaderTitle";
import "./ProjectsComponent.css";

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
                      <h2>Our Projects</h2>
                      <br />
                  </div>
              </div>
              <div className="row">
                <div className="container">
                  {/* <a href="#somethingtoremovewarning" name ="rcp"></a> */}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="cardCont">
                        <div className="singleCard">
                          <div className="cardHeader">
                            <img className="cardImage" src="./assets/images/drone.jpg" />
                          </div>
                          <div className="cardBody">
                            <h5>Quadcopter</h5>
                            <p>
                              Drone surveillance is the use of unmanned aeriel
                              vehichle to capture still images and video to gather
                              information about specific target which might be
                              idividuals, groups or environments.
                            </p>
                          </div>
                        </div>
                        <div className="singleCard">
                          <div className="cardHeader">
                            <img className="cardImage" src="./assets/images/eyantra2.jpg" />
                          </div>
                          <div className="cardBody">
                            <h5>e-yantra - Nutty Squirrel</h5>
                              <p>
                                A squirrel builds itself an elevator mechanism to ease
                                its load-carrying capacity.
                              </p>
                          </div>
                        </div>
                        <div className="singleCard">
                          <div className="cardHeader">
                            <img className="cardImage" src="./assets/images/firebird.jpg" />
                          </div>
                          <div className="cardBody">
                            <h5>Fire Bird V</h5>
                              <p>
                                This bot detects colours and picks a particular coloured
                                box and place it to the destination.
                              </p>
                          </div>
                        </div>
                        <div className="singleCard">
                          <div className="cardHeader">
                            <img className="cardImage" src="./assets/images/firebird.jpg" />
                          </div>
                          <div className="cardBody">
                            <h5>Visual Weight Detector</h5>
                              <p>
                                The aim of this project is to present a visual body
                                weight estimation, which is suitable for medical
                                applications.
                              </p>
                          </div>
                        </div>
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

