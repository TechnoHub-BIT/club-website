import React,{useState} from 'react'
import {Card, Button, Alert, CardBody} from 'reactstrap';
import {useAuth} from '../../contexts/AuthContext';
import {useHistory, Link} from 'react-router-dom';
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import "./ProfileComponents.css";
import "../input.css";
import ProfileHeader from './ProfileHeader';

const RegisterComponent = () => {
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
                <ProfileHeader />
                <div className="profileBody">
                    <div className="profileNav">
                        <div className="profileNavItem">
                            <Link to="/profile"><i className="fas fa-house-user"></i> Dashboard</Link>
                        </div>
                        <div className="profileNavItem">
                            <Link to="/edit"><i className="fas fa-pencil-alt"></i> Edit Profile</Link>
                        </div>
                        <div className="profileNavItem">
                            <Link to="/settings"><i className="fas fa-cogs"></i> Settings</Link>
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
                                    <select required>
                                        <option value="">Select Role*</option>
                                        <option value="1">Technical Team Member</option>
                                        <option value="2">Management Team Member</option>
                                    </select>
                                </div>
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
                                    Apply Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterComponent;
