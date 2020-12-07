import React, { Component } from "react";
import "./HeaderComponent.css";
import HeaderButtons from "../HeaderButtons";
import "./NavbarComponent.css";
import { Link } from "react-router-dom";
import showNavbar from "../../common";

class Header extends Component {
  constructor(props) {
    super();

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
      isLoggedIn: false,
      isAdmin: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  
  handleLogin(event) {
    this.toggleModal();
    alert(
      "Username: " +
        this.username.value +
        " Password: " +
        this.password.value +
        " Remember: " +
        this.remember.checked
    );
    event.preventDefault();
  }

  componentDidMount() {
    showNavbar();
  }

  render() {
    return (
      <React.Fragment>
        <div class="header">
          <div class="navbarTop">
            <div class="hamburger">
                <div class="line line1"></div>
                <div class="line line2"></div>
                <div class="line line3"></div>
            </div>
            <Link to="/">
              <img src="./assets/images/logowhite.png" className="mobileNavLogo" />
            </Link>
            <ul className="navList">
              <Link to="/">
                <img src="./assets/images/logowhite.png" alt="TechnoHub Logo" />
              </Link>
              <Link to="/">
                <li>HOME</li>
              </Link>
              <Link to="/aboutus">
                <li>ABOUT US</li>
              </Link>
              <Link to="/gallery">
                <li>GALLERY</li>
              </Link>
              <Link to="/projects">
                <li>PROJECTS</li>
              </Link>
              <Link to="/achievements">
                <li>ACHIEVEMENTS</li>
              </Link>
              <Link to="/events">
                <li>EVENTS</li>
              </Link>
              <Link to="/ourmembers">
                <li>CLUB MEMBERS</li>
              </Link>
              <a href="https://technoquiz.herokuapp.com" target="_blank" rel="noopener noreferrer">APTITUDE</a>
              <HeaderButtons />
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
