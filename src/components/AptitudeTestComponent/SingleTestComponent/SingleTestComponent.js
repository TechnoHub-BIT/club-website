import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import "./SingleTestComponent.css";

const ApptitudeTest = (props) => {
  const [tests, setTest] = useState([]);
  const [questions, setQuestion] = useState([
    {  question: "", op1: "", op2: "", op3: "", op4: "", correctAnswer: "" },
  ]);


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
        questions: Test.questions,
      });
    } else {
      console.log("No such test found!");
    }
  });

  return (
    <div>
      <h1 className="blogTitle">{tests.title}</h1>
      <br></br>
      <h5 className="blogAuthor">by {tests.duration}</h5>
      <br></br>
      <div>{tests.totalmarks}</div>
      <div>{tests.testdate}</div>
      <div>{tests.starttime}</div>
      <div>{tests.endtime}</div>
      <div>{tests.positivemarks}</div>
      <div>{tests.negativemarks}</div>
      <div>
        {questions.map((item) => {
          return (
            <div>
              <div>{item.question}</div>
              <div>{item.op1}</div>
              <div>{item.op2}</div>
              <div>{item.op3}</div>
              <div>{item.op4}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ApptitudeTest;
