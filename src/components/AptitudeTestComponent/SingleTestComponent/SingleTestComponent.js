import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import "./SingleTestComponent.css";
import Moment from 'moment';
import useCountDown from 'react-countdown-hook';

const SingleTest = (props) => {
  const [tests, setTest] = useState([]);

  const ref = db.collection("Tests").doc(props.match.params.id);
  ref.get().then((doc) => {
    if (doc.exists) {
      const Test = doc.data();
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
      });
    } else {
      console.log("No such test found!");
    }
  });

  const [questions, setQuestion] = useState(null);

  useEffect(() => {
    const fetchquestions = async () => {
      // const foo = await db.collection("Tests").doc(props.match.params.id);
      const snapshot = await db.collection("Tests"). where('Tests', '==' ,props.match.params.id).where("questions", "!=", []).get();
      if (snapshot.empty) {
      
        return <h1>No questions</h1>;
      }
      snapshot.forEach((doc) => {
        setQuestion(doc.data().questions);
      });
    };

    fetchquestions();
  }, [props]);

  //Next and Previous Buttons
  const sectionChanger = (action, index) => {
    document.querySelector("section.active").classList.remove("active");

    const sections = document.querySelectorAll("section");

    if(action === "next")
      sections[index + 1].classList.add("active");
    else
      sections[index - 1].classList.add("active");
  };

  //CLear Selection Button
  const clearSelection = (name) => {
    const radioBtns = document.querySelectorAll("input[type='radio'][name='" + name + "']")

    radioBtns.forEach(radioBtn => {
      if(radioBtn.value === "Unanswered")
        radioBtn.checked = true;
      else
        radioBtn.checked = false;
    });
  };

  //Form Start Check
  const [form, setForm] = useState(false);
  
  //Countdown Timer
  const initialTime =  0.5 * 60 * 1000;
  const interval = 1000;

  const [timeLeft, { start, pause, resume, reset }] = useCountDown(initialTime, interval);

  let hours = parseInt(timeLeft / 3600000);
  let minutes = parseInt(timeLeft / 60000);
  let seconds = parseInt(timeLeft / 1000);

  if(minutes === 60)
    minutes = 0;

  useEffect(() => {
    start();
    pause();
  }, []);

  if(timeLeft === 0 && form) {
    setForm(false);
    console.warn("Time up!");
  }
  
  const restart = React.useCallback(() => {
    const newTime = 60.2 * 60 * 1000;
    start(newTime);
  }, []);

  return (
    <React.Fragment>
      <div className="singleTestCont">
        <h1 className="title">
          {tests.title}
          <button type="button"><i className="fas fa-check"></i>&nbsp;&nbsp;Submit Test</button>
        </h1>
        <div className="centreCard">
          <div className="left">
            <form>
              <section className="active">
                <div className="testInstructions">
                  <h3 className="smallTitle">Test Instructions</h3>
                  <ul>
                    <li><strong>Test Date:</strong> {Moment(tests.testdate).format('ll')}.</li>
                    <li><strong>You can give the test between:</strong> {tests.starttime} to {tests.endtime}.</li>
                    <li><strong>Test Duration:</strong> {tests.duration} minutes.</li>
                    <li><strong>Total Marks:</strong> {tests.totalmarks}.</li>
                    <li><strong>Marks for each Correct answer:</strong> {tests.positivemarks}.</li>
                    <li><strong>Negative Marks for each Wrong answer:</strong> -{tests.negativemarks}.</li>
                  </ul>
                </div>
                <div className="navigation">
                  <button type="button" className="startBtn" onClick={() => {setForm(true); sectionChanger("next", 0); restart();}}>Start Test&nbsp;&nbsp;<i className="fas fa-long-arrow-alt-right"></i></button>
                </div>
              </section>
              {
                questions &&
                questions.length > 0 &&
                questions.map((item, index) => {
                  return (
                    <section ques-no={ index + 1 } key={index}>
                      <h3 className="smallTitle">Question No. { index + 1 }</h3>
                      <div className="question">{item.question}</div>
                      <div className="clearSelection">
                        <button type="button" onClick={() => clearSelection(("option" + (index + 1)))}>Clear Selection</button>
                      </div>
                      <div className="options">
                        <input type="radio" name={ "option" + (index + 1) } value="Unanswered" defaultChecked hidden />
                        <div>
                          <input type="radio" name={ "option" + (index + 1) } id={ "optiona" + (index + 1) } value={item.op4} />&nbsp;&nbsp;
                          (A) <label htmlFor={ "optiona" + (index + 1) }>{item.op1}</label>
                        </div>
                        <div>
                          <input type="radio" name={ "option" + (index + 1) } id={ "optionb" + (index + 1) } value={item.op4} />&nbsp;&nbsp;
                          (B) <label htmlFor={ "optionb" + (index + 1) }>{item.op2}</label>
                        </div>
                        <div>
                          <input type="radio" name={ "option" + (index + 1) } id={ "optionc" + (index + 1) } value={item.op4} />&nbsp;&nbsp;
                          (C) <label htmlFor={ "optionc" + (index + 1) }>{item.op3}</label>
                        </div>
                        <div>
                          <input type="radio" name={ "option" + (index + 1) } id={ "optiond" + (index + 1) } value={item.op4} />&nbsp;&nbsp;
                          (D) <label htmlFor={ "optiond" + (index + 1) }>{item.op4}</label>
                        </div>
                      </div>
                      <div className="navigation">
                        {
                          index === 0 ?
                            <button type="button" className="prevBtn" disabled onClick={() => sectionChanger("next", (index + 1))}>
                              <i className="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp;Previous
                            </button>
                                      :
                            <button type="button" className="prevBtn" onClick={() => sectionChanger("prev", (index + 1))}>
                              <i className="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp;Previous
                            </button>
                        }
                        <button type="button" className="nextBtn" onClick={() => sectionChanger("next", (index + 1))}>
                          Save & Next&nbsp;&nbsp;<i className="fas fa-long-arrow-alt-right"></i>
                        </button>
                      </div>
                    </section>
                  );
              })}
            </form>
          </div>
          <div className="right">
            <div className="timer">
              <p>Time left: {hours + ":" + minutes + ":" + seconds}</p>
            </div>
            <div className="questionBtns">
              <button type="button" className="question">1</button>
              <button type="button" className="question">2</button>
              <button type="button" className="question">3</button>
              <button type="button" className="question">4</button>
              <button type="button" className="question">5</button>
              <button type="button" className="question">6</button>
              <button type="button" className="question">7</button>
              <button type="button" className="question">8</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SingleTest;
