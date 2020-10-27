import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  
  
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "./HeaderComponent.css";
import HeaderButtons from "../HeaderButtons";

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

  render() {

    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <div className="header-logo">
                <img className="header-logo-img"
                  src="assets/images/logo.png"
                  alt="Technohub"
                />
              </div>
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="topNavbar" navbar onClick={this.toggleNav}>
                <NavItem>
                  <NavLink
                    className="nav-link"
                    to="/"
                  >
                    <div className="nav-btn">Home</div>{" "}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <div className="nav-btn">About Us</div>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <div className="nav-btn">Contact Us</div>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/events">
                    <div className="nav-btn">Events</div>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <a className="nav-link" href="https://technoquiz.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <div className="nav-btn">Aptitude</div></a>
                </NavItem>
                <NavItem>
                  <HeaderButtons />
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
