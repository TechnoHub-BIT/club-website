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

const Notifications = () => {
  const {currentUser} = useAuth()
  const [profiles, setProfiles] = useState([]);
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
              <div className="profileNavItem ">
                <Link to="/settings"><i className="fas fa-cogs"></i> Settings</Link>
              </div>
              <div className="profileNavItem active">
                <Link to="/notifications">
                  <i className="fas fa-bell"></i> Notifications
                </Link>
              </div>
            </div>
            <div className="profileContent">
              
              </div>
              </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;