import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";

//Calling Bootstrap 4.5 css
import "bootstrap/dist/css/bootstrap.min.css";

//css
import "../styles/MembersList.css";

//Calling Firebase config setting to call the data
import { firebaseApp } from "../firebase";
import { useStateValue } from "../StateProvider";

function Member() {
  const [memberList, setMemberList] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  let history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/register");
    }
    firebaseApp
      .database()
      .ref("members")
      .on("value", (snapshot) => {
        snapshot.forEach((snap) => {
          // snap.val() is the dictionary with all your keys/values from the 'students-list' path
          setMemberList([...memberList, snap.val()]);
          // memberlist.push(snap.val());
        });
      });
  }, []);

  const tableStyle = {
    objectFit: "contain",
    overflow: "hidden",
  };

  return (
    <div className="MainDiv">
      <div className="container">
        <table id="example" className="display table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Full Name</th>
              <th scope="col">Branch</th>
              <th scope="col">Semester</th>
              <th scope="col">Skills</th>
            </tr>
          </thead>
          <tbody>
            {memberList?.map((data, i) => {
              return (
                <tr key={i}>
                  <td data-label="Full Name">{data.fullname}</td>
                  <td data-label="Branch">{data.branch}</td>
                  <td data-label="Semester">{data.semester}</td>
                  <td data-label="Skills">{data.skills}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Member;
