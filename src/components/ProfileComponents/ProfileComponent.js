import React,{useState} from 'react'
import {Card, Button, Alert, CardBody} from 'reactstrap';
import {useAuth} from '../../contexts/AuthContext';
import {useHistory} from 'react-router-dom';

function ProfileComponent() {
    const [error, setError] = useState('');
    const {currentUser, logout} = useAuth()
    const history = useHistory()
    async function handleLogout(){
setError('')

try {
    await logout()
    history.pushState('/login')
}catch{
    setError('Failed to log out')
}
    }

    return (
        <>
            <Card style={{paddingTop:"120px"}} >
                <CardBody>
                    <h2>Profile</h2>
                    {error && <Alert color="danger">{error}</Alert>}
                    <strong>Email : </strong>{currentUser.email}
                </CardBody>
            </Card>
            <div>
                <Button onClick={handleLogout} >
                Log Out
                </Button>
            </div>
        </>
    )
}

export default ProfileComponent
