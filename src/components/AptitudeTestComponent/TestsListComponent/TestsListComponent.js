import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import ApptitudeTest from "../SingleTestComponent/SingleTestComponent";
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
        <h1 className="title">All Tests</h1>
        <div className="centreCard">
          <div className="testsList">
            {tests.map((test, i) => {
              
              return (
                <div className="test">
                  <div>
                    <div className="index">{i + 1}</div>
                    <div className="title">
                     {test.title}  

                      <div className="date">{test.testdate}</div>
                    
                    </div>
                    <div className="duration">{test.duration}</div>
                    <div className="buttons">
                        <a href= {"/apptitudetest/" + test.id} >
                        <button type="button">
                         Give test
                        </button> 
                        </a>
                        {/* </ApptitudeTest> */}
                       
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
                    </div>
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
