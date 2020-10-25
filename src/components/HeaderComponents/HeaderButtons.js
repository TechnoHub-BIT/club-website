import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import {useAuth} from '../../contexts/AuthContext';


function HeaderButtons() {
//   const [{ user }, dispatch] = useStateValue();
//   const [users, setUsers] = useState(null);
  const {currentUser} = useAuth()

  return (
    <span>
      {currentUser != null ? (
        <Link to="/profile">
          <Button outline>
            <span className="fa fa-user">Profile</span>
          </Button>
        </Link>
      ) : (
        <Link to="/login">
          <Button outline>
            <span className="fa fa-user">LogIn / SignUp</span> 
          </Button>
        </Link>
      )}
    </span>
  );
}

export default HeaderButtons;
