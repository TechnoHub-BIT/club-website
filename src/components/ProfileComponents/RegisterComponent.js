import React,{useState, useEffect} from 'react'
import { Button } from 'reactstrap';
import {useAuth} from '../../contexts/AuthContext';
import {useHistory, Link} from 'react-router-dom';
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import "./ProfileComponents.css";
import "../input.css";
import ProfileHeader from './ProfileHeader';
import showRenderedFields from "../renderFields";
import { db } from '../../firebase';

const RegisterComponent = () => {
    const [error, setError] = useState('');
    const {currentUser, logout} = useAuth()

    const [experience, setExperience] = useState("");
    const [member, setMember] = useState("");
    const [skills, setSkills] = useState("");
    const [projects, setProjects] = useState("");
    const [workshops, setWorkshops] = useState("");
    const [interest, setInterest] = useState("");

    const [profiles, setProfiles] = useState([]);


    const history = useHistory()
    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    useEffect(() => {
        if(currentUser) {
            db.collection("members")
            .doc(currentUser.uid)
            .onSnapshot(function (doc) {
                console.log("Current data: ", doc.data());
                const data = doc.data();
                setProfiles(data);
            });
 
        }
    }, [currentUser]);

    const registerUpdate = () => {
        if(member != "") {
            db.collection("members")
            .doc(currentUser.uid)
            .update({
              member: member,
            })
            .then(function () {
            //   console.log("Fullname successfully updated!");
              
            });
        }


        if(skills != "") {
            db.collection("members")
            .doc(currentUser.uid)
            .update({
              skills: skills,
            })
            .then(function () {
            //   console.log("Fullname successfully updated!");
              
            });
        }
        if(interest != "") {
            db.collection("members")
            .doc(currentUser.uid)
            .update({
              interest: interest,
            })
            .then(function () {
            //   console.log("Fullname successfully updated!");
              
            });
        }
        if(workshops != "") {
            db.collection("members")
            .doc(currentUser.uid)
            .update({
              workshops: workshops,
            })
            .then(function () {
            //   console.log("Fullname successfully updated!");
              
            });
        }
        if(projects!=""){
            db.collection("members")
            .doc(currentUser.uid)
            .update({
              projects: projects,
            })
            .then(function () {
            //   console.log("Fullname successfully updated!");
              
            });
        }
        if(experience!=""){
            db.collection("members")
            .doc(currentUser.uid)
            .update({
              experience: experience,
            })
            .then(function () {
            //   console.log("Fullname successfully updated!");
              
            });
        }
        db.collection("members")
        .doc(currentUser.uid)
        .update({
            registrationApply: true,
        })
        .then(function () {
        //   console.log("Fullname successfully updated!");
          
        });
        alert("Application Submitted!");
      };

    const paymentDone = () => {
        if (profiles.payment)
            return (
                <div style={{textAlign: "center", margin: "2em 0"}}>
                    <h3>You already are a {profiles.member} Team Member!</h3>
                    <Link to="/">
                        <Button color="primary"><i className="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp;Take me Home</Button>
                    </Link>
                </div>
            );
    }


    return (
        <div className="profileCont">
            <HeaderTitle heading="PROFILE" />
            <div className="profileDetails">
                <ProfileHeader />
                {
                    (profiles.payment == false) && 
                    <div>
                        <div className="profileBody">
                            <div className="profileNav">
                                <div className="profileNavItem">
                                    <Link to="/profile"><i className="fas fa-house-user"></i> Dashboard</Link>
                                </div>
                                <div className="profileNavItem active">
                                    <Link to="/register"><i className="fas fa-plus"></i> Register</Link>
                                </div>
                            </div>
                            <div className="profileContent">
                                <div className="register">
                                    <div>
                                        <h6 className="contentHeading">Fill in all the Necessary Details</h6>
                                        <div className="input-group">
                                            <select required onChange={e => {showRenderedFields(e.target.value); setMember(e.target.value)}}>
                                                <option value="">Select Role*</option>
                                                <option value="Technical">Technical Team Member</option>
                                                <option value="Management">Management Team Member</option>
                                                <option value="Techno-Management">Techno-Management Team Member</option>
                                            </select>
                                        </div>
                                        <div className="input-group" technical="true" techno-management="true" >
                                            <input type="text" id="projects" placeholder="Projects Done Till Now" defaultValue={profiles.projects} onChange={(event) => setProjects(event.target.value)}/>
                                            <label for="projects">Projects Done Till Now</label>
                                        </div>
                                        <div className="input-group" management="true" techno-management="true">
                                            <input type="text" id="experience" placeholder="Any Previous Experience?" defaultValue={profiles.experience} onChange={(event) => setExperience(event.target.value)}/>
                                            <label for="experience">Any Previous Experience?</label>
                                        </div>
                                        <div className="input-group" technical="true" management="true" techno-management="true">
                                            <input type="text" id="skills" placeholder="Skills you Have" defaultValue={profiles.skills} onChange={(event) => setSkills(event.target.value)} required />
                                            <label for="skills">Skills you Have*</label>
                                        </div>
                                        <div className="input-group" technical="true" management="true" techno-management="true">
                                            <input type="text" id="interest" placeholder="Interested Field" defaultValue={profiles.interest} onChange={(event) => setInterest(event.target.value)} required />
                                            <label for="interest">Interested Field*</label>
                                        </div>
                                        <div className="input-group" technical="true" techno-management="true">
                                            <input type="text" id="workshop" placeholder="Workshops Attended" defaultValue={profiles.workshops} onChange={(event) => setWorkshops(event.target.value)}/>
                                            <label for="workshop">Workshops Attended</label>
                                        </div>
                                        <p className="infoText">
                                            After applying, submit registration charge(₹ 150) by calling on
                                            <br /><a href="tel:+918319560199">+91-8319560199</a> and get your registration approved.
                                        </p>
                                        <Button color="primary" onClick={registerUpdate}>
                                            <Link style={{color: 'inherit'}} to="/profile"><i className="fas fa-check"></i>&nbsp;&nbsp;Apply Now</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>

            {
                paymentDone()
            }

        </div>
    );
};

export default RegisterComponent;
