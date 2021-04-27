import React, { useState, useEffect } from "react";
import "./AnswerKeyComponent.css";
import { db } from "../../../firebase";
import { useAuth } from "../../../contexts/AuthContext";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";
import AlertModal from "../../AlertModalComponent/AlertModalComponent";
import { useHistory } from "react-router-dom";

const AnswerKey = (props) => {
  let history = useHistory();

  //Modal
  const [modal, showModal] = useState("");

  const closeModal = () => {
    showModal("");
  };

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

  const [validity, setValidity] = useState(true);

  const [tests, setTest] = useState([""]);
  const ref = db
    .collection("members")
    .doc(currentUser.uid)
    .collection("tests")
    .doc(props.match.params.id);
  useEffect(() => {
    ref.get().then((doc) => {
      if (doc.exists) {
        const Test = doc.data();
        setTest({
          answers: Test.answers,
          options: Test.options,
          testname: Test.testname,
        });
      } else setValidity(false);
    });
  }, []);

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

  const yourAnswers = [];
  const yourOptions = [];

  tests.answers &&
    tests.answers.map((items, index) => {
      yourAnswers.push(items);
    });

  tests.options &&
    tests.options.map((items, index) => {
      yourOptions.push(items);
    });

  if (validity)
    return (
      <React.Fragment>
        <div className="answerKeyCont">
          <Fade up>
            <h1 className="title">
              {tests.testname}- Answer Key
              <a href="/mytests">
                <button type="button">
                  <i className="fas fa-eye"></i>&nbsp;&nbsp;View All Tests
                </button>
              </a>
            </h1>
            <div
              className="centreCard"
              style={{ position: "relative", zIndex: "1" }}
            >
              {testname.map((item) => {
                if (item.title === tests.testname) {
                  return item.answerstatus === "Active" ? (
                    <div>
                      negativemarks: {item.negativemarks}
                      <br></br>
                      positive marks: {item.positivemarks}
                      <div className="questions">
                        {item.questions.map((que, index) => {
                          return (
                            <div className="singleQuestion">
                              <div className="left">
                                <h3 className="smallTitle">
                                  Question No. {index + 1}
                                </h3>

                                <div className="question">{que.question}</div>
                                <div className="options">
                                  <div>Option (A): {que.op1}</div>
                                  <div>Option (B): {que.op2}</div>
                                  <div>Option (C): {que.op3}</div>
                                  <div>Option (D): {que.op4}</div>
                                </div>
                              </div>
                              <div className="right">
                                <div>
                                  Correct Option: Option ({que.correctAnswer})
                                </div>
                                <div
                                  className={
                                    que.correctAnswer === yourOptions[index]
                                      ? "green"
                                      : "red"
                                  }
                                >
                                  Your Answer: Option ({yourOptions[index]})
                                </div>
                                <div className="explanation">
                                  <strong>Explanation:</strong>{" "}
                                  <p>{que.explanation}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <AlertModal
                      message="Answer Key is not available at the moment!"
                      icon="exclamation"
                      leftBtn="Go to Profile"
                      rightBtn="View All Tests"
                      action={() => {
                        history.push("/profile");
                      }}
                      close={() => {
                        history.push("/mytests");
                      }}
                    />
                  );
                }
              })}
            </div>
          </Fade>
        </div>
      </React.Fragment>
    );
  else
    return (
      <AlertModal
        message="This is not a Valid Test Link!"
        icon="exclamation"
        leftBtn="Go to Profile"
        rightBtn="View All Tests"
        action={() => {
          history.push("/profile");
        }}
        close={() => {
          history.push("/mytests");
        }}
      />
    );
};

export default AnswerKey;
