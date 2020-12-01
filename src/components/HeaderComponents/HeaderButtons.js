import React from "react";
import { Link } from "react-router-dom";
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
          <button className="headerBtn" outline>
            <span className="loginText"><i className="fa fa-user"></i>&nbsp;&nbsp;Profile</span>
          </button>
        </Link>
      ) : (
        <Link to="/login">
          <button className="headerBtn" outline>
            <span className="loginText"><i className="fa fa-user"></i>&nbsp;&nbsp;Login / Sign Up</span> 
          </button>
        </Link>
      )}
    </span>
  );
}

export default HeaderButtons;
