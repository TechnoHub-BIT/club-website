import React from "react";
// import { Link } from 'react-router-dom';
// import photos from '/assets/images/footer_img/randomName1.jpeg';
import "./FooterComponent.css";

const footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col-xl-3 col-md-4 col-sm-6">
          <img className="whiteLogo" src="./assets/images/logowhite.png" />
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
