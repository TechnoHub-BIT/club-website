import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../../firebase";
import { Row, Col } from "react-bootstrap";
import "./adminComponent.css";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

function AdminComponent() {
  const [contacts, setContacts] = useState([]);
  const [profiles, setProfiles] = useState([]);

  const [payment, setPayment] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    db.collection("contacts")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        // console.log(data);
        setContacts(data);
      });

    db.collection("members")
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
  }, []);

  return (
    <div>
      {/* <Container> */}
      <Row>
        <Col>
          <h3 className="h3-text">Profiles</h3>
          <table id="example" className="display table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">Member</th>
                <th scope="col">Payment</th>
              </tr>
            </thead>
            <tbody>
              {profiles?.map((profile, i) => {
                return (
                  <tr key={i}>
                    <td data-label="Full Name">{profile.fullname}</td>
                    <td data-label="Email">{profile.email}</td>
                    <td data-label="Branch">{profile.member}</td>
                    <td data-label="Semester">
                      {profile.payment ? "true " : "false "}
                      {/* {console.log("\n\n\n" + profile.payment)} */}
                      <Button variant="primary" onClick={handleShow}>
                        Edit
                      </Button>

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
                              console.log(profile.uid);
                              db.collection("members")
                                .doc(profile.uid)
                                .update({
                                  payment: payment,
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
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Col>
        <Col>
          <h3 className="h3-text">Messages</h3>
          <table id="example" className="display table">
            <thead className="thead-dark">
              <tr>
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
        </Col>
      </Row>
      {/* </Container>  */}
    </div>
  );
}

export default AdminComponent;
