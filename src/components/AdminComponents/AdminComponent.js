import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import "./AdminComponent.css";
import { Button, Modal } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";

function AdminComponent() {

  const [contacts, setContacts] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState();
  const [payment, setPayment] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [currentProfile, setCurrentProfile] = useState('');
  const {currentUser} = useAuth();

  useEffect(() => {
    
    db.collection("contacts")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        // console.log(data);
        setContacts(data);
      });

    db.collection("members").orderBy("fullname")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            uid: doc.id,
          };
        });

        setProfiles(data);
      });

      if(currentUser) {
        db.collection("members")
        .doc(currentUser.uid)
        .onSnapshot(function (doc) {
            const data = doc.data();
            setCurrentProfile(data);
        });
    }
  }, []);

 
  return (

    
    <div className="container-fluid">
      {/* <Container> */}
      {
        (currentProfile.id == 1) && <div>
      <h3 className="h3-text">Profiles</h3>
      <table id="example" className="display table table-responsive-sm table-responsive-md table-striped table-hover table-bordered table-sm">
        <thead className="thead-dark">
          <tr className="text-center">
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Member</th>
            <th scope="col">Payment</th>
            <th scop="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {profiles?.map((profile, i) => {
            return (
              <tr key={i}>
                <td data-label="Full Name">{profile.fullname}</td>
                <td data-label="Email">{profile.email}</td>
                <td data-label="Branch">{profile.member}</td>
                <td data-label="Payment" className="text-center">
                  {profile.payment.toString()}
                </td>
                <td data-label="Action" className="text-center">
                <Modal
                    show={show}
                    onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-vcenter">
                        Updating Profile
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Payment :
                      <input
                        placeholder={profile.payment ? "true" : "false"}
                        value={payment}
                        onChange={(event) => setPayment(event.target.value)}
                        
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => {
                          console.log(profile);
                          db.collection("members")
                            .doc(selectedProfile.uid)
                            .update({
                              payment: payment==='true',
                              registrationApply: false
                            })
                            .then(function () {
                              console.log("Payment successfully updated!");
                              setShow(false);
                            });
                        }}
                      >
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <Button variant="primary" onClick={() => {setSelectedProfile(profile) ; handleShow()}} style={{whiteSpace: "nowrap"}}>
                    <i className="fas fa-pencil-alt"></i>&nbsp;&nbsp;Edit
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h3 className="h3-text">Messages</h3>
      <table id="example" className="display table table-responsive-sm table-responsive-md table-striped table-hover table-bordered table-sm">
        <thead className="thead-dark">
          <tr className="text-center">
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts?.map((contact, i) => {
            return (
              <tr key={i}>
                <td data-label="Name">{contact.name}</td>
                <td data-label="Email">{contact.email}</td>
                <td data-label="Message">{contact.message}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </div>
      }
      
      {/* </Container>  */}
    </div>
  );
}

export default AdminComponent;
