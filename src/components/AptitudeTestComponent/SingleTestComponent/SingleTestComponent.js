import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import "./SingleTestComponent.css";
import Moment from "moment";
import { useAuth } from "../../../contexts/AuthContext";
import useCountDown from "react-countdown-hook";
import AlertModal from "../../AlertModalComponent/AlertModalComponent";
import { useHistory, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";
import Options from "./OptionsComponent/OptionsComponent";

const SingleTest = (props) => {
  let history = useHistory();
  const { id } = useParams();
  //Modal
  const [modal, showModal] = useState("");

  const closeModal = () => {
    showModal("");
  };

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);

  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };

  //Form Start Check
  const [form, setForm] = useState(false);

  const [tests, setTest] = useState([]);

  const [quesLength, setLength] = useState();
  const [answers, setAnswers] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const ref = db.collection("Tests").doc(id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const Test = doc.data();
        setLength(Test.questions.length);
        setTest({
          id: doc.id,
          title: Test.title,
          duration: Test.duration,
          totalmarks: Test.totalmarks,
          testdate: Test.testdate,
          starttime: Test.starttime,
          endtime: Test.endtime,
          positivemarks: Test.positivemarks,
          negativemarks: Test.negativemarks,
          answerstatus: Test.answerstatus,
          questions: Test.questions,
          teststatus: Test.teststatus,
          testprivacy: Test.testprivacy,
          privacypassword: Test.privacypassword,
          testdescription: Test.testdescription,
        });
      } else
        showModal(
          <AlertModal
            message="This is not a Valid Test Link!"
            icon="exclamation"
            leftBtn="Go to Home"
            rightBtn="View other Tests"
            action={() => {
              history.push("/home");
            }}
            close={() => {
              history.push("/tests");
            }}
          />
        );
    });
  }, []);

  //Store Answers
  const handleAnswer = (e, index, option) => {
    const type = e.target.type;

    if (type === "checkbox") {
      let selectedAnswers = [];

      const checkboxes = document.querySelectorAll(
        "input[type='checkbox'][name='" + e.target.name + "']"
      );
      let counter = 0;

      //Search for all selected checkboxes' options
      checkboxes.forEach((checkbox, cbIndex) => {
        if (checkbox.checked === true) {
          counter++;
          if (cbIndex === 0) selectedAnswers.push("A");
          else if (cbIndex === 1) selectedAnswers.push("B");
          else if (cbIndex === 2) selectedAnswers.push("C");
          else if (cbIndex === 3) selectedAnswers.push("D");
          else selectedAnswers.push("E");
        }
      });

      const correctOptions = tests.questions[index].correctAnswer.split(",");
      let incorrect = true;

      //Check if all selected options are present in the correct options
      for (let i = 0; i < selectedAnswers.length; i++) {
        for (let j = 0; j < correctOptions.length; j++) {
          //Check if selected option is present in the correct options or not
          if (selectedAnswers[i] === correctOptions[j]) {
            incorrect = false;
            break;
          } else incorrect = true;
        }

        //Break even if any one selected option is not present in the correct options
        if (incorrect) break;
      }

      //Convert selected answers to string to store in database
      const optionsToStore = selectedAnswers.toString();

      if (counter < correctOptions.length) {
        if (counter === 0) {
          answers[index] = null;
          options[index] = null;
        } else {
          options[index] = optionsToStore;

          if (incorrect) answers[index] = "Incorrect";
          else answers[index] = null;
        }
      } else if (
        tests.questions[index].correctAnswer === optionsToStore ||
        !incorrect
      ) {
        options[index] = optionsToStore;
        answers[index] = "Correct";
      } else if (incorrect) {
        options[index] = optionsToStore;
        answers[index] = "Incorrect";
      }
    } else {
      if (option === "Unanswered") {
        options[index] = null;
        answers[index] = null;
      } else if (tests.questions[index].correctAnswer === option) {
        options[index] = option;
        answers[index] = "Correct";
      } else {
        options[index] = option;
        answers[index] = "Incorrect";
      }
    }
  };

  //Next, Previous and Question Buttons
  const sectionChanger = (action, index) => {
    if (form)
      document
        .querySelector("button.question.active")
        .classList.remove("active");

    if (
      (action === "direct" && form) ||
      action === "start" ||
      action === "next" ||
      action === "prev"
    )
      document.querySelector("section.active").classList.remove("active");

    const sections = document.querySelectorAll("section");
    const questionBtns = document.querySelectorAll("button.question");

    if (action === "direct") {
      if (form) {
        questionBtns[index - 1].classList.add("active");
        sections[index].classList.add("active");
      }
    } else if (action === "next" || action === "start") {
      questionBtns[index].classList.add("active");
      sections[index + 1].classList.add("active");
    } else if (action === "prev") {
      questionBtns[index - 2].classList.add("active");
      sections[index - 1].classList.add("active");
    }
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

  const fullname = profiles.fullname;
  const branch = profiles.branch;
  const email = profiles.email;
  const title = tests.title;
  const totalmarks = tests.totalmarks;
  const testdate = tests.testdate;
  const testduration = tests.duration;
  let score = 0;

  //Submit Function
  const confirmSubmit = async () => {
    pause();

    //Calculate Score
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] == null) score += 0;
      else if (answers[i] === "Correct")
        score += parseInt(tests.positivemarks, 10);
      else score -= parseInt(tests.negativemarks, 10);
    }

    //Store details in tests collection of members database
    await db
      .collection("members")
      .doc(currentUser.uid)
      .collection("Tests")
      .add({
        testId: id,
        testname: title,
        timeleft: timeLeft,
        options: options,
        answers: answers,
        testduration: testduration,
        testdate: testdate,
        totalmarks: totalmarks,
        score: score,
      });

    //Store details in results collection of test database
    await db
      .collection("Tests")
      .doc(id)
      .collection("results")
      .doc(email)
      .set({
        options: options,
        answers: answers,
        userId: currentUser.uid,
        fullname: fullname,
        testname: title,
        email: email,
        timeleft: timeLeft,
        branch: branch,
        score: score,
      })
      .then(() => {
        showModal(
          <AlertModal
            message="Your test has been submitted"
            icon="successful"
            leftBtn="Go to Home"
            rightBtn="View other Tests"
            action={() => {
              history.push("/home");
            }}
            close={() => {
              history.push("/tests");
            }}
          />
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  //Countdown Timer
  const initialTime = 35 * 60 * 1000; //minutes * seconds * microseconds
  const interval = 1000; //Should always be 1000

  const [timeLeft, { start, pause }] = useCountDown(initialTime, interval); //react-countdown-hook

  let hours = parseInt(timeLeft / 3600000); //Calculate hours from timeLeft
  let minutes = parseInt(timeLeft / 60000); //Calculate minutes from timeLeft
  let seconds = parseInt(timeLeft / 1000) % 60; //Calculate seconds from timeLeft

  if (minutes === 60) minutes = 0; //Set seconds as 0 on becoming 60

  let hoursDisplay = hours;
  let minutesDisplay = minutes;
  let secondsDisplay = seconds;

  //Add extra 0 for single digit numbers
  if (hours <= 9) hoursDisplay = "0" + hours;
  if (minutes <= 9) minutesDisplay = "0" + minutes;
  if (seconds <= 9) secondsDisplay = "0" + seconds;

  useEffect(() => {
    start();
    pause();
  }, []);

  //Submit form on time up
  if (hours === 0 && minutes === 0 && seconds === 0 && form) {
    setForm(false);
    showModal(
      <AlertModal
        message="Time's Up!"
        icon="exclamation"
        leftBtn="Okay"
        action={confirmSubmit}
        close={closeModal}
      />
    );
  }

  //Start timer on Quiz start
  const restart = React.useCallback((duration) => {
    setForm(true);
    const newTime = parseInt(duration, 10) * 60 * 1000;
    start(newTime);
  }, []);

  const [result, setResult] = useState([]);
  useEffect(() => {
    db.collection("Tests")
      .doc(id)
      .collection("results")
      .get()
      .then((response) => {
        const fetchResults = [];
        response.forEach((document) => {
          const fetchResult = {
            id: document.id,
            ...document.data(),
          };
          fetchResults.push(fetchResult);
        });
        setResult(fetchResults);
      });
  }, []);

  const startTest = (duration) => {
    const ref = db.collection("Tests").doc(id).collection("results").doc(email);

    //Check if the user has already given the test or not
    ref.get().then((doc) => {
      if (doc.exists)
        showModal(
          <AlertModal
            message="You have already given the test once!"
            icon="exclamation"
            leftBtn="Go to Home"
            rightBtn="View other Tests"
            action={() => {
              history.push("/home");
            }}
            close={() => {
              history.push("/tests");
            }}
          />
        );
      //Check if test is active or not
      else if (tests.teststatus === "Inactive")
        showModal(
          <AlertModal
            message="This test is not available at the moment!"
            icon="exclamation"
            leftBtn="Go to Home"
            rightBtn="View other Tests"
            action={() => {
              history.push("/home");
            }}
            close={() => {
              history.push("/tests");
            }}
          />
        );
      else if (tests.teststatus === "Over")
        showModal(
          <AlertModal
            message="This test is Over!"
            icon="exclamation"
            leftBtn="View other Tests"
            action={() => {
              history.push("/tests");
            }}
            close={() => {
              history.push("/tests");
            }}
          />
        );
      // else if (tests.testprivacy === "Private")
      //   showModal(
      //     <AlertModal
      //       message="This test is private, enter password to continue!"
      //       icon="exclamation"
      //       leftBtn="Continue"
      //       action={confirmStart}
      //       actionParam={duration}
      //       close={closeModal}
      //     />
      //   );
      else confirmStart(duration);
    });
  };

  const confirmStart = (duration) => {
    restart(duration);
    sectionChanger("start", 0);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // if(hours !== 0 && minutes !== 0 && seconds !== 0)
    // if (timeLeft > 0)
    try {
      if (timeLeft > 0)
        await showModal(
          <AlertModal
            message="Are you sure you want to submit the Test?"
            icon="question"
            leftBtn="Submit"
            rightBtn="Cancel"
            action={confirmSubmit}
            close={closeModal}
          />
        );
    } catch (error) {
      alert(error.message);
    }
  };

  //Question Button Navigations
  const questionBtns = [];

  for (let i = 0; i < quesLength; i++) {
    questionBtns.push(
      <button
        type="button"
        className="question"
        title={"Go to Question " + (i + 1)}
        onClick={() => sectionChanger("direct", i + 1)}
        key={i}
      >
        {i + 1}
      </button>
    );
  }

  return (
    <React.Fragment>
      {modal}
      <Helmet>
        <title>{tests.title + " | TechnoHub BITD"}</title>
        <meta
          name="title"
          content={tests.title + " | Aptitude Tests by TechnoHub BITD"}
        />
      </Helmet>
      <div className="singleTestCont">
        <Fade up>
          <h1 className="title">
            {tests.title}
            {form ? (
              <button type="button" title="Submit Test" onClick={onSubmit}>
                <i className="fas fa-check"></i>&nbsp;&nbsp;Submit Test
              </button>
            ) : null}
          </h1>
          <div className={form ? "centreCard" : "centreCard full"}>
            <div className="left">
              <form>
                <section className="active">
                  <div className="testInstructions">
                    <h3 className="smallTitle">Test Instructions</h3>
                    <ul>
                      <li>
                        <strong>Test Date:</strong>{" "}
                        {Moment(tests.testdate).format("ll")}.
                      </li>
                      <li>
                        <strong>You can give the test between:</strong>{" "}
                        {tests.starttime} to {tests.endtime}.
                      </li>
                      <li>
                        <strong>Test Duration:</strong> {tests.duration}{" "}
                        minutes.
                      </li>
                      <li>
                        <strong>Total Questions:</strong> {quesLength}.
                      </li>
                      <li>
                        <strong>Total Marks:</strong> {tests.totalmarks}.
                      </li>
                      <li>
                        <strong>Marks for each Correct answer:</strong>{" "}
                        {tests.positivemarks}.
                      </li>
                      <li>
                        <strong>Marks for each Wrong answer:</strong> -
                        {tests.negativemarks}
                      </li>
                      {tests.testdescription ? (
                        <li>
                          <strong>Additional Information:</strong>{" "}
                          <p
                            dangerouslySetInnerHTML={{
                              __html: tests.testdescription,
                            }}
                          ></p>
                          {/* <p>{tests.testdescription}</p> */}
                        </li>
                      ) : null}
                    </ul>
                  </div>
                  <div className="navigation">
                    {tests.teststatus !== "Over" ? (
                      <button
                        type="button"
                        className="startBtn"
                        onClick={() => {
                          startTest(tests.duration);
                        }}
                      >
                        Start Test&nbsp;&nbsp;
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </button>
                    ) : null}
                  </div>
                </section>
                {tests.questions &&
                  tests.questions.map((item, index) => {
                    return (
                      <section ques-no={index + 1} key={index}>
                        <h3 className="smallTitle">Question No. {index + 1}</h3>
                        <div className="question">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.question,
                            }}
                          ></div>
                          <br />
                          {item.questionType === "MSQ"
                            ? "(More than one correct option)"
                            : null}
                        </div>
                        {item.imageUrl ? (
                          <img
                            src={
                              "https://drive.google.com/uc?export=view&id=" +
                              item.imageUrl
                            }
                            alt={tests.title}
                            className="questionImage"
                          />
                        ) : null}

                        <Options
                          item={item}
                          index={index}
                          handleAnswer={handleAnswer}
                        />

                        <div className="navigation">
                          {index === 0 ? (
                            <button
                              type="button"
                              className="prevBtn"
                              title="This is the first Question"
                              disabled
                              onClick={() => sectionChanger("next", index + 1)}
                            >
                              <i className="fas fa-long-arrow-alt-left"></i>
                              &nbsp;&nbsp;Previous
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="prevBtn"
                              title={"Go to Question " + index}
                              onClick={() => sectionChanger("prev", index + 1)}
                            >
                              <i className="fas fa-long-arrow-alt-left"></i>
                              &nbsp;&nbsp;Previous
                            </button>
                          )}
                          {index === quesLength - 1 ? (
                            <button
                              type="button"
                              className="nextBtn"
                              title="This is the last Question"
                              disabled
                              onClick={() => sectionChanger("next", index + 1)}
                            >
                              Save & Next&nbsp;&nbsp;
                              <i className="fas fa-long-arrow-alt-right"></i>
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="nextBtn"
                              title={"Go to Question " + (index + 2)}
                              onClick={() => sectionChanger("next", index + 1)}
                            >
                              Save & Next&nbsp;&nbsp;
                              <i className="fas fa-long-arrow-alt-right"></i>
                            </button>
                          )}
                        </div>
                      </section>
                    );
                  })}
              </form>
            </div>
            {form ? (
              <div className="right">
                <div className="timer">
                  <p
                    title={
                      hoursDisplay +
                      ":" +
                      minutesDisplay +
                      ":" +
                      secondsDisplay +
                      " are left"
                    }
                  >
                    Time left
                    <br />
                    {hoursDisplay + ":" + minutesDisplay + ":" + secondsDisplay}
                  </p>
                </div>
                <div className="questionBtns">{questionBtns}</div>
              </div>
            ) : null}

            {tests.teststatus === "Over"
              ? tests.questions &&
                tests.questions.map((item, index) => {
                  return (
                    <div className="singleQuestion">
                      <h3 className="smallTitle">Question No. {index + 1}</h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.question,
                        }}
                        className="question"
                      ></div>
                      <div className="options">
                        <div>
                          <strong>Option (A):&nbsp;&nbsp;</strong>
                          {item.op1}
                        </div>
                        <div>
                          <strong>Option (B):&nbsp;&nbsp;</strong>
                          {item.op2}
                        </div>
                        <div>
                          <strong>Option (C):&nbsp;&nbsp;</strong>
                          {item.op3}
                        </div>
                        <div>
                          <strong>Option (D):&nbsp;&nbsp;</strong>
                          {item.op4}
                        </div>
                        {item.op5 ? (
                          <div>
                            <strong>Option (E):&nbsp;&nbsp;</strong>
                            {item.op5}
                          </div>
                        ) : null}
                      </div>
                      <div className="green">
                        Correct Option:&nbsp;&nbsp;Option ({item.correctAnswer})
                      </div>
                      <div className="explanation">
                        <strong>Explanation:</strong>{" "}
                        {item.explanation ? (
                          <p
                            dangerouslySetInnerHTML={{
                              __html: item.explanation,
                            }}
                            className="question"
                          ></p>
                        ) : (
                          <p className="question">
                            Sorry, no explanation is available for this question
                            at the moment.
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </Fade>
      </div>
    </React.Fragment>
  );
};

export default SingleTest;
