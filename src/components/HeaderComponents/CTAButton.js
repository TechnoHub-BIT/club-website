import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { Link } from "react-router-dom";

const CTAButton = () => {
    const { currentUser } = useAuth();

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

    /*
    if(member == true)
        button = null;
    */

    return(
        <div>
            { button }
        </div>
    );
}

export default CTAButton;