import React,{useState, useEffect} from 'react'
import {useAuth} from '../../contexts/AuthContext';
import {useHistory, Link} from 'react-router-dom';
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import "./ProfileComponents.css";
import "../input.css";
import { db } from '../../firebase';
import ProfileHeader from './ProfileHeader';

const ProfileComponent = () => {
    const [error, setError] = useState('');
    const {currentUser, logout} = useAuth();

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
                console.log(data)
                setProfiles(data);
            });
            console.log(profiles)
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
                            {profiles?.payment ? (
                                                            <div className="profileNavItem">
                                                            <Link to="/edit"><i className="fas fa-pencil-alt"></i> Edit Profile</Link>
                                                        </div>
                            ):null}

                            <div className="profileNavItem">
                                <Link to="/settings"><i className="fas fa-cogs"></i> Settings</Link>
                            </div>
                        </div>
                        <div className="dashboard">
                            <div className="introMessage">
                                <h4>Well, Hello!</h4>
                                <p>Welcome to the TechnoHub Team,<br />Leaving is not an option here.</p>
                            </div>
                            <div className="statCardsCont">
                                <Link to="/projects">
                                    <div className="statCard">
                                        <div className="cardDetails">
                                            <h5>Blog Posts</h5>
                                            <h3 className="cardCount">0</h3>
                                        </div>
                                        <img src="./assets/images/profile/posts.png" />
                                    </div>
                                </Link>
                                <Link to="/events">
                                    <div className="statCard">
                                        <div className="cardDetails">
                                            <h5>Events</h5>
                                            <h3 className="cardCount">7+</h3>
                                        </div>
                                        <img src="./assets/images/profile/events.png" />
                                    </div>
                                </Link>
                                <Link to="/projects">
                                    <div className="statCard">
                                        <div className="cardDetails">
                                            <h5>Projects</h5>
                                            <h3 className="cardCount">5+</h3>
                                        </div>
                                        <img src="./assets/images/profile/projects.png" />
                                    </div>
                                </Link>
                                <Link to="/achievements">
                                    <div className="statCard">
                                        <div className="cardDetails">
                                            <h5>Achievements</h5>
                                            <h3 className="cardCount">9+</h3>
                                        </div>
                                        <img src="./assets/images/profile/achievements.png" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileComponent;