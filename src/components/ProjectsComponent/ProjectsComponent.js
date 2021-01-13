import React from "react";
import { Breadcrumb, BreadcrumbItem } from "../BreadcrumbComponent/BreadcrumbComponent";
import HeadingTitle from "../HeaderComponents/HeaderTitle";
import "./ProjectsComponent.css";
import SingleProject from "./SingleProjectComponent/SingleProject";
import { Helmet } from "react-helmet";

const Projects = () => {
  return(
    <React.Fragment>
      <Helmet>
        <title>Projects | TechnoHub BITD</title>
      </Helmet>
      <HeadingTitle heading="OUR PROJECTS" image="projects.jpg" />
      <div className="gallery-container">
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
                <SingleProject img="./assets/images/projects/drone.jpg" title="Quadcopter">
                  Drone surveillance is the use of unmanned aeriel
                  vehichle to capture still images and video to gather
                  information about specific target which might be
                  idividuals, groups or environments.
                </SingleProject>

                <SingleProject img="./assets/images/projects/eyantra.jpg" title="e-yantra - Nutty Squirrel">
                  A squirrel builds itself an elevator mechanism to ease
                  its load-carrying capacity.
                </SingleProject>
                
                <SingleProject img="./assets/images/projects/firebird.jpg" title="Fire Bird V">
                  This bot detects colours and picks a particular coloured
                  box and place it to the destination.
                </SingleProject>
                
                <SingleProject img="./assets/images/projects/weight-detector.jpeg" title="Visual Weight Detector">
                  The aim of this project is to present a visual body
                  weight estimation, which is suitable for medical
                  applications.
                </SingleProject>
                
                <SingleProject img="./assets/images/projects/thagda-dam.jpg" title="Simulation of Thagda Dam">
                  Akshay Sharma’s 3D modeling of Thagda Dam park and recreation got approved by the CMO of Chhattisgarh for use in the upcoming project.
                </SingleProject>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Projects;

