import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { Link } from "react-router-dom";
import { db } from '../../firebase';

const CTAButton = () => {
    const { currentUser } = useAuth();

    const [memberList, setMemberList] = useState([]);
  
    useEffect(() => {
      if(currentUser){
        db.collection("members")
          .get()
          .then((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => doc.data());
            setMemberList(data);
          });
    }
    }, [currentUser]);
  

    let button =
        <Link to="/signup">
            <button type="button" class="ctaBtn"><i className="fas fa-user-plus"></i>&nbsp;&nbsp;Sign up Now!</button>
        </Link>
    ;

    if(currentUser)
        button =
            <Link to="/register" target="_blank">
                <button type="button" class="ctaBtn"><i className="fas fa-external-link-alt"></i>&nbsp;&nbsp;Apply for Membership</button>
            </Link>
        ;

    
    if(memberList.member !== ''){
        button = null;

    }
    

    return(
        <div>
            { button }
        </div>
    );
}

export default CTAButton;