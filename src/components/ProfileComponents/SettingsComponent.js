import React,{useState} from 'react'
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
}catch{
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
                        <Button onClick={handleLogout} >
                            Log Out
                        </Button>
                    </div>
                </div>
                <div className="profileBody">
                    <div className="profileNav">
                        <div className="profileNavItem">
                            <Link to="/profile"><i className="fas fa-info"></i> General</Link>
                        </div>
                        <div className="profileNavItem active">
                            <Link to="/settings"><i className="fas fa-cogs"></i> Settings</Link>
                        </div>
                    </div>
                    <div className="profileContent">
                        <div className="general">
                            <div>
                                <h6 className="contentHeading">Change Password</h6>
                                <div className="input-group">
                                    <input type="password" id="old" placeholder="Old Password" />
                                    <label for="old">Old Password</label>
                                </div>
                                <div className="input-group">
                                    <input type="password" id="confirm" placeholder="Confirm Old Password" />
                                    <label for="confirm">Confirm Old Password</label>
                                </div>
                                <div className="input-group">
                                    <input type="password" id="new" placeholder="New Password" />
                                    <label for="new">New Password</label>
                                </div>
                            </div>
                            <div>
                                <h6 className="contentHeading">Account Actions</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent
