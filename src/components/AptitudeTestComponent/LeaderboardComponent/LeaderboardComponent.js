import React, { useEffect, useState } from "react";
import "./LeaderboardComponent.css";
import { db } from '../../../firebase'
import Moment from 'moment';

const Leaderboard = (props) => {

  const [test, setTest] = useState([]);

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

  const [result, setResult] = useState([]);
  useEffect(() => {
    db.collection('Tests').doc(props.match.params.id).collection('results').orderBy('score','desc').get()
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


  return (
    <React.Fragment>
     
      
      <div className="leaderboardCont">
        <h1 className="title">LEADERBOARD</h1>
        <div className="centreCard">
          <div className="leadersList">
            <div className="header">
              <div className="left">
                <i className="fas fa-trophy"></i>
                <div className="testDetails">
                  <div className="name">{test.title}</div>
                  <div className="marks">Maximum Marks: {test.totalmarks}</div>
                </div>
              </div>
              <div className="right">
                <div className="date">{Moment(test.testdate).format('ll')}</div>
              </div>
            </div>
            { result.map((test) => {
              return(
            <div className="leader">
              <div className="sno">1.</div>
              <div className="leaderDetails">
                <div className="badge gold">
                  <i className="fas fa-award"></i>
                </div>
                <div className="details">
                  <div className="name">{test.fullname}</div>
                  <div className="branch">
                    {test.branch}
                  </div>
                </div>
              </div>
              <div className="time">{test.timeleft}</div>
              <div className="score">{test.score}</div>
            </div>
               )
              })}
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Leaderboard;
