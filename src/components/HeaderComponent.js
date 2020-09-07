import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink,Link } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
    
        this.toggleNav = this.toggleNav.bind(this);
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
      

    render() {
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="60" width="100" alt='Technohub' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><div className="nav-btn">Home</div> </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><div className="nav-btn">About Us</div></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><div className="nav-btn">Contact Us</div></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/members'><div className="nav-btn">Members</div></NavLink>
                            </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                <NavLink className="nav-link" to='/register'><span className="fa fa-user"></span><div className="nav-btn2"> Login/Sign Up</div></NavLink>
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
                                   <h5> <span></span> </h5>
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