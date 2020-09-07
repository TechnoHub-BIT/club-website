import React, {useState,Component} from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import "../styles/Register.css";
import {Link, useHistory } from "react-router-dom";
import {auth} from "../firebase";

class RegisterComponents extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.logoutUser();
    }
    
    handleLogin(event) {
        this.props.loginUser({username: this.username.value, password: this.password.value});
        event.preventDefault();

    }

    handleGoogleLogin(event) {
        this.props.googleLogin();
        event.preventDefault();
    }

    render() {
        if (!this.props.auth.isAuthenticated) {
            return (
                <div className="login" >
                    
                    <Link to="/" >
                        <img className="login_logo" src="assets/images/logo.png" 
                        alt="technoHub logo"/>
                    </Link>
        
                    <Form onSubmit={this.handleLogin}>
                                    <FormGroup>
                                        <Label htmlFor="username">Email</Label>
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
                                <p></p>
                                <Button color="danger" onClick={this.handleGoogleLogin}><span className="fa fa-google fa-lg"></span> Login with Google</Button>
                </div>
            );
        }
        else {
            return (
                
                <div className="login"> 
                  <Button color="success">Logged in Sucessfully !</Button>
                    <h1>User Profile</h1>
                    <div className="Row justify-content-around">
                                                <div className="navbar-text col-12">Name : {this.props.auth.user.displayName}</div>
                                                <div className="navbar-text col-12">Email : {this.props.auth.user.email}</div>
                                                <Form>
                                    <FormGroup>
                                        <Label htmlFor="field">Select your field</Label>
                                        <Input type="text" id="field" name="field"
                                            innerRef={(input) => this.field = input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="skills">What are your skills ?</Label>
                                        <Input type="skills" id="skills" name="skills"
                                            innerRef={(input) => this.skills = input}  />
                                    </FormGroup>
                                    <FormGroup check>
                                        
                                    </FormGroup>
                                    <Button type="submit" value="submit" color="primary">Update</Button>
                                </Form>
                                                <Button outline onClick={this.handleLogout}>
                                                <span className="fa fa-sign-out fa-lg"></span> Logout
                                                </Button>
                                                </div>
                                                </div>
                
            );
        }
        
    }
    
}

export default RegisterComponents
