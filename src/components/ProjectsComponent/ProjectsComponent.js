import React from "react";
import { Breadcrumb, BreadcrumbItem } from "../BreadcrumbComponent/BreadcrumbComponent";
import HeadingTitle from "../HeaderComponents/HeaderTitle";
import "./ProjectsComponent.css";

const Projects = () => {
  return(
    <React.Fragment>    
      <div className="gallery-container">
        <HeadingTitle heading="OUR PROJECTS" />
        <Breadcrumb>
            <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
            <BreadcrumbItem icon="fas fa-microchip" title="Our Projects" status="active" />
        </Breadcrumb>
        <div className="container">
          <div className="row">
              <div className="title">
                  <h2>Our Projects</h2>
                  <br />
              </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="cardCont">
                <div className="singleCard">
                  <div className="cardHeader">
                    <img className="cardImage" src="./assets/images/projects/drone.jpg" />
                  </div>
                  <div className="cardBody">
                    <h3>Quadcopter</h3>
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
                    <img className="cardImage" src="./assets/images/projects/eyantra.jpg" />
                  </div>
                  <div className="cardBody">
                    <h3>e-yantra - Nutty Squirrel</h3>
                    <p>
                      A squirrel builds itself an elevator mechanism to ease
                      its load-carrying capacity.
                    </p>
                  </div>
                </div>
                <div className="singleCard">
                  <div className="cardHeader">
                    <img className="cardImage" src="./assets/images/projects/firebird.jpg" />
                  </div>
                  <div className="cardBody">
                    <h3>Fire Bird V</h3>
                    <p>
                      This bot detects colours and picks a particular coloured
                      box and place it to the destination.
                    </p>
                  </div>
                </div>
                <div className="singleCard">
                  <div className="cardHeader">
                    <img className="cardImage" src="./assets/images/projects/weight-detector.jpeg" />
                  </div>
                  <div className="cardBody">
                    <h3>Visual Weight Detector</h3>
                    <p>
                      The aim of this project is to present a visual body
                      weight estimation, which is suitable for medical
                      applications.
                    </p>
                  </div>
                </div>
                <div className="singleCard">
                  <div className="cardHeader">
                    <img className="cardImage" src="./assets/images/projects/thagda-dam.jpg" />
                  </div>
                  <div className="cardBody">
                    <h3>Simulation of Thagda Dam</h3>
                    <p>
                      Akshay Sharma’s 3D modeling of Thagda Dam park and recreation got approved by the CMO of Chhattisgarh for use in the upcoming project.
                    </p>
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

