import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { useAuth } from "../../../contexts/AuthContext";

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

  return (
    <React.Fragment>
   
      {testname.map((item) => {
        if (item.title ===  tests.testname ) {
          return (
            <div>
              {item.questions.map((que,index) => {
                return <div>
                    
                    <div>Q{index+1}.      {que.question}</div>
                <div>correct Answer:  {que.correctAnswer}</div>
                </div>;
              })}
            </div>
          );
        }
      })}
      <h1>Your answers</h1>
      {tests.options &&
        tests.options.map((items,index) => {
          return <div>{index+1}:  {items}</div>;
        })}

      {tests.answers &&
        tests.answers.map((items,index) => {
          
          return <div>{index+1}:  {items}</div>;
        })}
    </React.Fragment>
  );
};

export default AnswerKey;
