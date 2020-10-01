import React, {useState,Component} from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import "../styles/Register.css";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "../firebase";
import { useStateValue } from "../StateProvider";
import firebase from 'firebase';

function RegisterComponents() {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); //this stops the refresh!!!
    //do the login logic ...

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged ini, redirect to homepage
        // console.log(auth.user);
        dispatch({
          type: "SET_USER",
          user: auth.user,
        });
        history.push("/profile");
      })
      .catch((e) => alert(e.message));
  };

  const onSubmit = () => {  
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log(result);
      dispatch({
        type: "SET_USER",
        user: result.user,
      });

      const usersRef = db.collection('members').doc(result.user.uid)

      usersRef.get()
        .then((docSnapshot) => {
          if (docSnapshot.exists) {
              console.log("exists", docSnapshot)
          } else {
          db.collection('members').doc(result.user.uid).set({
          fullname : result.user.displayName,
          email: result.user.email,
          id: 2,
          branch: 'N/A',
          semester: 'N/A',
          member: 'N/A',
          skills: 'N/A',
          workshops: 'N/A',
          interest: 'N/A',
          payment: false
        })
          }
      });

      history.push("/profile");

    }).catch(function(error) {
        console.log(error)
    });
  }

  const forgotPassword = (event) => {
    event.preventDefault();

    auth.sendPasswordResetEmail(email).then(function() {
      console.log("email sent", email)
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
  }

  const register = (event) => {
    event.preventDefault(); //this stops the refresh!!!
    //do the register logic ...

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {

        console.log(auth.user);
        dispatch({
          type: "SET_USER",
          user: auth.user,
        });
        // console.log(auth.user.uid)
        db.collection('members').doc(auth.user.uid).set({
          fullname : auth.user.displayName,
          email: auth.user.email,
          id: 2,
          branch: 'N/A',
          semester: 'N/A',
          member: 'N/A',
          skills: 'N/A',
          workshops: 'N/A',
          interest: 'N/A',
          payment: false

        })
        //create a use and loggedin , redirect to homepage
        history.push("/profile");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="assets/images/logo.png"
          alt="technoHub logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login_signInButton">
            Sign In
          </button>
          <button onClick={onSubmit} type="button" className="login_signInButton" >SignIn/SignUp with Google</button>
        </form>
        <p>
          By signing-in you agree to TechnoHub Terms and Conditions of Use
          Privacy policy
        </p>
        <button onClick={forgotPassword} className="login_registerButton">
          Forgot Password
        </button>
        <button onClick={register} className="login_registerButton">
          Create Account using Email
        </button>
      </div>
    </div>
  );
// =======
// class RegisterComponents extends Component {

//     constructor(props) {
//         super(props);
//         this.handleLogin = this.handleLogin.bind(this);
//         this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
//         this.handleLogout = this.handleLogout.bind(this);
//     }

//     handleLogout() {
//         this.props.logoutUser();
//     }
    
//     handleLogin(event) {
//         this.props.loginUser({username: this.username.value, password: this.password.value});
//         event.preventDefault();

//     }

//     handleGoogleLogin(event) {
//         this.props.googleLogin();
//         event.preventDefault();
//     }

//     render() {
//         if (!this.props.auth.isAuthenticated) {
//             return (
//                 <div className="login" >
                    
//                     <Link to="/" >
//                         <img className="login_logo" src="assets/images/logo.png" 
//                         alt="technoHub logo"/>
//                     </Link>
        
//                     <Form onSubmit={this.handleLogin}>
//                                     <FormGroup>
//                                         <Label htmlFor="username">Email</Label>
//                                         <Input type="text" id="username" name="username"
//                                             innerRef={(input) => this.username = input} />
//                                     </FormGroup>
//                                     <FormGroup>
//                                         <Label htmlFor="password">Password</Label>
//                                         <Input type="password" id="password" name="password"
//                                             innerRef={(input) => this.password = input}  />
//                                     </FormGroup>
//                                     <FormGroup check>
//                                         <Label check>
//                                             <Input type="checkbox" name="remember"
//                                             innerRef={(input) => this.remember = input}  />
//                                             Remember me
//                                         </Label>
//                                     </FormGroup>
//                                     <Button type="submit" value="submit" color="primary">Login</Button>
//                                 </Form>
//                                 <p></p>
//                                 <Button color="danger" onClick={this.handleGoogleLogin}><span className="fa fa-google fa-lg"></span> Login with Google</Button>
//                 </div>
//             );
//         }
//         else {
//             return (
                
//                 <div className="login"> 
//                   <Button color="success">Logged in Sucessfully !</Button>
//                     <h1>User Profile</h1>
//                     <div className="Row justify-content-around">
//                                                 <div className="navbar-text col-12">Name : {this.props.auth.user.displayName}</div>
//                                                 <div className="navbar-text col-12">Email : {this.props.auth.user.email}</div>
//                                                 <Form>
//                                     <FormGroup>
//                                         <Label htmlFor="field">Select your field</Label>
//                                         <Input type="text" id="field" name="field"
//                                             innerRef={(input) => this.field = input} />
//                                     </FormGroup>
//                                     <FormGroup>
//                                         <Label htmlFor="skills">What are your skills ?</Label>
//                                         <Input type="skills" id="skills" name="skills"
//                                             innerRef={(input) => this.skills = input}  />
//                                     </FormGroup>
//                                     <FormGroup check>
                                        
//                                     </FormGroup>
//                                     <Button type="submit" value="submit" color="primary">Update</Button>
//                                 </Form>
//                                                 <Button outline onClick={this.handleLogout}>
//                                                 <span className="fa fa-sign-out fa-lg"></span> Logout
//                                                 </Button>
//                                                 </div>
//                                                 </div>
                
//             );
//         }
        
//     }
    
// >>>>>>> master
}

export default RegisterComponents;
