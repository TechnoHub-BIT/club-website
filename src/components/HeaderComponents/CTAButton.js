import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { Link } from "react-router-dom";
import { db } from '../../firebase';

const CTAButton = () => {
    const { currentUser } = useAuth();

    const [profiles, setProfile] = useState([]);
  
    useEffect(() => {
        if(currentUser){
            db.collection("members")
                .doc(currentUser.uid)
                .onSnapshot(function (doc) {
                const data = doc.data();
                setProfile(data);
                });
        }
    }, [currentUser]);

  

    let button =
        <Link to="/signup">
            <button type="button" className="ctaBtn"><i className="fas fa-user-plus"></i>&nbsp;&nbsp;Sign up Now!</button>
        </Link>
    ;

    if (currentUser) {
        if (profiles.payment == '')
            button =
                <Link to="/register" target="_blank">
                    <button type="button" className="ctaBtn"><i className="fas fa-external-link-alt"></i>&nbsp;&nbsp;Apply for Membership</button>
                </Link>
            ;
        else
            button =  
                <button type="button" className="ctaBtn" disabled>{ profiles.member } Team Member</button>
            ;
    }

    return(
        <div>
            { button }
        </div>
    );
}

export default CTAButton;