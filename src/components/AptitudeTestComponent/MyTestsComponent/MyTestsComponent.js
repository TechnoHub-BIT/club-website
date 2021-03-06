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
      db.collection("members")
        .doc(currentUser.uid)
        .collection("Tests")
        .orderBy("testdate", "desc")
        .onSnapshot(function (data) {
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

  const [testname, setTestname] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      db.collection("Tests").onSnapshot(function (data) {
        setTestname(
          data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    };
    fetchdata();
  }, []);

  //Calculate Time taken from Time left
  const calcTime = (testDuration, timeLeft) => {
    let hours = parseInt((testDuration - timeLeft) / 3600000, 10);
    let minutes = parseInt((testDuration - timeLeft) / 60000, 10);
    let seconds = parseInt(((testDuration - timeLeft) / 1000) % 60, 10);

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    return hours + ":" + minutes + ":" + seconds;
  };

  return (
    <React.Fragment>
      {modal}
      <Helmet>
        <title>Aptitude Tests | TechnoHub BITD</title>
        <meta name="title" content="Aptitude Tests by TechnoHub BITD" />
      </Helmet>
      <div className="testsListCont">
        <Fade up>
          <h1 className="title">
            My Tests
            <a href="/tests">
              <button type="button">
                <i className="fas fa-book"></i>&nbsp;&nbsp;Give a Test
              </button>
            </a>
          </h1>
          <div className="centreCard">
            <div className="testsList">
              <div
                className="test"
                style={{ backgroundColor: "#ff4444", color: "#fff" }}
              >
                <div className="index">
                  <strong>S.No.</strong>
                </div>
                <div className="testTitle">
                  Test Title(Max. Marks)
                  <div className="date">{/* <strong>Date</strong> */}</div>
                </div>
                <div className="duration">
                  <strong>Time Taken/Your Score</strong>
                </div>
                <div className="buttons">
                  <strong>Answer Key</strong>
                </div>
              </div>
              {tests.map((test, i) => {
                const testDuration =
                  parseInt(test.testduration, 10) * 60 * 1000;
                return (
                  <div className="test">
                    <div className="index">{i + 1}</div>
                    <div className="testTitle">
                      {test.testname}({test.totalmarks})
                      <div className="date">
                        {Moment(test.testdate).format("ll")}
                        <br />
                        {testname.map((item) => {
                          if (item.title === test.testname) {
                            return (
                              <div>
                                {item.answerstatus === "Active" ? (
                                  <span style={{ color: "#00c851" }}>
                                    Answer key available
                                  </span>
                                ) : (
                                  <span style={{ color: "#ff4444" }}>
                                    Answer key unavailable
                                  </span>
                                )}
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>
                    <div className="duration">
                      <strong className="onlyMobile">
                        Time Taken/Your Score:&nbsp;&nbsp;
                      </strong>
                      {calcTime(testDuration, test.timeleft)}
                      &nbsp;&nbsp;/&nbsp;&nbsp;
                      <strong style={{ fontSize: "1.3rem" }}>
                        {test.score}
                      </strong>
                    </div>
                    <div className="buttons">
                      <a href={"/myanswer/" + test.id} title="View Answer Key">
                        <strong
                          className="onlyMobile"
                          style={{ color: "#000" }}
                        >
                          View Answer Key
                        </strong>
                        &nbsp;&nbsp;
                        <button type="button">
                          <i className="far fa-chart-bar"></i>
                        </button>
                      </a>
                      {/* <a href={"/leaderboard/" + leader.id}>
                        <button type="button">
                          <i className="fas fa-trophy"></i>
                        </button>
                      </a> */}
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