import React from "react";
import { Link } from 'react-router-dom';
// import photos from '/assets/images/footer_img/randomName1.jpeg';
import "./FooterComponent.css";

const footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col-xl-3 col-md-4 col-sm-6 firstColumn">
          <img className="whiteLogo" alt="Technohub" src="./assets/images/logowhite.png" />
          <p>
            The ultimate goal of the TechnoHub club is to educate more students
            and make robotics and entrepreneurship an everyday phenomenon.
          </p>
        </div>
        <div className="col-xl-3 col-md-4 col-sm-6">
          <h3 className="heading">Site Pages</h3>
          <ul className="list">
            <li>
              <i className="fas fa-angle-right"></i>
              <Link to="/gallery">Club Members</Link>
            </li>
            <li>
              <i className="fas fa-angle-right"></i>
              <Link to="/achivements">Achievements</Link>
            </li>
            <li>
              <i className="fas fa-angle-right"></i>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <i className="fas fa-angle-right"></i>
              <a href="https://technoquiz.herokuapp.com/">Aptitude Test</a>
            </li>
          </ul>
        </div>
        <div className="col-xl-3 col-md-4 col-sm-6">
          <h3 className="heading">For Members</h3>
          <ul className="list">
            <li>
              <i className="fas fa-sign-in-alt"></i>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
        <div className="col-xl-3 col-md-4 col-sm-6">
          <h3 className="heading">Contact Us</h3>
          <ul className="list">
            <li>
              <i className="fa fa-phone"></i>
              <a href="tel:+916261731565">6261731565</a>
            </li>
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:technohub@gmail.com">technohub@gmail.com</a>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <a href="#">Reach Us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default footer;
