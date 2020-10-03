import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { firebaseApp } from "../firebase";
import HeaderButtons from "./HeaderButtons";
import AdminHeader from "./AdminComponent/AdminHeaderButton";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
      isLoggedIn: false,
      isAdmin: false,
      //   user: null
    };

    // this.ifLoginClicked = this.ifLoginClicked.bind(this);
    // this.ifLogoutClicked = this.ifLogoutClicked.bind(this);

    this.toggleNav = this.toggleNav.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  // ifLoginClicked() {
  //   this.setState({ isLoggedIn: true });
  // }

  // ifLogoutClicked() {
  //   this.setState({ isLoggedIn: false });
  // }

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
    let button;
    firebaseApp.auth().onAuthStateChanged(function (userIn) {
      if (userIn) {
        // User is signed in.
        button = (
          <Button onClick={() => firebaseApp.auth().signOut()} href="/home">
            <span className="fa fa-user"></span> Logout{" "}
          </Button>
        );
      } else {
        // No user is signed in.

        button = (
          <Button outline href="/register">
            <span className="fa fa-user"></span> Login/Sign Up{" "}
          </Button>
        );
      }
    });

    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logo.png"
                height="60"
                width="100"
                alt="Technohub"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
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
                  <NavLink className="nav-link" to="/members">
                    <div className="nav-btn">Members</div>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/admin">
                    <div className="nav-btn">
                      <AdminHeader />
                    </div>
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  {/* <Message isLoggedIn = {this.state.isLoggedIn}/>  */}

                  {/* { 
                                        (this.state.isLoggedIn)?( 
                                        <Logout clickFunc = {this.ifLogoutClicked} /> 
                                        ) : ( 
                                        <Login clickFunc = {this.ifLoginClicked} /> 
                                        ) 
                                    }  */}
                  <HeaderButtons />
                  {/* <Button outline href="/profile"><span className="fa fa-user"></span> Profile </Button>  */}
                  {/* <Button onClick={()=>firebaseApp.auth().signOut()} href="/home"><span className="fa fa-user"></span> Logout </Button> */}
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-10">
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
