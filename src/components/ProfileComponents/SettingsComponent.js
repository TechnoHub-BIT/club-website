import React,{useState, useEffect} from 'react'
// import { Button } from 'reactstrap';
import {useAuth} from '../../contexts/AuthContext';
import {useHistory, Link} from 'react-router-dom';
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import { Button, Modal } from "react-bootstrap";

import "./ProfileComponents.css";
import "../input.css";
import ProfileHeader from './ProfileHeader';
import { db } from '../../firebase';

function SettingsComponent() {
    const [error, setError] = useState('');
    const {currentUser, logout} = useAuth()

    const [profiles, setProfiles] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

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
                        {profiles.payment ? (
                                                            <div className="profileNavItem">
                                                            <Link to="/edit"><i className="fas fa-pencil-alt"></i> Edit Profile</Link>
                                                        </div>
                            ):null}
                        <div className="profileNavItem active">
                            <Link to="/settings"><i className="fas fa-cogs"></i> Settings</Link>
                        </div>
                    </div>
                    <div className="profileContent">
                        <div className="settings">
                            <div>
                                <h6 className="contentHeading">Account Actions</h6>

                    <Modal
                    show={show}
                    onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-vcenter">
                        Delete Profile
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Are You sure you want to delete account
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        variant="primary"
                        onClick={handleDelete}
                      >
                        Delete Account
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  {/* <Button variant="primary" onClick={() => {setSelectedProfile(profile) ; handleShow()}} style={{whiteSpace: "nowrap"}}>
                    <i className="fas fa-pencil-alt"></i>&nbsp;&nbsp;Edit
                  </Button> */}

                                <Button color="danger" onClick={()=>handleShow()}>
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
