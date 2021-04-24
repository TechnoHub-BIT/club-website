import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import "./TestsListComponent.css";
import Moment from "moment";
import AlertModal from "../../AlertModalComponent/AlertModalComponent";
import { useAuth } from "../../../contexts/AuthContext";

const TestsList = () => {
  const [tests, setTest] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      db.collection("Tests").onSnapshot(function (data) {
        setTest(
          data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    };
    fetchdata();
  }, []);

  const deleteBlog = (id) => {
    db.collection("Tests")
      .doc(id)
      .delete()

      .then(() => {
        showModal("");
      })
      .catch((error) => {
        showModal("");
        alert(error.message);
      });
  };

  const closeModal = () => {
    showModal("");
  };

  //Modal
  const [modal, showModal] = useState("");
  const deleteBlogModal = (testId) => {
    showModal(
      <AlertModal
        message="Are you sure you want to delete the Test?"
        icon="delete"
        leftBtn="Delete"
        rightBtn="Cancel"
        actionParam={testId}
        action={deleteBlog}
        close={closeModal}
      />
    );
  };

  //Current User Details
  const { currentUser, logout } = useAuth();

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    if (currentUser) {
      db.collection("members")
        .doc(currentUser.uid)
        .onSnapshot(function (doc) {
          const data = doc.data();
          setProfiles(data);
        });
    }
  }, [currentUser]);

  return (
    <React.Fragment>
      {modal}
      <div className="testsListCont">
        <h1 className="title">
          All Tests
          {profiles.id === 1 || profiles.id === 4 ? (
            <a href="/createtest">
              <button type="button">
                <i className="fas fa-plus"></i>&nbsp;&nbsp;Create New test
              </button>
            </a>
          ) : null}
        </h1>
        <div className="centreCard">
          <div className="testsList">
            <div className="test">
              <div className="index">
                <strong>S.No.</strong>
              </div>
              <div className="testTitle">
                Test Title
                <div className="date">
                  <strong>Date</strong>
                </div>
              </div>
              <div className="duration">
                <strong>Test Duration</strong>
              </div>
              <div className="buttons">
                <strong>Action Buttons</strong>
              </div>
            </div>
            {tests.map((test, i) => {
              return (
                <div className="test">
                  <div className="index">{i + 1}</div>
                  <div className="testTitle">
                    <a href={"/test/" + test.id}>
                      {test.title}&nbsp;&nbsp;
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <div className="date">
                      {Moment(test.testdate).format("ll")}
                      <br />
                      {test.teststatus === "Active" ? (
                        <span style={{ color: "#00c851" }}>
                          {test.teststatus}
                        </span>
                      ) : (
                        <span style={{ color: "#ff4444" }}>
                          {test.teststatus}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="duration">{test.duration} mins.</div>
                  <div className="buttons">
                    <a href={"/test/" + test.id}>
                      <button type="button">
                        <i className="fas fa-book"></i>
                      </button>
                    </a>
                    {profiles.id === 1 || profiles.id === 4 ? (
                      <a href={"/edittest/" + test.id}>
                        <button type="button">
                          <i className="fas fa-pencil-alt"></i>
                        </button>
                      </a>
                    ) : null}
                    {profiles.id === 1 || profiles.id === 4 ? (
                      <a>
                        <button
                          onClick={() => deleteBlogModal(test.id)}
                          type="button"
                        >
                          <i className="far fa-trash-alt"></i>
                        </button>
                      </a>
                    ) : null}
                    <a href={"/leaderboard/" + test.id}>
                      <button type="button">
                        <i className="fas fa-trophy"></i>
                      </button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TestsList;
