import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "./HeaderComponent.css";

class Header extends Component {
  constructor(props) {
    super(props);

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
            <NavbarBrand className="mr-auto" href="/home">
              <div className="header-logo">
                <img
                  src="assets/images/logo.png"
                  height="60"
                  width="100"
                  alt="Technohub"
                />
              </div>
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink
                    onClick={this.toggleNav}
                    className="nav-link"
                    to="/home"
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
                  <a className="nav-link" href="https://technoquiz.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <div className="nav-btn">Aptitude</div></a>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner_text text-center">
                  <div className="banner_text_iner">
                    <h5>
                      {" "}
                      <span></span>{" "}
                    </h5>
                    <h3> Imagine.Invent.Inspire</h3>
                    <h1> Technohub</h1>
                    <h3>Bhilai Institute of Technology, Durg</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Header;
