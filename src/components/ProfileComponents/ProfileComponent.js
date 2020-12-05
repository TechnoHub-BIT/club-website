import React,{useState, useEffect} from 'react'
import {useAuth} from '../../contexts/AuthContext';
import {useHistory, Link} from 'react-router-dom';
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import "./ProfileComponents.css";
import "../input.css";
import { db } from '../../firebase';
import ProfileHeader from './ProfileHeader';

function ProfileComponent() {
    const [error, setError] = useState('');
    const {currentUser, logout} = useAuth()

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
                                <p>Welcome to the TechnoHub Team,<br />Leaving is not an option here.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
}

export default ProfileComponent;