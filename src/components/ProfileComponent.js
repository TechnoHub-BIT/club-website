import React, { useEffect, useState } from "react";
import "../styles/ContactUs.css";
import { db, firebaseApp } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import { Button, Card, Modal } from "react-bootstrap";
import { useStateValue } from "../StateProvider";
import { Row, Col } from "react-bootstrap";

const Profile = () => {
  const [fullname, setFullname] = useState("");
  // const [email, setEmail] = useState("");
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

  // const [show, setShow] = useState(false);
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

  // const Test = () => {
  //   db.collection("members").doc(user.uid)
  //   .onSnapshot(function(doc) {
  //       console.log("Current data: ", doc.data());
  //       const data = doc.data();
  //       setProfiles(data)
  //   });

  // }

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
        fullname : fullname
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
        branch : branch
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
        semester : semester
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
        member : member
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
        skills : skills
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
        workshops : workshops
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
        interest : interest
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
          console.log("Current data: ", doc.data());
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
                <img
                  src={user.photoURL}
                  width="100"
                  height="100"
                  alt="avatar"
                />
                <p>{user.displayName}</p>
                <p>{user.email}</p>
                <Link href="/home">
                  <Button onClick={signOut}>
                    <span className="fa fa-user"></span> Logout{" "}
                  </Button>
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
                  <Card.Body>Full Name : {profiles.fullname}
                  <Button style={{textAlign : 'right'}} variant="primary" onClick={handleShowFullname}>
                    Edit
                  </Button>

                  <Modal show={showFullname} onHide={handleCloseFullname} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-vcenter">Updating Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Full Name : 
                              <input placeholder={profiles.fullname} value={fullname} onChange={event => setFullname(event.target.value)} />
                      </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseFullname}>
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
                  <Card.Body>Branch : {profiles.branch}
                  <Button style={{textAlign : 'right'}} variant="primary" onClick={handleShowBranch}>
                    Edit
                  </Button>

                  <Modal show={showBranch} onHide={handleCloseBranch} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-vcenter">Updating Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Branch : 
                              <input placeholder={profiles.branch} value={branch} onChange={event => setBranch(event.target.value)} />
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
                  <Card.Body>Semester : {profiles.semester}
                  <Button style={{textAlign : 'right'}} variant="primary" onClick={handleShowSemester}>
                    Edit
                  </Button>

                  <Modal show={showSemester} onHide={handleCloseSemester} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-vcenter">Updating Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Semester : 
                              <input placeholder={profiles.semester} value={semester} onChange={event => setSemester(event.target.value)} />
                      </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseSemester}>
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
                  <Card.Body>Member : {profiles.member}
                  <Button style={{textAlign : 'right'}} variant="primary" onClick={handleShowMember}>
                    Edit
                  </Button>

                  <Modal show={showMember} onHide={handleCloseMember} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-vcenter">Updating Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Member : 
                              <input placeholder={profiles.member} value={member} onChange={event => setMember(event.target.value)} />
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
                  <Card.Body>Skills : {profiles.skills}
                  <Button style={{textAlign : 'right'}} variant="primary" onClick={handleShowSkills}>
                    Edit
                  </Button>

                  <Modal show={showSkills} onHide={handleCloseSkills} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-vcenter">Updating Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Skills : 
                              <input placeholder={profiles.skills} value={skills} onChange={event => setSkills(event.target.value)} />
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

                {/* <p>Workshops : {profiles.workshops}</p> */}
                  <Card>
                  <Card.Body>Workshops : {profiles.workshops}
                  <Button style={{float : 'right'}} variant="primary" onClick={handleShowWorkshops}>
                    Edit
                  </Button>

                  <Modal show={showWorkshops} onHide={handleCloseWorkshops} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-vcenter">Updating Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>WorkShops : 
                              <input placeholder={profiles.workshops} value={workshops} onChange={event => setWorkshops(event.target.value)} />
                      </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseWorkshops}>
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
                  <Card.Body>Interest : {profiles.interest}
                  <Button style={{textAlign : 'right'}} variant="primary" onClick={handleShowInterest}>
                    Edit
                  </Button>

                  <Modal show={showInterest} onHide={handleCloseInterest} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-vcenter">Updating Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Interest : 
                              <input placeholder={profiles.interest} value={interest} onChange={event => setInterest(event.target.value)} />
                      </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseInterest}>
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
                  <Card.Body>{showPayment()}
                  </Card.Body>
                </Card>
              </>
            )}
          </Col>
        </Row>
        <br />
        <br />
        {/* <form className="form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <label>Email</label>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Branch</label>
          <input
            placeholder="Branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          />
          <label>Semester</label>
          <input
            placeholder="Semester"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          />
          <label>Member</label>
          <input
            placeholder="Member"
            value={member}
            onChange={(e) => setMember(e.target.value)}
          />
          <label>Skills</label>
          <input
            placeholder="Skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
          <label>Workshops</label>
          <input
            placeholder="Workshops"
            value={workshops}
            onChange={(e) => setWorkshops(e.target.value)}
          />
          <label>Interest</label>
          <input
            placeholder="Interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          />
          <button
            type="submit"
            style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
          >
            Submit
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default Profile;

// // import React from 'react'
// // import { FormControl,InputLabel,Input,FormHelperText } from '@material-ui/core';
// // import {TextField,Button} from '@material-ui/core';
// // import Select from '@material-ui/core/Select';
// // import { makeStyles } from '@material-ui/core/styles';
// // import {firebaseApp} from '../firebase';

// // // const classes = useStyles();

// // // const useStyles = makeStyles((theme) => ({
// // //   formControl: {
// // //     margin: theme.spacing(2),
// // //     minWidth: 120,
// // //   },
// // //   selectEmpty: {
// // //     marginTop: theme.spacing(2),
// // //   },
// // //   root: {
// // //       flexGrow: 1,
// // //     },
// // //     paper: {
// // //       padding: theme.spacing(2),
// // //       textAlign: 'center',
// // //       color: theme.palette.text.secondary,
// // //     },
// // // }));
// // // onClick={()=>firebaseApp.auth().signOut()}
// //   class Profile extends React.Component {

// //     constructor() {
// //       super();
// //       this.state = {
// //         fullname: "",
// //         branch: "",
// //         semester: "",
// //         skills: ""
// //       };
// //     }

// //     updateInput = e => {
// //       this.setState({
// //         [e.target.name]: e.target.value
// //       });
// //     }
// //     addUser = e => {
// //       e.preventDefault();
// //       const db = firebaseApp.firestore();
// //       db.settings({
// //         timestampsInSnapshots: true
// //       });
// //       const userRef = db.collection("members").add({
// //         fullname: this.state.fullname,
// //         branch: this.state.branch,
// //         semester: this.state.semester,
// //         skills: this.state.skills
// //       });
// //       this.setState({
// //         fullname: "",
// //         branch: "",
// //         semester: "",
// //         skills: ""
// //       });
// //     };
// //     render() {
// //       return (
// //         <div>
// //             <h2>New Registration</h2>
// //             <form onSubmit={this.addUser} >
// //            <FormControl>
// //             {/* <FormControl className={classes.formControl}> */}
// //                 <InputLabel htmlFor="my-input">Full Name</InputLabel>
// //                 <Input id="fullname" aria-describedby="my-helper-text" value={this.state.fullname} onChange={this.updateInput}/>
// //             </FormControl>
// //             <FormControl >
// //                 <InputLabel htmlFor="my-input">Email address</InputLabel>
// //                 <Input id="email" aria-describedby="my-helper-text" onChange={this.updateInput}/>
// //                 <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
// //             </FormControl>
// //             <br/>
// //             <FormControl variant="outlined" >
// //               <InputLabel htmlFor="outlined-age-native-simple">Departments</InputLabel>
// //               <Select
// //                 native
// //                 label="Departments"
// //                 inputProps={{
// //                   name: 'branch',
// //                   id: 'branch',
// //                 }}
// //                 onChange={this.updateInput}
// //                 value={this.state.branch}>
// //                 <option aria-label="None" value="" />
// //                 <option value={1}>Computer Science Engineering</option>
// //                 <option value={2}>Information Technology</option>
// //                 <option value={3}>Electronics and Telecom. Engineering</option>
// //                 <option value={4}>Electrical Engineering</option>
// //                 <option value={5}>Electrical and Electronics Engineering</option>
// //                 <option value={6}>Civil Engineering</option>
// //                 <option value={7}>Mechanical Engineering</option>
// //                 <option value={8}>Master of CA</option>
// //                 <option value={9}>Master of BA</option>

