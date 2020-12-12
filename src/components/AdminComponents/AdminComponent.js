import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import "./adminComponent.css";
import { Button, Modal } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import { Breadcrumb, BreadcrumbItem } from "../BreadcrumbComponent/BreadcrumbComponent";

function AdminComponent() {

  const [contacts, setContacts] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState();
  const [payment, setPayment] = useState("");

  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleClose = () => setShow(false);
  const handleCloseDelete = () => setShowDelete(false);

  const handleShow = () => setShow(true);
  const handleShowDelete = () => setShowDelete(true);


  const [currentProfile, setCurrentProfile] = useState('');
  const {currentUser} = useAuth();

  useEffect(() => {
    
    db.collection("contacts")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        // console.log(data);
        setContacts(data);
      });

    db.collection("members").orderBy("payment")
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

      if(currentUser) {
        db.collection("members")
        .doc(currentUser.uid)
        .onSnapshot(function (doc) {
            const data = doc.data();
            setCurrentProfile(data);
        });
    }
  }, []);

 
  return (
    <div className="admin-container">
      <HeaderTitle heading="ADMIN PANEL" />
      <Breadcrumb>
          <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
          <BreadcrumbItem icon="fas fa-tachometer-alt" title="Admin Panel" status="active" />
      </Breadcrumb>

        <div className="container-fluid">
          <div className="membersList">
            {
              profiles?.map((profile, i) => {
              //Setting the Suffix for Semester
                let suffix = "th";

                if (profile.semester == 1)
                    suffix = "st";
                else if (profile.semester == 2)
                    suffix = "nd";
                else if (profile.semester == 3)
                    suffix = "rd";
                
                let classValue = "payment green";

                profile.payment ? classValue = "payment green" : classValue = "payment red";

                return (
                  <div className="singleMember" key={i}>
                    
                    <Modal
                      show={show}
                      onHide={handleClose}
                      size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                    >
                        <Modal.Header closeButton>
                          <Modal.Title id="contained-modal-title-vcenter">
                            Updating Profile
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          Payment :
                          <input
                            placeholder={profile.payment ? "true" : "false"}
                            value={payment}
                            onChange={(event) => setPayment(event.target.value)}
                            
                          />
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          <Button
                            variant="primary"
                            onClick={() => {
                              console.log(profile);
                              db.collection("members")
                                .doc(selectedProfile.uid)
                                .update({
                                  payment: payment==='true',
                                  registrationApply: false
                                })
                                .then(function () {
                                  console.log("Payment successfully updated!");
                                  setShow(false);
                                });
                            }}
                          >
                            Save Changes
                          </Button>
                        </Modal.Footer>
                      </Modal>
                      <Modal
                        show={showDelete}
                        onHide={handleCloseDelete}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                      >
                        <Modal.Header closeButton>
                          <Modal.Title id="contained-modal-title-vcenter">
                            Full Profile
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div style={{whiteSpace: 'pre-wrap'}}>

                            <strong>Full Name:</strong> {selectedProfile?.fullname},&nbsp;&nbsp;
                            <strong>Email:</strong> {selectedProfile?.email},<br />
                            <strong>Branch:</strong> {selectedProfile?.branch},&nbsp;&nbsp;
                            <strong>Semester:</strong> {selectedProfile?.semester},<br />
                            <strong>Member:</strong> {selectedProfile?.member},&nbsp;&nbsp;
                            <strong>Skills:</strong> {selectedProfile?.skills},<br />
                            <strong>Contact No.:</strong> {selectedProfile?.contactNo},&nbsp;&nbsp;
                            <strong>Projects:</strong> {selectedProfile?.projects},<br />
                            <strong>Experience:</strong> {selectedProfile?.experience},&nbsp;&nbsp;
                            <strong>Workshops:</strong> {selectedProfile?.workshops},<br />
                            <strong>Interest:</strong> {selectedProfile?.interest}

                          </div >

                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleCloseDelete}>
                            Close
                          </Button>
                          {/* <Button
                            variant="primary"
                            onClick={() => {
                              // console.log(profile);
                              // db.collection("members")
                              //   .doc(selectedProfile.uid)
                              //   .delete() &&
                                // .then(function () {
                                //   console.log("Payment successfully updated!");
                                //   setShow(false);
                                // });
                            }}
                          >
                            Delete Account
                          </Button> */}
                        </Modal.Footer>
                      </Modal>
                    <div className="leftSide">
                      <div className="name">{profile.fullname !== null ? profile.fullname : "N/A"}</div>
                      <div className="branch">{profile.branch !== null ? profile.branch : "Branch: N/A"}</div>
                      <div className="sem">{profile.semester !== null ? profile.semester + suffix + " Semester" : "Semester: N/A"}</div>
                      <div className="member">{profile.member !== null ? profile.member : "N/A"}</div>
                      <div className={classValue}>{profile.payment.toString()}</div>
                    </div>
                    <div className="rightSide">
                      <div className="email"><span>Email-Id- </span>{profile.email !== null ? profile.email : "N/A"}</div>
                      <div className="contactno"><span>Contact No.- </span>{profile.contactNo !== null ? profile.contactNo : "N/A"}</div>
                      <div className="actionBtns">
                        <Button variant="primary" onClick={() => {setSelectedProfile(profile) ; handleShow()}} style={{whiteSpace: "nowrap"}}>
                          <i className="fas fa-pencil-alt"></i>&nbsp;&nbsp;Edit
                        </Button>
                        <Button variant="primary" onClick={() => {setSelectedProfile(profile) ; handleShowDelete()}} style={{whiteSpace: "nowrap"}}>
                          <i className="fas fa-user"></i>&nbsp;&nbsp;Full Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                );
            })}
          </div>
        {
          (currentProfile.id == 1) && <div>
            <h3 className="h3-text">Messages</h3>
            <table id="example" className="display table table-responsive-sm table-responsive-md table-striped table-hover table-bordered table-sm">
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
        
        {/* </Container>  */}
      </div>
    </div>
  );
}

export default AdminComponent;
