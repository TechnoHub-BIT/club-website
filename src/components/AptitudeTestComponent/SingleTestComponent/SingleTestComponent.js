import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import "./SingleTestComponent.css";

const ApptitudeTest = (props) => {
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
    const fetchOrder = async () => {
      const doc = await db.collection("Tests");
      const snapshot = await doc.where("questions", "!=", []).get();
      if (snapshot.empty) {
        console.log("No matching documents.");
        return <h1>No questions</h1>;
      }
      snapshot.forEach((doc) => {
        setQuestion(doc.data().questions);
      });
    };

    fetchOrder();
  }, [props]);

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
        {questions &&
          questions.length > 0 &&
          questions.map((item, index) => {
            return (
              <div>
                <div>
                  question no.{index + 1} {item.question}
                </div>
                <div>(A). {item.op1}</div>
                <div>(B). {item.op2}</div>
                <div>(C). {item.op3}</div>
                <div>(D). {item.op4}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ApptitudeTest;
