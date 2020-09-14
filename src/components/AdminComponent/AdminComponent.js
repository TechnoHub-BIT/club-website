import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import {db} from '../../firebase';
import { Row ,Container, Col } from 'react-bootstrap';
import './adminComponent.css'

function AdminComponent() {
    
    const [contacts, setContacts] = useState([]);
    const [profiles, setProfiles] = useState([]);

    useEffect(()=>{
        db.collection('contacts').get().then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data);
            setContacts(data);
        })

        db.collection('accounts').get().then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data);
            setProfiles(data);
        })
    },[]);

    return (
        <div>
               
                            {/* <Container> */}
                                <Row>
                                    <Col>
                                    <h3 className="h3-text" >Profiles</h3>
                                    <table id="example" className="display table">
                                        <thead className="thead-dark" >
                                            <tr>
                                            <th scope="col" >Full Name</th>
                                            <th scope="col" >Email</th>
                                            <th scope="col" >Branch</th>
                                            <th scope="col" >Semester</th>
                                            <th scope="col" >Member</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                         {profiles?.map((profile,i) => {
                                        
                                        return (
                                            <tr key={i}>     
                                            <td data-label="Full Name" >{profile.fullname}</td>
                                            <td data-label="Email" >{profile.email}</td>
                                            <td data-label="Branch" >{profile.branch}</td>
                                            <td data-label="Semester" >{profile.semester}</td>
                                            <td data-label="Member" >{profile.member}</td>
                                            </tr>
                                            
                                        );
                                    
                                        })}
                                    </tbody>
                                    <thead className="thead-dark" >
                                            <tr>
                                            <th scope="col" >Skills</th>
                                            <th scope="col" >Workshops</th>
                                            <th scope="col" >Interests</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                         {profiles?.map((profile,i) => {
                                        
                                        return (
                                            <tr key={i}>     
                                            <td data-label="Skills" >{profile.skills}</td>
                                            <td data-label="Workshops" >{profile.workshops}</td>
                                            <td data-label="Interests" >{profile.interest}</td>
                                            </tr>
                                            
                                        );
                                    
                                        })}
                                    </tbody>
                                    </table>
                                    </Col>
                                    <Col> 
                                        <h3 className="h3-text" >Messages</h3>
                                    <table id="example" className="display table">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col" >Name</th>
                                            <th scope="col" >Email</th>
                                            <th scope="col" >Message</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {contacts?.map((contact,i) => {
                                        
                                        return (
                                            <tr key={i}>     
                                            <td data-label="Name" >{contact.name}</td>
                                            <td data-label="Email" >{contact.email}</td>
                                            <td data-label="Message" >{contact.message}</td>
                                                </tr>
                                            
                                        );
                                    
                                        })}
                                    </tbody>
                                </table></Col>
                                </Row>
                            {/* </Container>  */}
        </div>
    )
}

export default AdminComponent
