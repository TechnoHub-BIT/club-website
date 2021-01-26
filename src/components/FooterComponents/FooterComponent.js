import React, { useState } from "react";
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import "./FooterComponent.css";

const Footer = () => {
  const { currentUser, logout } = useAuth();

  const [error, setError] = useState('');
  const history = useHistory();

  async function handleLogout(){
      setError('')

      try {
          await logout()
          history.push('/login')
      } catch{
          setError('Failed to log out')
      }
  }
  let forMembers = null;

  if(currentUser)
    forMembers = 
      <div className="col-xl-3 col-md-4 col-sm-6">
        <h3 className="heading">For Users</h3>
        <ul className="list">
          <li>
            <i className="fas fa-angle-right"></i>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <i className="fas fa-angle-right"></i>
            <Link to="/ourmembers">Club Members</Link>
          </li>
          <li>
            <i className="fas fa-sign-out-alt"></i>
            <Link onClick={handleLogout}>Log Out</Link>
          </li>
        </ul>
      </div>
    ;

  return (
    <footer>
      <div className="row">
        <div className="col-xl-3 col-md-4 col-sm-6 firstColumn">
          <img className="whiteLogo" alt="Technohub" src="./assets/images/logowhite.png" />
          <p>
            Our goal is to provide a platform to students by students which give proper guidance, training and connectivity with school alumni and industry experts to students to become Industry ready.
          </p>
        </div>
        <div className="col-xl-3 col-md-4 col-sm-6">
          <h3 className="heading">Site Pages</h3>
          <ul className="list">
            <li>
              <i className="fas fa-angle-right"></i>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <i className="fas fa-angle-right"></i>
              <Link to="/aboutus">About the Club</Link>
            </li>
            <li>
              <i className="fas fa-angle-right"></i>
              <Link to="/achievements">Achievements</Link>
            </li>
            <li>
              <i className="fas fa-angle-right"></i>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <i className="fas fa-angle-right"></i>
              <a href="https://technoquiz.herokuapp.com/" target="_blank" rel="noreferrer">Aptitude Test</a>
            </li>
            <li>
              <i className="fas fa-angle-right"></i>
              <Link to="/projects">Our Projects</Link>
            </li>
          </ul>
        </div>

        { forMembers }
        
        <div className="col-xl-3 col-md-4 col-sm-6">
          <Link to="/contactus" style={{color: 'inherit'}}>
          <h3 className="heading">Contact Us</h3>
          </Link>
          <ul className="list">
            <li>
              <i className="fa fa-phone-alt"></i>
              <a href="tel:+916261731565">+91-6261731565</a>
            </li>
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:bit.technohub@gmail.com">bit.technohub@gmail.com</a>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <Link to="/contactus">Reach Us or Give Feedback</ Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 socialIcons">
          <div className="socialIcon">
            <a href="https://instagram.com/bit.technohub" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="socialIcon">
            <a href="https://www.facebook.com/bit.technohub" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
          </div>
          <div className="socialIcon">
            <a href="https://www.linkedin.com/company/technohubbitd/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="row developedBy">
        Site Developed by - <a href="https://instagram.com/kuldeeppatel0001" target="_blank" rel="noreferrer">Kuldeep Patel</a>,<a href="https://instagram.com/aditya0genius" target="_blank" rel="noreferrer">Aditya Deshmukh</a>,<a href="https://instagram.com/aaryan610" target="_blank" rel="noreferrer">Aaryan Khandelwal</a>&<a href="https://instagram.com/bavisettinarayan" target="_blank" rel="noreferrer">Bavisetti Narayan</a>
      </div>
    </footer>
  );
};

export default Footer;
