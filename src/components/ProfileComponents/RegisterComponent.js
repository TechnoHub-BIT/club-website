import React,{useState} from 'react'
import { Button } from 'reactstrap';
import {useAuth} from '../../contexts/AuthContext';
import {useHistory, Link} from 'react-router-dom';
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import "./ProfileComponents.css";
import "../input.css";
import ProfileHeader from './ProfileHeader';
import showRenderedFields from "../renderFields";

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
                        <div className="profileNavItem active">
                            <Link to="/register"><i className="fas fa-plus"></i> Register</Link>
                        </div>
                    </div>
                    <div className="profileContent">
                        <div className="register">
                            <div>
                                <h6 className="contentHeading">Fill in all the Necessary Details</h6>
                                <div className="input-group">
                                    <select required onChange={e => showRenderedFields(e.target.value)}>
                                        <option value="">Select Role*</option>
                                        <option value="technical">Technical Team Member</option>
                                        <option value="management">Management Team Member</option>
                                        <option value="techno-management">Techno-Management Team Member</option>
                                    </select>
                                </div>
                                <div className="input-group" technical="true" techno-management="true">
                                    <input type="text" id="projects" placeholder="Projects Done Till Now" />
                                    <label for="projects">Projects Done Till Now</label>
                                </div>
                                <div className="input-group" management="true" techno-management="true">
                                    <input type="text" id="experience" placeholder="Any Previous Experience?" />
                                    <label for="experience">Any Previous Experience?</label>
                                </div>
                                <div className="input-group" technical="true" management="true" techno-management="true">
                                    <input type="text" id="skills" placeholder="Skills you Have" />
                                    <label for="skills">Skills you Have</label>
                                </div>
                                <div className="input-group" technical="true" management="true" techno-management="true">
                                    <input type="text" id="interest" placeholder="Interested Field" />
                                    <label for="interest">Interested Field*</label>
                                </div>
                                <div className="input-group" technical="true" techno-management="true">
                                    <input type="text" id="workshop" placeholder="Workshops Attended" />
                                    <label for="workshop">Workshops Attended</label>
                                </div>
                                <p className="infoText">
                                    After Applying, submit registration charge(₹ 150) by calling on 8319560199 and get your registration approved.
                                </p>
                                <Button color="primary">
                                    <i className="fas fa-check"></i>&nbsp;&nbsp;Apply Now
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
