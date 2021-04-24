import React, { useEffect, useState } from "react";
import "./LeaderboardComponent.css";
import { db } from '../../../firebase'
const Leaderboard = (props) => {
  const [tests, setTest] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      db.collection("Tests").doc(props.match.params.id).collection("results").onSnapshot(function (data) {
        // setTest(
        //   data.docs.map((doc) => ({
        //     ...doc.data(),
        //     id: doc.id,
        //   }))
        // );
      });
    };
    fetchdata();
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
            
          
                  <div className="name">Aptitude test 3</div>
                  <div className="marks">Maximum Marks: 30</div>
                </div>
              </div>
              <div className="right">
                <div className="date">April 22, 2021</div>
              </div>
            </div>
            {tests && tests.map((test) => {
              return(

            
            <div className="leader">
              <div className="sno">1.</div>
              <div className="leaderDetails">
                <div className="badge gold">
                  <i className="fas fa-award"></i>
                </div>
                <div className="details">
                  <div className="name">{test.name}</div>
                  <div className="branch">
                    {test.branch}
                  </div>
                </div>
              </div>
              <div className="time">{test.timeleft}</div>
              <div className="score">30/30</div>
            </div>
               )
              })}
            {/* <div className="leader">
              <div className="sno">2.</div>
              <div className="leaderDetails">
                <div className="badge silver">
                  <i className="fas fa-award"></i>
                </div>
                <div className="details">
                  <div className="name">Aaryan Khandelwal</div>
                  <div className="branch">
                    Electronics and Telecommunication
                  </div>
                </div>
              </div>
              <div className="time">29:20</div>
              <div className="score">30/30</div>
            </div>
            <div className="leader">
              <div className="sno">3.</div>
              <div className="leaderDetails">
                <div className="badge bronze">
                  <i className="fas fa-award"></i>
                </div>
                <div className="details">
                  <div className="name">Aaryan Khandelwal</div>
                  <div className="branch">
                    Electronics and Telecommunication
                  </div>
                </div>
              </div>
              <div className="time">29:20</div>
              <div className="score">30/30</div>
            </div>
            <div className="leader">
              <div className="sno">4.</div>
              <div className="leaderDetails">
                <div className="details">
                  <div className="name">Aaryan Khandelwal</div>
                  <div className="branch">
                    Electronics and Telecommunication
                  </div>
                </div>
              </div>
              <div className="time">29:20</div>
              <div className="score">30/30</div>
            </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Leaderboard;
