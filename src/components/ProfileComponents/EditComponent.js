import React,{useState, useEffect} from 'react'
import {Card, Button, Alert, CardBody} from 'reactstrap';
import {useAuth} from '../../contexts/AuthContext';
import {useHistory, Link} from 'react-router-dom';
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import "./ProfileComponents.css";
import "../input.css";
import { db } from '../../firebase';
import ProfileHeader from "./ProfileHeader";

function EditComponent() {
    const [error, setError] = useState('');
    const {currentUser, logout} = useAuth()

    const [fullname, setFullname] = useState("");
    const [branch, setBranch] = useState("");
    const [semester, setSemester] = useState("");
    const [member, setMember] = useState("");
    const [skills, setSkills] = useState("");
    const [workshops, setWorkshops] = useState("");
    const [interest, setInterest] = useState("");

    const [profiles, setProfiles] = useState([]);

    const history = useHistory()
    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.push('/login')
        } catch{
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

    return (
        <div className="profileCont">
            <HeaderTitle heading="PROFILE" />
            { currentUser && (
                
            <div className="profileDetails">
                <ProfileHeader />
                <div className="profileBody">
                    <div className="profileNav">
                        <div className="profileNavItem">
                            <Link to="/profile"><i className="fas fa-house-user"></i> Dashboard</Link>
                        </div>
                        <div className="profileNavItem active">
                            <Link to="/edit"><i className="fas fa-pencil-alt"></i> Edit Profile</Link>
                        </div>
                        <div className="profileNavItem">
                            <Link to="/settings"><i className="fas fa-cogs"></i> Settings</Link>
                        </div>
                    </div>
                    <div className="profileContent">
                        <div className="general">
                            <div>
                                <h6 className="contentHeading">Personal Information</h6>
                                <div className="input-group">
                                    <input type="text" id="name" placeholder="Name" />
                                    <label for="name">Name</label>
                                </div>
                                <div className="input-group">
                                    <input type="file" id="image" placeholder="Profile Image" />
                                    <label for="image">Profile Image</label>
                                </div>
                                <div className="input-group">
                                    <select required>
                                        <option value="">Select Branch</option>
                                        <option value="1">Computer Science Engineering</option>
                                        <option value="2">Electronics and Telecommunication</option>
                                        <option value="3">Information Technology</option>
                                        <option value="4">Electronics and Electronics</option>
                                        <option value="5">Electrical Engineering</option>
                                        <option value="6">Civil Engineering</option>
                                        <option value="7">Mechanical Engineering</option>
                                        <option value="8">Others</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <select required>
                                        <option value="">Select Semester</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <input type="email" id="email" placeholder="Email" />
                                    <label for="email">Email-Id</label>
                                </div>
                                <div className="input-group">
                                    <input type="text" id="contact" placeholder="Contact No." />
                                    <label for="contact">Contact No.</label>
                                </div>
                                <Button color="primary">
                                    <i className="far fa-file"></i> Save Changes
                                </Button>
                            </div>
                            <div>
                                <h6 className="contentHeading">Field Information</h6>
                                <div className="input-group">
                                    <input type="text" id="projects" placeholder="Projects Done Till Now" />
                                    <label for="projects">Projects Done Till Now</label>
                                </div>
                                <div className="input-group">
                                    <input type="text" id="skills" placeholder="Skills you Have" />
                                    <label for="skills">Skills you Have</label>
                                </div>
                                <div className="input-group">
                                    <input type="text" id="interest" placeholder="Interested Field" />
                                    <label for="interest">Interested Field*</label>
                                </div>
                                <div className="input-group">
                                    <input type="text" id="workshop" placeholder="Workshops Attended" />
                                    <label for="workshop">Workshops Attended</label>
                                </div>
                                <Button color="primary">
                                    <i className="far fa-file"></i> Save Changes
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </div>

    )
}

export default EditComponent;