// //               </Select>
// //             </FormControl>
// //             <FormControl variant="outlined" >
// //               <InputLabel htmlFor="outlined-age-native-simple">Semester</InputLabel>
// //               <Select
// //                 native
// //                 label="Semester"
// //                 inputProps={{
// //                   name: 'semester',
// //                   id: 'semester',
// //                 }}
// //                 onChange={this.updateInput}
// //                 value={this.state.semester}>
// //                 <option aria-label="None" value="" />
// //                 <option value={1}>First</option>
// //                 <option value={2}>Second</option>
// //                 <option value={3}>Third</option>
// //                 <option value={4}>Fourth</option>
// //                 <option value={5}>Fifth</option>
// //                 <option value={6}>Sixth</option>
// //                 <option value={7}>Seventh</option>
// //                 <option value={8}>Eighth</option>

// //               </Select>
// //             </FormControl>
// //             <br/>
// //             <FormControl variant="outlined" >
// //               <InputLabel htmlFor="outlined-age-native-simple">Member</InputLabel>
// //               <Select
// //                 native
// //                 label="Member"
// //                 inputProps={{
// //                   name: 'member',
// //                   id: 'member',
// //                 }}
// //               >
// //                 <option aria-label="None" value="" />
// //                 <option value={1}>Technical</option>
// //                 <option value={2}>Management</option>
// //                 <option value={3}>Both</option>
// //               </Select>
// //             </FormControl>
// //             <TextField
// //                 id="skills"
// //                 label="Skills"
// //                 placeholder="About Your Self"
// //                 multiline
// //                 variant="outlined"
// //                 onChange={this.updateInput}
// //                 value={this.state.skills} />
// //             <br/>
// //             <FormControl >
// //                 <InputLabel htmlFor="my-input">Interest</InputLabel>
// //                 <Input id="interest" aria-describedby="my-helper-text" />
// //             </FormControl>
// //             <FormControl >
// //                 <InputLabel htmlFor="my-input">WorkShops</InputLabel>
// //                 <Input id="workshops" aria-describedby="my-helper-text" />
// //             </FormControl>
// //             <Button type="submit" variant="contained" color="primary">
// //                  Submit
// //              </Button>

// //             </form>
// //         </div>
// //     )
// // }
// //   }
// // export default Profile;