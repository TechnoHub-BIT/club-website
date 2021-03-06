import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory, Link } from "react-router-dom";
import "./ProfileComponents.css";
import "../input.css";
import { db } from "../../firebase";
import { Helmet } from "react-helmet";

const ProfileHeader = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();

  const [profiles, setProfiles] = useState([]);

  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  useEffect(() => {
    if (currentUser) {
      db.collection("members")
        .doc(currentUser.uid)
        .onSnapshot(function (doc) {
          const data = doc.data();
          setProfiles(data);
        });
    }
  }, [currentUser]);

  const memberButton = () => {
    if (profiles.payment === true)
      return (
        <Button color="primary">
          <i className="fas fa-user-check"></i>&nbsp;&nbsp;{profiles.member}{" "}
          Team Member
        </Button>
      );
    else {
      if (profiles.registrationApply === true)
        return (
          <Button color="primary">
            <i className="fas fa-clock"></i>&nbsp;&nbsp;Payment Verification
            Pending
          </Button>
        );
      else
        return (
          <Link to="/register" target="_blank">
            <Button color="primary">
              <i className="fas fa-external-link-alt"></i>&nbsp;&nbsp;Apply for
              Membership
            </Button>
          </Link>
        );
    }
  };

  //Setting the Suffix for Semester
  let suffix = "th";

  if (profiles?.semester == 1) suffix = "st";
  else if (profiles?.semester == 2) suffix = "nd";
  else if (profiles?.semester == 3) suffix = "rd";

  return (
    <div>
      <Helmet>
        <title>{profiles?.fullname + " | TechnoHub BITD"}</title>
      </Helmet>
      {currentUser && (
        <div className="profileHeader">
          {currentUser.photoURL ? (
            <img
              src={currentUser.photoURL}
              className="profileImage"
              alt="Profile"
            />
          ) : (
            <img
              src="./assets/images/profile-user.svg"
              className="profileImage"
              alt="Profile"
            />
          )}

          <div className="profileName">
            <h5>{profiles?.fullname}</h5>
            <h6>{profiles?.branch}</h6>
            {profiles?.semester !== null ? (
              <h6>
                {profiles.semester}
                {suffix} Semester
              </h6>
            ) : null}

            {memberButton()}

            <Button onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp;Log Out
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;
