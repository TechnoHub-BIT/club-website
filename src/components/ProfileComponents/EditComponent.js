import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory, Link } from "react-router-dom";
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import "./ProfileComponents.css";
import "../input.css";
import { db } from "../../firebase";
import ProfileHeader from "./ProfileHeader";

function EditComponent() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();

  const [fullname, setFullname] = useState("");
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [projects, setProjects] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [workshops, setWorkshops] = useState("");
  const [interest, setInterest] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

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
          console.log("Current data: ", doc.data());
          const data = doc.data();
          setProfiles(data);
        });
      // setFullname(profiles.fullname)
      // console.log(profiles.fullname)
      // console.log(fullname)
    }
  }, [currentUser]);

  const profileUpdate = () => {
    if (fullname !== "") {
      db.collection("members")
        .doc(currentUser.uid)
        .update({
          fullname: fullname,
        })
        .then(function () {
          console.log("Fullname successfully updated!");
        });
    }
    if (branch !== "") {
      db.collection("members")
        .doc(currentUser.uid)
        .update({
          branch: branch,
        })
        .then(function () {
          //   console.log("Fullname successfully updated!");
        });
    }
    if (semester !== "") {
      db.collection("members")
        .doc(currentUser.uid)
        .update({
          semester: semester,
        })
        .then(function () {
          //   console.log("Fullname successfully updated!");
        });
    }
    if (skills !== "") {
      db.collection("members")
        .doc(currentUser.uid)
        .update({
          skills: skills,
        })
        .then(function () {
          //   console.log("Fullname successfully updated!");
        });
    }
    if (interest !== "") {
      db.collection("members")
        .doc(currentUser.uid)
        .update({
          interest: interest,
        })
        .then(function () {
          //   console.log("Fullname successfully updated!");
        });
    }
    if (workshops !== "") {
      db.collection("members")
        .doc(currentUser.uid)
        .update({
          workshops: workshops,
        })
        .then(function () {
          //   console.log("Fullname successfully updated!");
        });
    }
    if (projects !== "") {
      db.collection("members")
        .doc(currentUser.uid)
        .update({
          projects: projects,
        })
        .then(function () {
          //   console.log("Fullname successfully updated!");
        });
    }
    if (contactNo !== "") {
      db.collection("members")
        .doc(currentUser.uid)
        .update({
          contactNo: contactNo,
        })
        .then(function () {
          //   console.log("Fullname successfully updated!");
        });
    }
    // if (photoUrl !== "") {
    //   db.collection("members")
    //     .doc(currentUser.uid)
    //     .update({
    //       photoUrl: photoUrl,
    //     })
    //     .then(function () {
    //       //   console.log("Fullname successfully updated!");
    //     });
    // }
    alert("Profile Successfully Updated");
  };

  return (
    <div className="profileCont">
      <HeaderTitle heading="PROFILE" />
      {currentUser && (
        <div className="profileDetails">
          <ProfileHeader />
          <div className="profileBody">
            <div className="profileNav">
              <div className="profileNavItem">
                <Link to="/profile">
                  <i className="fas fa-house-user"></i> Dashboard
                </Link>
              </div>
              <div className="profileNavItem active">
                <Link to="/edit">
                  <i className="fas fa-pencil-alt"></i> Edit Profile
                </Link>
              </div>
              <div className="profileNavItem">
                <Link to="/settings">
                  <i className="fas fa-cogs"></i> Settings
                </Link>
              </div>
              <div className="profileNavItem ">
                <Link to="/notifications">
                  <i className="fas fa-bell"></i> Notifications
                </Link>
              </div>
            </div>
            <div className="profileContent">
              <div className="edit">
                <div>
                  <h6 className="contentHeading">Personal Information</h6>
                  <div className="input-group">
                    <input
                      type="text"
                      id="name"
                      placeholder={profiles.fullname}
                      defaultValue={profiles.fullname}
                      onChange={(event) => setFullname(event.target.value)}
                    />
                    <label for="name">Name</label>
                  </div>
                  {/* <div className="input-group">
                                        <input type="text" id="image" placeholder="Profile Url" defaultValue={profiles.photoUrl} onChange={(event) => setPhotoUrl(event.target.value)} />
                                        <label for="image">Profile URL</label>
                                    </div> */}
                  <div className="input-group">
                    <select
                      onChange={(event) => setBranch(event.target.value)}
                      required
                    >
                      <option value="">{profiles.branch}</option>
                      <option value="Computer Science Engineering">
                        Computer Science Engineering
                      </option>
                      <option value="Electronics and Telecommunication">
                        Electronics and Telecommunication
                      </option>
                      <option value="Information Technology">
                        Information Technology
                      </option>
                      <option value="Electrical and Electronics">
                        Electrical and Electronics
                      </option>
                      <option value="Electrical Engineering">
                        Electrical Engineering
                      </option>
                      <option value="Civil Engineering">
                        Civil Engineering
                      </option>
                      <option value="Mechanical Engineering">
                        Mechanical Engineering
                      </option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <select
                      onChange={(event) => setSemester(event.target.value)}
                      required
                    >
                      <option value="">{profiles.semester}</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                    </select>
                  </div>
                  {/* <div className="input-group">
                                        <input type="email" id="email" placeholder="Email" />
                                        <label for="email">Email-Id</label>
                                    </div> */}
                  <div className="input-group">
                    <input
                      type="text"
                      id="contact"
                      placeholder="Contact No."
                      defaultValue={profiles.contactNo}
                      onChange={(event) => setContactNo(event.target.value)}
                    />
                    <label for="contact">Contact No.</label>
                  </div>
                  <Button color="primary" onClick={profileUpdate}>
                    <i className="fas fa-save"></i>&nbsp;&nbsp;Save Changes
                  </Button>
                </div>
                <div>
                  <h6 className="contentHeading">Field Information</h6>
                  {(profiles.member === "Technical" ||
                    profiles.member === "Techno-Management") && (
                    <div>
                      <div className="input-group">
                        <input
                          type="text"
                          id="projects"
                          placeholder="Projects Done Till Now"
                          defaultValue={profiles.projects}
                          onChange={(event) => setProjects(event.target.value)}
                        />
                        <label for="projects">Projects Done Till Now</label>
                      </div>
                      <div className="input-group">
                        <input
                          type="text"
                          id="workshop"
                          placeholder="Workshops Attended"
                          defaultValue={profiles.workshops}
                          onChange={(event) => setWorkshops(event.target.value)}
                        />
                        <label for="workshop">Workshops Attended</label>
                      </div>
                    </div>
                  )}
                  {(profiles.member === "Management" ||
                    profiles.member === "Techno-Management") && (
                    <div className="input-group">
                      <input
                        type="text"
                        id="experience"
                        placeholder="Any Previous Experience?"
                        defaultValue={profiles.experience}
                        onChange={(event) => setExperience(event.target.value)}
                      />
                      <label for="experience">Any Previous Experience?</label>
                    </div>
                  )}
                  <div className="input-group">
                    <input
                      type="text"
                      id="skills"
                      placeholder="Skills you Have"
                      defaultValue={profiles.skills}
                      onChange={(event) => setSkills(event.target.value)}
                    />
                    <label for="skills">Skills you Have</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      id="interest"
                      placeholder="Interested Field"
                      defaultValue={profiles.interest}
                      onChange={(event) => setInterest(event.target.value)}
                    />
                    <label for="interest">Interested Field*</label>
                  </div>
                  <Button color="primary" onClick={profileUpdate}>
                    <i className="fas fa-save"></i>&nbsp;&nbsp;Save Changes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditComponent;
