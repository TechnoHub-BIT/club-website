import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { useAuth } from "../../../contexts/AuthContext";
import AlertModal from "../../AlertModalComponent/AlertModalComponent";
import { useHistory } from "react-router-dom";
import EditTestComponent from "./EditTestComponent";
import { useParams } from "react-router";

const EditUserCheck = () => {
  let history = useHistory();

  const { id } = useParams();

  const { currentUser, logout } = useAuth();
  const [profiles, setProfiles] = useState([]);

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

  return (
    <React.Fragment>
      {profiles.id === 1 || profiles.id === 4 ? (
        <EditTestComponent testName={id} />
      ) : (
        <AlertModal
          message="You aren't authorized to access this page!"
          icon="exclamation"
          leftBtn="Go to Home"
          rightBtn="View Events"
          action={() => {
            history.push("/home");
          }}
          close={() => {
            history.push("/events");
          }}
        />
      )}
    </React.Fragment>
  );
};

export default EditUserCheck;
