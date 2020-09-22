import React, { useState, useEffect } from "react";
import { useStateValue } from "../../StateProvider";
import { db, firebaseApp } from "../../firebase";

function AdminHeader() {
  const [{ user }, dispatch] = useStateValue();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user) {
      db.collection("members")
        .doc(user.uid)
        .onSnapshot(function (doc) {
          console.log("Current data: ", doc.data());
          doc.data().id == 1 ? setIsAdmin(true) : setIsAdmin(false);
        });
    }
  }, [user]);
  return <span>{isAdmin ? <p>Admin</p> : <p></p>}</span>;
}

export default AdminHeader;
