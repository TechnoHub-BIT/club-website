import React, { Component } from "react";
import "./HeaderComponent.css";
import HeaderButtons from "../HeaderButtons";
import "./NavbarComponent.css";
import { Link } from "react-router-dom";
import logoWhite from "../../../img/logos/logowhite.png";

class Header extends Component {
  constructor(props) {
    super();
    this.handleLogin = this.handleLogin.bind(this);
  }

  state = {
    navListClasses: "navList",
    navOpen: false,
  };

  toggleNav = () => {
    const toggleChange = !this.state.navOpen;

    if (toggleChange)
      this.setState({
        navListClasses: "navList open",
        navOpen: true,
      });
    else
      this.setState({
        navListClasses: "navList",
        navOpen: false,
      });
  };

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

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="navbarTop">
            <div className="hamburger" onClick={(e) => this.toggleNav(e)}>
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
            </div>
            <Link to="/">
              <img
                src={logoWhite}
                className="mobileNavLogo"
                alt="TechnoHub White Logo"
              />
            </Link>
            <ul
              className={this.state.navListClasses}
              onClick={(e) => this.toggleNav(e)}
            >
              <Link to="/">
                <img src={logoWhite} alt="TechnoHub White Logo" />
              </Link>
              <Link to="/aboutus">
                <li>ABOUT US</li>
              </Link>
              <Link to="/blog">
                <li>BLOG</li>
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
              <Link to="/tests">APTITUDE</Link>
              <HeaderButtons />
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
