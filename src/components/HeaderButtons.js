import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function HeaderButtons() {
  const [{ user }, dispatch] = useStateValue();
  const [users, setUsers] = useState(null);
  useEffect(() => {
    setUsers(user);
  }, [user]);
  return (
    <span>
      {user ? (
        <Link to="/profile">
          <Button outline>
            <span className="fa fa-user">Profile</span>
          </Button>
        </Link>
      ) : (
        <Link to="/register">
          <Button outline>
            <span className="fa fa-user"></span> Login/Sign Up{" "}
          </Button>
        </Link>
      )}
    </span>
  );
}

export default HeaderButtons;
