import React, { useEffect, useState } from "react";
import "../styles/ContactUs.css";
import { db, firebaseApp } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import { Button, Card, Modal } from "react-bootstrap";
import { useStateValue } from "../StateProvider";
import { Row, Col } from "react-bootstrap";

const Profile = () => {
  const [fullname, setFullname] = useState("");
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [member, setMember] = useState("");
  const [skills, setSkills] = useState("");
  const [workshops, setWorkshops] = useState("");
  const [interest, setInterest] = useState("");

  const history = useHistory();
  const [loader, setLoader] = useState(false);
  const [{ user }, dispatch] = useStateValue();
  const [profiles, setProfiles] = useState([]);

  const [showFullname, setShowFullname] = useState(false);
  const [showBranch, setShowBranch] = useState(false);
  const [showSemester, setShowSemester] = useState(false);
  const [showMember, setShowMember] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showInterest, setShowInterest] = useState(false);
  const [showWorkshops, setShowWorkshops] = useState(false);

  const handleCloseFullname = () => setShowFullname(false);
  const handleShowFullname = () => setShowFullname(true);

  const handleCloseBranch = () => setShowBranch(false);
  const handleShowBranch = () => setShowBranch(true);

  const handleCloseSemester = () => setShowSemester(false);
  const handleShowSemester = () => setShowSemester(true);

  const handleCloseMember = () => setShowMember(false);
  const handleShowMember = () => setShowMember(true);

  const handleCloseSkills = () => setShowSkills(false);
  const handleShowSkills = () => setShowSkills(true);

  const handleCloseWorkshops = () => setShowWorkshops(false);
  const handleShowWorkshops = () => setShowWorkshops(true);

  const handleCloseInterest = () => setShowInterest(false);
  const handleShowInterest = () => setShowInterest(true);

  const signOut = () => {
    firebaseApp.auth().signOut();
    dispatch({
      type: "LOGOUT_USER",
    });
    history.push("/");
  };

  const showPayment = () => {
    if (profiles.payment == false) {
      return <p>Payment : Not Done Payment</p>;
    } else if (profiles.payment == true) {
      return <p>Payment : Payment Done</p>;
    } else {
      return <p>Loading...</p>;
    }
  };

  const updateFullname = () => {
    db.collection("members")
      .doc(user.uid)
      .update({
        fullname: fullname,
      })
      .then(function () {
        console.log("Document successfully updated!");
        setShowFullname(false);
      });
  };

  const updateBranch = () => {
    db.collection("members")
      .doc(user.uid)
      .update({
        branch: branch,
      })
      .then(function () {
        console.log("Document successfully updated!");
        setShowBranch(false);
      });
  };

  const updateSemester = () => {
    db.collection("members")
      .doc(user.uid)
      .update({
        semester: semester,
      })
      .then(function () {
        console.log("Document successfully updated!");
        setShowSemester(false);
      });
  };

  const updateMember = () => {
    db.collection("members")
      .doc(user.uid)
      .update({
        member: member,
      })
      .then(function () {
        console.log("Document successfully updated!");
        setShowMember(false);
      });
  };

  const updateSkills = () => {
    db.collection("members")
      .doc(user.uid)
      .update({
        skills: skills,
      })
      .then(function () {
        console.log("Document successfully updated!");
        setShowSkills(false);
      });
  };

  const updateWorkshops = () => {
    db.collection("members")
      .doc(user.uid)
      .update({
        workshops: workshops,
      })
      .then(function () {
        console.log("Document successfully updated!");
        setShowWorkshops(false);
      });
  };

  const updateInterest = () => {
    db.collection("members")
      .doc(user.uid)
      .update({
        interest: interest,
      })
      .then(function () {
        console.log("Document successfully updated!");
        setShowInterest(false);
      });
  };

  useEffect(() => {
    if (user) {
      db.collection("members")
        .doc(user.uid)
        .onSnapshot(function (doc) {
          const data = doc.data();
          setProfiles(data);
        });
    }
  }, [user]);

  return (
    <div>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Profile</h1>
        <br />
        <br />
        <Row>
          <Col>
            {user && (
              <>
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    width="100"
                    height="100"
                    alt="avatar"
                  />
                ) : (
                  <img
                    src={"/assets/images/sampleProfile.png"}
                    width="100"
                    height="100"
                  />
                )}

                <p>{user.displayName}</p>
                <p>{user.email}</p>
                <Link href="/home">
                  <Button onClick={signOut}>
                    <span className="fa fa-user"></span> Logout{" "}
                  </Button>
                  <br />
                  <br />
                  <Button>Delete Account</Button>
                  {/* Below code is for deleting the account */}
                  {/* <Button onClick={event => db.collection('members').doc(user.uid).delete() && user.delete().then(function() {
                          console.log("user Deleted")
                          {signOut()}
                    })} >Delete Account</Button> */}
                </Link>
              </>
            )}
          </Col>
          <Col>
            {user && (
              <>
                <Card>
                  <Card.Body>
                    Full Name : {profiles.fullname}
                    <Button
                      style={{ float: "right" }}
                      variant="primary"
                      onClick={handleShowFullname}
                    >
                      Edit
                    </Button>
                    <Modal
                      show={showFullname}
                      onHide={handleCloseFullname}
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
                        Full Name :
                        <input
                          placeholder={profiles.fullname}
                          value={fullname}
                          onChange={(event) => setFullname(event.target.value)}
                        />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={handleCloseFullname}
                        >
                          Close
                        </Button>
                        <Button variant="primary" onClick={updateFullname}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Body>
                    Branch : {profiles.branch}
                    <Button
                      style={{ float: "right" }}
                      variant="primary"
                      onClick={handleShowBranch}
                    >
                      Edit
                    </Button>
                    <Modal
                      show={showBranch}
                      onHide={handleCloseBranch}
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
                        Branch :
                        <input
                          placeholder={profiles.branch}
                          value={branch}
                          onChange={(event) => setBranch(event.target.value)}
                        />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseBranch}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={updateBranch}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    Semester : {profiles.semester}
                    <Button
                      style={{ float: "right" }}
                      variant="primary"
                      onClick={handleShowSemester}
                    >
                      Edit
                    </Button>
                    <Modal
                      show={showSemester}
                      onHide={handleCloseSemester}
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
                        Semester :
                        <input
                          placeholder={profiles.semester}
                          value={semester}
                          onChange={(event) => setSemester(event.target.value)}
                        />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={handleCloseSemester}
                        >
                          Close
                        </Button>
                        <Button variant="primary" onClick={updateSemester}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    Member : {profiles.member}
                    <Button
                      style={{ float: "right" }}
                      variant="primary"
                      onClick={handleShowMember}
                    >
                      Edit
                    </Button>
                    <Modal
                      show={showMember}
                      onHide={handleCloseMember}
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
                        Member :
                        <input
                          placeholder={profiles.member}
                          value={member}
                          onChange={(event) => setMember(event.target.value)}
                        />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseMember}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={updateMember}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    Skills : {profiles.skills}
                    <Button
                      style={{ float: "right" }}
                      variant="primary"
                      onClick={handleShowSkills}
                    >
                      Edit
                    </Button>
                    <Modal
                      show={showSkills}
                      onHide={handleCloseSkills}
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
                        Skills :
                        <input
                          placeholder={profiles.skills}
                          value={skills}
                          onChange={(event) => setSkills(event.target.value)}
                        />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseSkills}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={updateSkills}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    Workshops : {profiles.workshops}
                    <Button
                      style={{ float: "right" }}
                      variant="primary"
                      onClick={handleShowWorkshops}
                    >
                      Edit
                    </Button>
                    <Modal
                      show={showWorkshops}
                      onHide={handleCloseWorkshops}
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
                        WorkShops :
                        <input
                          placeholder={profiles.workshops}
                          value={workshops}
                          onChange={(event) => setWorkshops(event.target.value)}
                        />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={handleCloseWorkshops}
                        >
                          Close
                        </Button>
                        <Button variant="primary" onClick={updateWorkshops}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Card.Body>
                </Card>

                {/* <p>Interest : {profiles.interest}</p> */}
                <Card>
                  <Card.Body>
                    Interest : {profiles.interest}
                    <Button
                      style={{ float: "right" }}
                      variant="primary"
                      onClick={handleShowInterest}
                    >
                      Edit
                    </Button>
                    <Modal
                      show={showInterest}
                      onHide={handleCloseInterest}
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
                        Interest :
                        <input
                          placeholder={profiles.interest}
                          value={interest}
                          onChange={(event) => setInterest(event.target.value)}
                        />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={handleCloseInterest}
                        >
                          Close
                        </Button>
                        <Button variant="primary" onClick={updateInterest}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Body>{showPayment()}</Card.Body>
                </Card>
              </>
            )}
          </Col>
        </Row>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Profile;
