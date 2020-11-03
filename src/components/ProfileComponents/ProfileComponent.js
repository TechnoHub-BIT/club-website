import React,{useState} from 'react'
import {Card, Button, Alert, CardBody} from 'reactstrap';
import {useAuth} from '../../contexts/AuthContext';
import {useHistory} from 'react-router-dom';
import {Breadcrumb, BreadcrumbItem} from "../BreadcrumbComponent/BreadcrumbComponent";
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import "./ProfileComponents.css";
import "../input.css";

function ProfileComponent() {
    const [error, setError] = useState('');
    const {currentUser, logout} = useAuth()
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

    return (
        <div className="profileCont">
            <HeaderTitle heading="PROFILE" />
            <Breadcrumb>
                <BreadcrumbItem title="Home" path="/" />
                <BreadcrumbItem title="Profile" status="active" />
            </Breadcrumb>
            <div className="profileDetails">
                <div className="profileHeader">
                    <img src="./assets/images/aboutus_img/aaryan.jpg" className="profileImage" />
                    <div className="profileName">
                        <h5>Aaryan Khandelwal</h5>
                        <h6>Electronics and Telecommunication</h6>
                    </div>
                </div>
                <div className="profileBody">
                    <div className="profileNav">
                        <div className="profileNavItem active">
                            <i className="fas fa-info"></i> General
                        </div>
                        <div className="profileNavItem">
                            <i className="fas fa-cogs"></i> Settings
                        </div>
                    </div>
                    <div className="profileContent">
                        <div className="general">
                            <h6 className="contentHeading">Personal Information</h6>
                            <div className="input-group">
                                <input type="text" id="name" placeholder="Name" />
                                <label for="name">Name</label>
                            </div>
                            <div className="input-group">
                                <select required>
                                    <option value="">Select Semester</option>
                                    <option value="1">1</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Button onClick={handleLogout} >
                    Log Out
                </Button>
            </div>
        </div>
    )
}

export default ProfileComponent
