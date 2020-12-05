import React,{useState, useEffect} from 'react'
import {Card, Button, Alert, CardBody} from 'reactstrap';
import {useAuth} from '../../contexts/AuthContext';
import {useHistory, Link} from 'react-router-dom';
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import "./ProfileComponents.css";
import "../input.css";
import ProfileHeader from './ProfileHeader';
import { db } from '../../firebase';

function SettingsComponent() {
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
        } catch {
            setError('Failed to log out')
        }
    }
    async function handleDelete(){
        setError('')

        try {
            await logout()                                     
                db.collection("members").doc(currentUser.uid).delete() &&
                  currentUser.delete().then(function () {
                    history.push("/");
                    console.log("user Deleted");
                  })
            history.push('/login')
        }
        catch{
            setError('Failed to Delete Account')
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
                <ProfileHeader />
                <div className="profileBody">
                    <div className="profileNav">
                        <div className="profileNavItem">
                            <Link to="/profile"><i className="fas fa-house-user"></i> Dashboard</Link>
                        </div>
                        <div className="profileNavItem">
                            <Link to="/edit"><i className="fas fa-pencil-alt"></i> Edit Profile</Link>
                        </div>
                        <div className="profileNavItem active">
                            <Link to="/settings"><i className="fas fa-cogs"></i> Settings</Link>
                        </div>
                    </div>
                    <div className="profileContent">
                        <div className="settings">
                            <div>
                                <h6 className="contentHeading">Account Actions</h6>
                                <Button color="danger" onClick={handleDelete}>
                                    <i className="far fa-trash-alt"></i>&nbsp;&nbsp;Delete Account
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    )}
        </div>
    );
}

export default SettingsComponent;
