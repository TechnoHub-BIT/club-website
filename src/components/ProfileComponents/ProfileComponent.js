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
                        <h5>{profiles.fullname}</h5>
                        <h6>{currentUser.email}</h6>
                        <h6>Electronics and Telecommunication</h6>
                        <Button onClick={handleLogout} >
                            Log Out
                        </Button>
                    </div>
                </div>
                <div className="profileBody">
                    <div className="profileNav">
                        <div className="profileNavItem active">
                            <Link to="/profile"><i className="fas fa-info"></i> General</Link>
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

     

        )}
        </div>

    )
}

export default ProfileComponent
