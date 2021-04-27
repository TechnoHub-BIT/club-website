import React, { useState, useEffect } from "react";
import "./AnswerKeyComponent.css";
import { db } from "../../../firebase";
import { useAuth } from "../../../contexts/AuthContext";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";

const AnswerKey = (props) => {
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

  const [tests, setTest] = useState([""]);
  const ref = db
    .collection("members")
    .doc(currentUser.uid)
    .collection("tests")
    .doc(props.match.params.id);
  useEffect(() => {
    ref.get().then((doc) => {
      //   if (doc.exists) {
      const Test = doc.data();
      setTest({
        answers: Test.answers,
        options: Test.options,
        testname: Test.testname,
      });
      //   } else setValidity(false);
      // });
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
          <div className="centreCard">
            {testname.map((item) => {
              if (item.title === tests.testname) {
                return (
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
                            <div className="explanation">
                              Explanation: <p>{que.explanation}</p>
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
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              }
            })}
          </div>
        </Fade>
      </div>
    </React.Fragment>
  );
};

export default AnswerKey;
