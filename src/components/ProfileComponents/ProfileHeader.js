import React,{useState, useEffect} from 'react'
import { Button } from 'reactstrap';
import {useAuth} from '../../contexts/AuthContext';
import {useHistory, Link} from 'react-router-dom';
import "./ProfileComponents.css";
import "../input.css";
import { db } from '../../firebase';

function ProfileHeader() {
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
        <div>
            { currentUser && (
            
                <div className="profileHeader">
                    { currentUser.photoURL ?
                        <img src={currentUser.photoURL} className="profileImage" />
                        :
                        <img src="./assets/images/profile-user.svg" className="profileImage" />
                    }

                    <div className="profileName">
                        { /* <h5>{profiles.fullname}</h5> */ }
                        <h6>{currentUser.email}</h6>
                        <h6>Electronics and Telecommunication</h6>
                        <Link to="/register" target="_blank">
                            <Button color="primary">
                                <i className="fas fa-external-link-alt"></i> Apply for Membership
                            </Button>
                        </Link>
                        <Button onClick={handleLogout} >
                            Log Out
                        </Button>
                    </div>
                </div>

            )}
        </div>
    )
}

export default ProfileHeader;