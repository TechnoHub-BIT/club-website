import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import {useAuth} from '../../contexts/AuthContext';

import "./HeaderComponent.css";


function HeaderButtons() {
//   const [{ user }, dispatch] = useStateValue();
//   const [users, setUsers] = useState(null);
  const {currentUser} = useAuth()

  return (
    <span>
      {currentUser != null ? (
        <Link to="/profile">
          <Button className="headerBtn" outline>
            <span className="loginText"><i className="fa fa-user"></i> Profile</span>
          </Button>
        </Link>
      ) : (
        <Link to="/login">
          <Button className="headerBtn" outline>
            <span className="loginText"><i className="fa fa-user"></i> Login / Sign Up</span> 
          </Button>
        </Link>
      )}
    </span>
  );
}

export default HeaderButtons;
