import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import "./SingleTestComponent.css";
import Moment from 'moment';

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
      const doc = await db.collection("Tests");
      const snapshot = await doc.where("questions", "!=", []).get();
      if (snapshot.empty) {
      
        return <h1>No questions</h1>;
      }
      snapshot.forEach((doc) => {
        setQuestion(doc.data().questions);
      });
    };

    fetchquestions();
  }, [props]);

  const sectionChanger = (action, index) => {
    const sections = document.querySelectorAll("section");
    document.querySelector("section.active").classList.remove("active");

    if(action === "next")
      sections[index + 1].classList.add("active");
    else
      sections[index - 1].classList.add("active");
  };

  return (
    <React.Fragment>
      <div className="singleTestCont">
        <h1 className="title">
          {tests.title}
          <button type="button"><i className="fas fa-check"></i>&nbsp;&nbsp;Submit Test</button>
        </h1>
        <div className="centreCard">
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
                  <li><strong>Negative Marks for each Wrong answer:</strong> -{tests.positivemarks}.</li>
                </ul>
              </div>
              <div className="navigation">
                <button type="button" className="startBtn" onClick={(e) => sectionChanger("next", 0)}>Start Test&nbsp;&nbsp;<i className="fas fa-long-arrow-alt-right"></i></button>
              </div>
            </section>
            {
              questions &&
              questions.length > 0 &&
              questions.map((item, index) => {
                if(item.question !== "") {
                  return (
                    <section ques-no={ index + 1 }>
                      <h3 className="smallTitle">Question No. { index + 1 }</h3>
                      <div className="question">{item.question}</div>
                      <div className="clearSelection">
                        <button type="button">Clear Selection</button>
                      </div>
                      <div className="options">
                        <div style={{display: "none"}}>
                          <input type="radio" name={ "option" + (index + 1) } value="Unanswered" checked="true" />
                        </div>
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
                        <button type="button" className="prevBtn" onClick={(e) => sectionChanger("prev", index + 1)}>
                          <i className="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp;Previous
                        </button>
                        <button type="button" className="nextBtn" onClick={(e) => sectionChanger("next", index + 1)}>
                          Save & Next&nbsp;&nbsp;<i className="fas fa-long-arrow-alt-right"></i>
                        </button>
                      </div>
                    </section>
                  );
                }
            })}
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SingleTest;
