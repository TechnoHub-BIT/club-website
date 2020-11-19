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
                        <div className="profileNavItem active">
                            <Link to="/profile"><i className="fas fa-house-user"></i> Dashboard</Link>
                        </div>
                        <div className="profileNavItem">
                            <Link to="/edit"><i className="fas fa-pencil-alt"></i> Edit Profile</Link>
                        </div>
                        <div className="profileNavItem">
                            <Link to="/settings"><i className="fas fa-cogs"></i> Settings</Link>
                        </div>
                    </div>
                    <div className="dashboard">
                        <h4>Well, Hello!</h4>
                        <p>This is your Dashboard.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent;
