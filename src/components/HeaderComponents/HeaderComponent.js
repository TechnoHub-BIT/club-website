import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import "./HeaderComponent.css";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super();

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
        <Jumbotron>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner_text text-center">
                  <div className="banner_text_iner">
                    <div class="typewriter">
                      <h3>Imagine.Invent.Inspire</h3>
                    </div>
                    <h5>
                      {" "}
                      <span></span>{" "}
                    </h5>
                    <h1> TECHNOHUB</h1>
                    <h3>Bhilai Institute of Technology, Durg</h3>
                    <Link to="/signup">
                      <button type="button" class="ctaBtn"><i className="fas fa-user-plus"></i>&nbsp;&nbsp;Sign up Now!</button>
                    </Link>
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
