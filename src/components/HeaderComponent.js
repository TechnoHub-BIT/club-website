import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink,Link } from 'react-router-dom';
import {firebaseApp,auth} from "../firebase";
import {useStateValue} from "../StateProvider";


class Header extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            user:firebaseApp.auth().currentUser,            
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

    // firebase.auth().onAuthStateChanged(function(user) {
    //     if (user) {
    //       // User is signed in.
    //     } else {
    //       // No user is signed in.
    //     }
    //     });
//     var user = firebase.auth().currentUser;

// if (user) {
//   // User is signed in.
// } else {
//   // No user is signed in.
// }

    showLogin= () =>{    
        console.log(this.state.user)
        if(this.state.user){
            console.log("yessssssssssssssss")
            return(
                     <Button outline href="/register"><span className="fa fa-user"></span> Login/Sign Up </Button>  
            );
        }
        else{
            console.log("Nooooooooooooooooooo")
            return(
                    <Button outline href="/register"><span className="fa fa-user"></span> Lele </Button>
            );
         }

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
                                <NavLink className="nav-link"  to='/forum'><div className="nav-btn">Forum</div></NavLink>
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
                                {this.showLogin()}        
                                    {/*                                 
                                    {this.state.user ?    :
                                            console.log(user); //<div> <Button onClick={()=>firebaseApp.auth().signOut()} href="/home"><span className="fa fa-user"></span> Logout </Button>

                                            } */}
                                    
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