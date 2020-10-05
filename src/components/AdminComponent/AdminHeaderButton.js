import React, { useState, useEffect } from "react";
import { useStateValue } from "../../StateProvider";
import { db } from "../../firebase";
import { Link, useHistory } from "react-router-dom";

function AdminHeader() {
  const [{ user }] = useStateValue();
  const [isAdmin, setIsAdmin] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (user) {
      db.collection("members")
        .doc(user.uid)
        .onSnapshot(function (doc) {
          console.log("Current data: ", doc.data());
          doc?.data()?.id == 1 ? setIsAdmin(true) : setIsAdmin(false);
        });
    } else {
      history.push("/register");
    }
  }, [user]);
  return (
    <span>{isAdmin ? <div className="nav-btn">Admin</div> : <p></p>}</span>
  );
}

export default AdminHeader;
