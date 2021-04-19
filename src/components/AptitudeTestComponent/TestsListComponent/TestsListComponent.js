import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import "./TestsListComponent.css";

const TestsList = () => {
  const [tests, setTest] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      db.collection("Tests").onSnapshot(function (data) {
        setTest(
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
      <div className="testsListCont">
        <h1 className="title">
          All Tests
          <a href="/createtest"><button type="button"><i className="fas fa-plus"></i>&nbsp;&nbsp;Create New test</button></a>
        </h1>
        <div className="centreCard">
          <div className="testsList">
            <div className="test">
              <div className="index"><strong>S.No.</strong></div>
              <div className="testTitle">
                Test Title
                <div className="date"><strong>Date</strong></div>
              </div>
              <div className="duration"><strong>Test Duration</strong></div>
              <div className="buttons"><strong>Action Buttons</strong></div>
            </div>
            {tests.map((test, i) => {
              return (
                <div className="test">
                  <div className="index">{i + 1}.</div>
                  <div className="testTitle">
                    <a href="#" >{test.title}&nbsp;&nbsp;<i className="fas fa-external-link-alt"></i></a>
                    <div className="date">{test.testdate}</div>
                  </div>
                  <div className="duration">{test.duration} mins.</div>
                  <div className="buttons">
                    <a href="#">
                      <button type="button">
                        <i className="fas fa-pencil-alt"></i>
                      </button>
                    </a>
                    <a href="#">
                      <button type="button">
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </a>
                    <a href="#">
                      <button type="button">
                        <i className="fas fa-trophy"></i>
                      </button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TestsList;
