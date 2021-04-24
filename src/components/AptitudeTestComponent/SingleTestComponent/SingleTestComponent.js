import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import "./SingleTestComponent.css";
import Moment from "moment";
import { useAuth } from "../../../contexts/AuthContext";
import useCountDown from "react-countdown-hook";
import AlertModal from "../../AlertModalComponent/AlertModalComponent";
import { useHistory } from "react-router-dom";

const SingleTest = (props) => {
  let history = useHistory();

  //Modal
  const [modal, showModal] = useState("");

  const closeModal = () => {
    showModal("");
  };

  const [tests, setTest] = useState([]);

  const [quesLength, setLength] = useState();
  const [duration, setDuration] = useState();
  const [answers, setAnswers] = useState([]);

  const ref = db.collection("Tests").doc(props.match.params.id);
  useEffect(() => {
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
          questions: Test.questions,
        });
      } else console.log("No such test found!");
    });
  }, []);

  //Store Answers

  const handleAnswer = (e, index, option) => {
    if (option === "Unanswered") answers[index] = null;
    else if (tests.questions[index].correctAnswer === option)
      answers[index] = "Correct";
    else answers[index] = "Incorrect";
  };

  //Form Start Check
  const [form, setForm] = useState(false);

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

  let score = 0;

  //Submit Function
  const confirmSubmit = () => {
    pause();

    //Caluclate Score
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] == null) score += 0;
      else if (answers[i] === "Correct")
        score += parseInt(tests.positivemarks, 10);
      else score -= parseInt(tests.negativemarks, 10);
    }

    db.collection("Tests")
      .doc(props.match.params.id)
      .collection("results").doc(email)
      .set({
        fullname: fullname,
        testname: title,
        email: email,
        timeleft: timeLeft,
        branch: branch,
        score: score
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
  const initialTime = 60 * 60 * 1000;
  const interval = 1000;

  const [timeLeft, { start, pause }] = useCountDown(initialTime, interval);

  let hours = parseInt(timeLeft / 3600000);
  let minutes = parseInt(timeLeft / 60000);
  let seconds = parseInt(timeLeft / 1000) % 60;

  if (minutes === 60) minutes = 0;

  let hoursDisplay = hours;
  let minutesDisplay = minutes;
  let secondsDisplay = seconds;

  if (hours <= 9) hoursDisplay = "0" + hours;
  if (minutes <= 9) minutesDisplay = "0" + minutes;
  if (seconds <= 9) secondsDisplay = "0" + seconds;

  useEffect(() => {
    start();
    pause();
  }, []);

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

  const restart = React.useCallback(() => {
    setForm(true);
    const newTime = 60 * 60 * 1000;
    start(newTime);
  }, []);


  const [result, setResult] = useState([]);
  useEffect(() => {
    db.collection('Tests').doc(props.match.params.id).collection('results').get()
      .then(response => {
        const fetchResults = [];
        response.forEach(document => {
          const fetchResult = {
            id: document.id,
            ...document.data()
          };
          fetchResults.push(fetchResult);
        });
        setResult(fetchResults);
      })
    
  
   }, []);


  const startTest = () => {
  const ref = db.collection("Tests").doc(props.match.params.id).collection('results').doc(email);
  ref.get().then((doc) => {
    if (doc.exists) {
   alert("You have already given test")
    } else {
      closeModal();
      restart();
      sectionChanger("start", 0);
    }
  });
}
  const onSubmit = (e) => {
    e.preventDefault();

    if (!form) {
      showModal(
        <AlertModal
          message="Start the test before submitting it!"
          icon="exclamation"
          leftBtn="Start Test"
          rightBtn="Cancel"
          action={startTest}
          close={closeModal}
        />
      );
    } else {
      if (timeLeft > 0) {
        showModal(
          <AlertModal
            message="Are you sure you want to submit the Test?"
            icon="question"
            leftBtn="Submit"
            rightBtn="Cancel"
            action={confirmSubmit}
            close={closeModal}
          />
        );
      }
    }
  };

  //Question Button Navigations
  const questionBtns = [];

  for (let i = 0; i < quesLength; i++) {
    questionBtns.push(
      <button
        type="button"
        className="question"
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
      <div className="singleTestCont">
        <h1 className="title">
          {tests.title}
          <button type="button" onClick={onSubmit}>
            <i className="fas fa-check"></i>&nbsp;&nbsp;Submit Test
          </button>
        </h1>
        <div className="centreCard">
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
                      <strong>Test Duration:</strong> {tests.duration} minutes.
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
                    <li>
                      <strong>
                        Reloading or closing the tab will end the test
                        immediately.
                      </strong>
                    </li>
                  </ul>
                </div>
                <div className="navigation">
                  <button
                    type="button"
                    className="startBtn"
                    onClick={() => {
                      startTest();
                    }}
                  >
                    Start Test&nbsp;&nbsp;
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </button>
                </div>
              </section>
              {tests.questions &&
                tests.questions.map((item, index) => {
                  return (
                    <section ques-no={index + 1} key={index}>
                      <h3 className="smallTitle">Question No. {index + 1}</h3>
                      <div className="question">{item.question}</div>
                      <input
                        type="radio"
                        name={"option" + (index + 1)}
                        onChange={(e) => handleAnswer(e, index, "Unanswered")}
                        value="Unanswered"
                        className="hiddenRadio"
                        defaultChecked
                      />
                      <div className="options">
                        <div>
                          <input
                            type="radio"
                            onChange={(e) => handleAnswer(e, index, "A")}
                            name={"option" + (index + 1)}
                            id={"optiona" + (index + 1)}
                            value={item.op1}
                          />
                          &nbsp;&nbsp; (A){" "}
                          <label htmlFor={"optiona" + (index + 1)}>
                            {item.op1}
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            onChange={(e) => handleAnswer(e, index, "B")}
                            name={"option" + (index + 1)}
                            id={"optionb" + (index + 1)}
                            value={item.op2}
                          />
                          &nbsp;&nbsp; (B){" "}
                          <label htmlFor={"optionb" + (index + 1)}>
                            {item.op2}
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            onChange={(e) => handleAnswer(e, index, "C")}
                            name={"option" + (index + 1)}
                            id={"optionc" + (index + 1)}
                            value={item.op3}
                          />
                          &nbsp;&nbsp; (C){" "}
                          <label htmlFor={"optionc" + (index + 1)}>
                            {item.op3}
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            onChange={(e) => handleAnswer(e, index, "D")}
                            name={"option" + (index + 1)}
                            id={"optiond" + (index + 1)}
                            value={item.op4}
                          />
                          &nbsp;&nbsp; (D){" "}
                          <label htmlFor={"optiond" + (index + 1)}>
                            {item.op4}
                          </label>
                        </div>
                      </div>
                      <div className="navigation">
                        {index === 0 ? (
                          <button
                            type="button"
                            className="prevBtn"
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
          <div className="right">
            <div className="timer">
              <p>
                Time left
                <br />
                {hoursDisplay + ":" + minutesDisplay + ":" + secondsDisplay}
              </p>
            </div>
            <div className="questionBtns">{questionBtns}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleTest;
