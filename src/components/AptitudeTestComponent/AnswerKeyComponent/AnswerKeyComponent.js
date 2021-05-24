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

  const className = (index) => {
    let colour = null;

    if (yourAnswers[index] === "Correct") colour = "green";
    else if (yourAnswers[index] === "Incorrect") colour = "red";

    return colour;
  };

  const findMarks = (index, pno, nno) => {
    let marks = "+0";

    if (yourAnswers[index] === "Correct") marks = "+" + pno;
    else if (yourAnswers[index] === "Incorrect") {
      if (parseInt(nno, 10) === 0) marks = "+" + nno;
      else marks = "-" + nno;
    }

    return marks;
  };

  console.log(yourAnswers);

  if (validity)
    return (
      <React.Fragment>
        <Helmet>
          <title>Answer Key | TechnoHub BITD</title>
          <meta name="title" content="Aptitude Tests by TechnoHub BITD" />
        </Helmet>
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
                      <div className="questions">
                        {item.questions.map((que, index) => {
                          return (
                            <div className="singleQuestion">
                              <div className="left">
                                <h3 className="smallTitle">
                                  Question No. {index + 1}
                                  <div
                                    className={className(index)}
                                    style={{ marginTop: "0.2em" }}
                                  >
                                    {findMarks(
                                      index,
                                      item.positivemarks,
                                      item.negativemarks
                                    )}
                                  </div>
                                </h3>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: que.question,
                                  }}
                                  className="question"
                                ></div>
                                <div className="options">
                                  <div>
                                    <strong>Option (A):&nbsp;&nbsp;</strong>
                                    {que.op1}
                                  </div>
                                  <div>
                                    <strong>Option (B):&nbsp;&nbsp;</strong>
                                    {que.op2}
                                  </div>
                                  <div>
                                    <strong>Option (C):&nbsp;&nbsp;</strong>
                                    {que.op3}
                                  </div>
                                  <div>
                                    <strong>Option (D):&nbsp;&nbsp;</strong>
                                    {que.op4}
                                  </div>
                                  {que.op5 !== "" ? (
                                    <div>
                                      <strong>Option (E):&nbsp;&nbsp;</strong>
                                      {que.op5}
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                              <div className="right">
                                <div>
                                  Correct Option:&nbsp;&nbsp;Option (
                                  {que.correctAnswer})
                                </div>
                                <div className={className(index)}>
                                  Your Answer:&nbsp;&nbsp;
                                  {yourOptions[index] != null
                                    ? "Option (" + yourOptions[index] + ")"
                                    : "Unanswered"}
                                </div>
                                {que.explanation !== "" ? (
                                  <div className="explanation">
                                    <strong>Explanation:</strong>{" "}
                                    <p
                                      dangerouslySetInnerHTML={{
                                        __html: que.explanation,
                                      }}
                                      className="question"
                                    ></p>
                                  </div>
                                ) : null}
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
