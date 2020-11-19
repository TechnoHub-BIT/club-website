import React, {useState} from 'react'
import {Card, Button, Alert, CardBody} from 'reactstrap';
import {useAuth} from '../../contexts/AuthContext';
import {useHistory, Link} from 'react-router-dom';
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import "./ProfileComponents.css";
import "../input.css";

function ProfileComponent() {
    const [error, setError] = useState('');
    const {currentUser, logout} = useAuth()
    const history = useHistory()
    async function handleLogout(){
        setError('')

        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <div className="profileCont">
            <HeaderTitle heading="PROFILE" />
            <div className="profileDetails">
                <div className="profileHeader">
                    <img src="./assets/images/aboutus_img/aaryan.jpg" className="profileImage" />
                    <div className="profileName">
                        <h5>Aaryan Khandelwal</h5>
                        <h6>Electronics and Telecommunication</h6>
                        <Link to="/register">
                            <Button color="primary">
                                <i className="fas fa-pencil-alt"></i> Apply for Membership
                            </Button>
                        </Link>
                        <Button onClick={handleLogout}>
                            Log Out
                        </Button>
                    </div>
                </div>
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
                                    <select required>
                                        <option value="">Select Branch</option>
                                        <option value="1">Electronics and Telecommunication</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <select required>
                                        <option value="">Select Semester</option>
                                        <option value="1">1</option>
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
                                    <input type="text" id="interest" placeholder="Interested in" />
                                    <label for="interest">Interested In(Eg- Web Development)</label>
                                </div>
                                <div className="input-group">
                                    <input type="text" id="languages" placeholder="Known Languages" />
                                    <label for="name">Known Languages</label>
                                </div>
                                <Button color="primary">
                                    <i className="far fa-file"></i> Save Changes
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent;
