import React, { useEffect, useState } from "react";
import "../styles/ContactUs.css";
import { db, firebaseApp } from "../firebase";
import { Link, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useStateValue } from "../StateProvider";

const Profile = () => {
  // const [fullname, setFullname] = useState("");
  // const [email, setEmail] = useState("");
  // const [branch, setBranch] = useState("");
  // const [semester, setSemester] = useState("");
  // const [member, setMember] = useState("");
  // const [skills, setSkills] = useState("");
  // const [workshops, setWorkshops] = useState("");
  // const [interest, setInterest] = useState("");
  const history = useHistory();
  const [loader, setLoader] = useState(false);
  const [{ user }, dispatch] = useStateValue();
  const [profiles, setProfiles] = useState([]);

  const signOut = () => {
    firebaseApp.auth().signOut();
    dispatch({
      type: "LOGOUT_USER",
    });
    history.push("/");
  };

  const Test = () => {
    db.collection("members").doc(user.uid)
    .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());
        const data = doc.data();
        setProfiles(data)
    });
    
  }
  const showPayment = () => {
    if(profiles.payment == false){
      return <p>"Not Done Payment"</p>
     }else if(profiles.payment == true) {
      return  <p>"Payment Done"</p>
     }
     else {
       return <p>Loading...</p>
     }
  }
 
  // useEffect(()=>{

  //     db.collection('accounts').doc(user.uid).get().then(querySnapshot => {
  //         const data = querySnapshot.docs.map(doc => doc.data());
  //         console.log(data);
  //         setProfiles(data);
  //     });
  // },[]);

  // },[profiles]);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoader(true);

  //   db.collection("accounts")
  //     .add({
  //       fullname: fullname,
  //       email: email,
  //       branch: branch,
  //       semester: semester,
  //       member: member,
  //       skills: skills,
  //       workshops: workshops,
  //       interest: interest,
  //       id: 2,
  //     })
  //     .then(() => {
  //       setLoader(false);
  //       alert("Your Profile Submitted");
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //       setLoader(false);
  //     });

  //   setFullname("");
  //   setEmail("");
  //   setBranch("");
  //   setSemester("");
  //   setMember("");
  //   setSkills("");
  //   setWorkshops("");
  //   setInterest("");
  // };

  return (
    <div>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Profile</h1>
        <br/>
        <br/>
        <button onClick={Test} >Test</button>
        <br />
        <br/>
         { user && <>
         <img src={user.photoURL} width="100" height="100" alt="avatar"/>
         <p>{user.displayName}</p>
         <p>{user.email}</p>
         <p>Full Name : {profiles.fullname}</p>
         <p>Branch : {profiles.branch}</p>
         <p>Semester : {profiles.semester}</p>
         <p>Member : {profiles.member}</p>
         <p>Skills : {profiles.skills}</p>
         <p>Workshops : {profiles.workshops}</p>
         <p>Interest : {profiles.interest}</p>
         <p>Payment : {showPayment()}</p>

         </>}
        <br/>
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
                                       
        <Link href="/home">
          <Button onClick={signOut}>
            <span className="fa fa-user"></span> Logout{" "}
          </Button>
        </Link>
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
