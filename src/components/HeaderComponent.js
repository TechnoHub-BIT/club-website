import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import {firebaseApp} from "../firebase";
import { SignedButton } from './SignedButtonComponent';
// import {AuthContext} from '../Auth';

// Message Component 
function Message(props) 
{ 
    if (props.isLoggedIn) 
        return <h1>Welcome User</h1>; 
    else
        return <h1>Please Login</h1>; 
} 
  
// Login Component 
function Login(props) 
{ 
   return( 
           <button onClick = {props.clickFunc}> 
               Login 
           </button> 
       ); 
} 
  
// Logout Component 
function Logout(props) 
{ 
    return( 
           <button onClick = {props.clickFunc}> 
               Logout 
           </button> 
       ); 
} 

class Header extends Component {

         
    constructor(props) {
        super(props);
  

        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            isLoggedIn : false
        };

        this.ifLoginClicked = this.ifLoginClicked.bind(this); 
        this.ifLogoutClicked = this.ifLogoutClicked.bind(this); 


        this.toggleNav = this.toggleNav.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.toggleModal = this.toggleModal.bind(this);

      }

      ifLoginClicked() 
      { 
          this.setState({isLoggedIn : true}); 
      } 
    
      ifLogoutClicked() 
      { 
          this.setState({isLoggedIn : false}); 
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

    // state = {
    //     user: null
    //   };

    // componentDidMount = () => {
    //         firebaseApp.auth().onAuthStateChanged(function(user) {
    //             console.log("user value")
    //             console.log(user);
    //           });
              
    //     }
    

    // showLogin = () =>{    
        
    //     // const [{currentUser}] = this.useContext(AuthContext)
    //     // const currentUser = ""
    //     // this.currentUser({
    //     //     user: useContext(AuthContext)
    //     // })        
    //     // console.log(this.state.user);

    //     if(user){
    //         console.log("yessssssssssssssss")
    //         return(
    //             <Button onClick={()=>firebaseApp.auth().signOut()} href="/home"><span className="fa fa-user"></span> Logout </Button>
    //         );
    //     }
    //     else{
    //         console.log("Nooooooooooooooooooo")
    //         return(
    //             <Button outline href="/register"><span className="fa fa-user"></span> Login/Sign Up </Button>  
               
    //         );
    //      }

    // }

    

    render() {

        // const button = <Button onClick={()=>firebaseApp.auth().signOut()} href="/home"><span className="fa fa-user"></span> Logout </Button>;
        let button;
        firebaseApp.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              button = <Button onClick={()=>firebaseApp.auth().signOut()} href="/home"><span className="fa fa-user"></span> Logout </Button>;
             
            } else {
              // No user is signed in.

                button = <Button outline href="/register"><span className="fa fa-user"></span> Login/Sign Up </Button>;
            }
          });

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
                            <NavItem>
                                <NavLink className="nav-link" to='/admin'><div className="nav-btn">Admin</div></NavLink>
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
                                    <Link to="/profile" ><Button outline ><span className="fa fa-user" >Profile</span></Button></Link>
                                  {/* <Button outline href="/profile"><span className="fa fa-user"></span> Profile </Button>  */}
                                  {/* <Button onClick={()=>firebaseApp.auth().signOut()} href="/home"><span className="fa fa-user"></span> Logout </Button> */}
                                  <Link to="/register" ><Button outline ><span className="fa fa-user"></span> Login/Sign Up </Button></Link> 
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