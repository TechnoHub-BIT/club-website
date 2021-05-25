import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import "./NewMembersComponent.css";
import { Button } from "react-bootstrap";
import { useAuth } from "../../../contexts/AuthContext";
import HeaderTitle from "../../HeaderComponents/HeaderTitle";
import {
  Breadcrumb,
  BreadcrumbItem,
} from "../../BreadcrumbComponent/BreadcrumbComponent";
import showPopup from "../modal";
import "../../input.css";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const NewMembersComponent = () => {
  const [contacts, setContacts] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState();
  const [payment, setPayment] = useState("");

  const [show, setShow] = useState(false);

  const [currentProfile, setCurrentProfile] = useState("");
  const { currentUser } = useAuth();

  useEffect(() => {
    db.collection("contacts")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        // console.log(data);
        setContacts(data);
      });

    db.collection("members")
      .orderBy("payment")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            uid: doc.id,
          };
        });

        setProfiles(data);
      });

    if (currentUser) {
      db.collection("members")
        .doc(currentUser.uid)
        .onSnapshot(function (doc) {
          const data = doc.data();
          setCurrentProfile(data);
        });
    }
  }, []);

  return (
    currentProfile.id === 1 && (
      <React.Fragment>
        <HeaderTitle heading="ADMIN PANEL" />
        <div className="admin-container">
          <Breadcrumb>
            <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
            <BreadcrumbItem
              icon="fas fa-tachometer-alt"
              title="Admin Panel"
              status="active"
            />
          </Breadcrumb>

          <div className="container-fluid">
            <table id="membersExcelTable" className="table d-none">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Branch</th>
                  <th>Semester</th>
                  <th>Contact No.</th>
                </tr>
              </thead>
              <tbody>
                {profiles?.map((profile, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}.</td>
                      <td>{profile.fullname}</td>
                      <td>{profile.email}</td>
                      <td>{profile.branch}</td>
                      <td>{profile.semester}</td>
                      <td>{profile.contactNo}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="mb-4">
              <ReactHTMLTableToExcel
                className="btn btn-info"
                table="membersExcelTable"
                filename="ReportExcel"
                sheet="Sheet"
                buttonText="Export Members List as Spreadsheet"
              />
            </div>
            <div className="membersList">
              {profiles?.map((profile, i) => {
                //Setting the Suffix for Semester
                let suffix = "th";

                if (profile.semester === 1) suffix = "st";
                else if (profile.semester === 2) suffix = "nd";
                else if (profile.semester === 3) suffix = "rd";

                let classValue = "payment green";

                profile.payment
                  ? (classValue = "payment green")
                  : (classValue = "payment red");

                return (
                  <div className="singleMember" key={i}>
                    <main className="popupMenus">
                      <div className="editPopup">
                        <div className="closePopup">
                          <i className="fa fa-times"></i>
                        </div>
                        <div className="popupHeading">Edit Payment Status</div>
                        <div className="popupBody">
                          <div className="input-group">
                            <input
                              placeholder={profile.payment ? "true" : "false"}
                              value={payment}
                              onChange={(event) =>
                                setPayment(event.target.value)
                              }
                            />
                            <label for="name">
                              {profile.payment ? "true" : "false"}
                            </label>
                          </div>
                          <div className="input-group w50p">
                            <button
                              type="button"
                              className="closePopupAlternate"
                              onClick={() => {
                                console.log(profile);
                                db.collection("members")
                                  .doc(selectedProfile.uid)
                                  .update({
                                    payment: payment === "true",
                                    registrationApply: false,
                                  })
                                  .then(function () {
                                    console.log(
                                      "Payment successfully updated!"
                                    );
                                    setShow(false);
                                  });
                              }}
                            >
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="profilePopup">
                        <div className="closePopup">
                          <i className="fa fa-times"></i>
                        </div>
                        <div className="popupHeading">Full Profile</div>
                        <div className="popupBody">
                          <div className="profileDetails">
                            <div>
                              <div>
                                <strong>Full Name:</strong>{" "}
                                {selectedProfile?.fullname}
                              </div>
                              <div>
                                <strong>Email:</strong> {selectedProfile?.email}
                              </div>
                              <div>
                                <strong>Branch:</strong>{" "}
                                {selectedProfile?.branch}
                              </div>
                              <div>
                                <strong>Semester:</strong>{" "}
                                {selectedProfile?.semester}
                              </div>
                              <div>
                                <strong>Member:</strong>{" "}
                                {selectedProfile?.member}
                              </div>
                              <div>
                                <strong>Skills:</strong>{" "}
                                {selectedProfile?.skills}
                              </div>
                            </div>
                            <div>
                              <div>
                                <strong>Contact No.:</strong>{" "}
                                {selectedProfile?.contactNo}
                              </div>
                              <div>
                                <strong>Projects:</strong>{" "}
                                {selectedProfile?.projects}
                              </div>
                              <div>
                                <strong>Experience:</strong>{" "}
                                {selectedProfile?.experience}
                              </div>
                              <div>
                                <strong>Workshops:</strong>{" "}
                                {selectedProfile?.workshops}
                              </div>
                              <div>
                                <strong>Interest:</strong>{" "}
                                {selectedProfile?.interest}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </main>
                    <div className="leftSide">
                      <div className="name">
                        {profile.fullname !== null ? profile.fullname : "N/A"}
                      </div>
                      <div className="branch">
                        {profile.branch !== null
                          ? profile.branch
                          : "Branch: N/A"}
                      </div>
                      <div className="sem">
                        {profile.semester !== null
                          ? profile.semester + suffix + " Semester"
                          : "Semester: N/A"}
                      </div>
                      <div className="member">
                        {profile.member !== null ? profile.member : "N/A"}
                      </div>
                      <div className={classValue}>
                        {profile.payment.toString()}
                      </div>
                    </div>
                    <div className="rightSide">
                      <div className="email">
                        <span>Email-Id- </span>
                        {profile.email !== null ? profile.email : "N/A"}
                      </div>
                      <div className="contactno">
                        <span>Contact No.- </span>
                        {profile.contactNo !== null ? profile.contactNo : "N/A"}
                      </div>
                      <div className="actionBtns">
                        <Button
                          variant="primary"
                          onClick={() => {
                            setSelectedProfile(profile);
                            showPopup(i, "editPopup");
                          }}
                          style={{ whiteSpace: "nowrap" }}
                        >
                          <i className="fas fa-pencil-alt"></i>&nbsp;&nbsp;Edit
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() => {
                            setSelectedProfile(profile);
                            showPopup(i, "profilePopup");
                          }}
                          style={{ whiteSpace: "nowrap" }}
                        >
                          <i className="fas fa-user"></i>&nbsp;&nbsp;Full
                          Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {
              <div>
                <h3 className="h3-text">Messages</h3>
                <table
                  id="example"
                  className="display table table-responsive-sm table-responsive-md table-striped table-hover table-bordered table-sm"
                >
                  <thead className="thead-dark">
                    <tr className="text-center">
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts?.map((contact, i) => {
                      return (
                        <tr key={i}>
                          <td data-label="Name">{contact.name}</td>
                          <td data-label="Email">{contact.email}</td>
                          <td data-label="Message">{contact.message}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            }
          </div>
        </div>
      </React.Fragment>
    )
  );
};

export default NewMembersComponent;
