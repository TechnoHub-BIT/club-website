import React,{useState, useEffect} from 'react'
import {Card, Button, Alert, CardBody} from 'reactstrap';
import {useAuth} from '../../contexts/AuthContext';
import {useHistory, Link} from 'react-router-dom';
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import "./ProfileComponents.css";
import "../input.css";
import { db } from '../../firebase';

function ProfileComponent() {
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
    async function handleLogout(){
setError('')

try {
    await logout()
    history.push('/login')
}catch{
    setError('Failed to log out')
}
    }

  useEffect(() => {
    if(currentUser){
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
                <div className="profileHeader">
                    { currentUser.photoURL ?
                        <img src={currentUser.photoURL} className="profileImage" />
                        :
                        <img src="./assets/images/profile-user.svg" className="profileImage" />
                    }

                    <div className="profileName">
                        {/* <h5>{profiles.fullname}</h5> */}
                        <h6>{currentUser.email}</h6>
                        <h6>Electronics and Telecommunication</h6>
                        <Link to="/register">
                            <Button color="primary">
                                <i className="fas fa-pencil-alt"></i> Apply for Membership
                            </Button>
                        </Link>
                        <Button onClick={handleLogout} >
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

     

        )}
        </div>

    )
}

export default ProfileComponent
