import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink,Link } from 'react-router-dom';
import register from "./RegisterComponents";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
    
        this.toggleNav = this.toggleNav.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
      handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

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
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span><div className="nav-btn">Home</div> </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span><div className="nav-btn">About Us</div></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/forum'><span className="fa fa-list fa-lg"></span><div className="nav-btn">Forum</div></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span><div className="nav-btn">Contact Us</div></NavLink>
                            </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                <div class="container">
                   <div class="row align-items-center justify-content-center">
                       <div class="col-lg-10">
                            <div class="banner_text text-center">
                                <div class="banner_text_iner">
                                   <h5> <span></span> </h5>
                                   <h3> Imagine.Invent.Inspire</h3>
                                   <h1> Technohub</h1>
                                   <h3>Bhilai Institute of Technology, Durg</h3>
                                   {/*

<section id="pre" class="our_Professional team_single_Professional section_padding">

<div class="container">

<div class="row justify-content-around">

<div class="col-xl-4">

<div class="section_tittle">

<h2>President</h2>

</div>

</div>

</div>

<div class="row justify-content-around">

<div class="col-lg-4 col-sm-6">

<div class="single_industries">

<img src='img/comm/gaurav.jpeg' alt="" height="400px" width="360px" >

<div class="single_industries_text">

<h3>Kumar Gaurav</h3>

<p><i class="flaticon-phone-call"></i>+91-8434986336</p>

</div>

</div>

</div>

</div>

</div>

</section>





<section id="oc" class="our_Professional team_single_Professional section_padding">

<div class="container">

<div class="row">

<div class="col-xl-4">

<div class="section_tittle">

<h2>Overall Coordinators</h2>

</div>

</div>

</div>

<div class="row justify-content-around">

<div class="col-lg-4 col-sm-6">

<div class="single_industries">

<img src='img/comm/satyam2.jpeg' alt="" height="400px" width="360px" >

<div class="single_industries_text">

<h3>Satyam Bharadwaj</h3>

<p><i class="flaticon-phone-call"></i>+91-7781898921</p>

</div>

</div>

</div>

<div class="col-lg-4 col-sm-6">

<div class="single_industries">

<img src='img/comm/anurup2.jpg' alt="" height="400px" width="360px">

<div class="single_industries_text">

<h3>Anurup Bandyopadhyay</h3>

<p><i class="flaticon-phone-call"></i>+91-9770258799</p>

</div>

</div>

</div>

<div class="col-lg-4 col-sm-6">

<div class="single_industries">

<img src='img/comm/adi2.jpeg' alt="" height="400px" width="360px">

<div class="single_industries_text">

<h3>Aditya Nayak</h3>

<p><i class="flaticon-phone-call"></i>+91-8602199395</p>

</div>

</div>

</div>

</div>

</div>

</section>*/}
                                    <Link to="/register" className="btn_1" >Register</Link>
                                   {/* <a href="#" class="btn_1">Register </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Jumbotron>
                
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <div className="login-modal">
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                    </div>
                </Modal>
                
            </React.Fragment>
        );
    }
}


export default Header;