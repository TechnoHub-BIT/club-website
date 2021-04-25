import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import Moment from "moment";
import AlertModal from "../../AlertModalComponent/AlertModalComponent";
import { useAuth } from "../../../contexts/AuthContext";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";

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
      <Helmet>
        <title>Aptitude Tests | TechnoHub BITD</title>
        <meta name="title" content="Aptitude Tests by TechnoHub BITD" />
      </Helmet>
      <div className="testsListCont">
        <Fade up>
          <h1 className="title">My Tests</h1>
          <div className="centreCard">
            <div className="testsList">
              <div className="test">
                <div className="index">
                  <strong>S.No.</strong>
                </div>
                <div className="testTitle">
                  Test Title(Max. Marks)
                  <div className="date">
                    <strong>Date</strong>
                  </div>
                </div>
                <div className="duration">
                  <strong>Time Taken/Score</strong>
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
                      {test.title + "(" + test.totalmarks + ")"}
                      <div className="date">
                        {Moment(test.testdate).format("ll")}
                      </div>
                    </div>
                    <div className="duration">{test.duration}/25</div>
                    <div className="buttons">
                      <a href={"/leaderboard/" + test.id}>
                        <button type="button">
                          <i className="far fa-chart-bar"></i>
                        </button>
                      </a>
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
        </Fade>
      </div>
    </React.Fragment>
  );
};

export default TestsList;
