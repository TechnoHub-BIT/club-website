import React, { useState } from "react";
import "../styles/Register.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";

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
        console.log(auth.user);
        dispatch({
          type: "ADD_USER",
          user: auth.user,
        });
        history.push("/profile");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault(); //this stops the refresh!!!
    //do the register logic ...

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
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
        </form>
        <p>
          By signing-in you agree to TechnoHub Terms and Conditions of Use
          Privacy policy
        </p>
        <button onClick={register} className="login_registerButton">
          Create Account using Email
        </button>
      </div>
    </div>
  );
}

export default RegisterComponents;
