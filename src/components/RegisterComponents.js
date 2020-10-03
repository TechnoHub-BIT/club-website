import React, { useState, useEffect } from "react";
import "../styles/Register.css";
import { Link, Redirect, useHistory } from "react-router-dom";
import { auth, db } from "../firebase";
import { useStateValue } from "../StateProvider";
import firebase from "firebase";

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
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        console.log(result);
        dispatch({
          type: "SET_USER",
          user: result.user,
        });

        const usersRef = db.collection("members").doc(result.user.uid);

        usersRef.get().then((docSnapshot) => {
          if (docSnapshot.exists) {
            console.log("exists", docSnapshot);
          } else {
            db.collection("members").doc(result.user.uid).set({
              fullname: result.user.displayName,
              email: result.user.email,
              id: 2,
              branch: "N/A",
              semester: "N/A",
              member: "N/A",
              skills: "N/A",
              workshops: "N/A",
              interest: "N/A",
              payment: false,
            });
          }
        });

        history.push("/profile");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const forgotPassword = (event) => {
    event.preventDefault();

    auth
      .sendPasswordResetEmail(email)
      .then(function () {
        console.log("email sent", email);
      })
      .catch(function (error) {
        // An error happened.
        console.log(error);
      });
  };

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
        db.collection("members").doc(auth.user.uid).set({
          fullname: auth.user.displayName,
          email: auth.user.email,
          id: 2,
          branch: "N/A",
          semester: "N/A",
          member: "N/A",
          skills: "N/A",
          workshops: "N/A",
          interest: "N/A",
          payment: false,
        });
        //create a use and loggedin , redirect to homepage
        history.push("/profile");
      })
      .catch((e) => alert(e.message));
  };
  if (user) return <Redirect to="/home" />;
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
          <button
            onClick={onSubmit}
            type="button"
            className="login_signInButton"
          >
            SignIn/SignUp with Google
          </button>
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
}

export default RegisterComponents;
