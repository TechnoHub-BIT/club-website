import React from "react";
import "./LeaderboardComponent.css";

const leaderboard = () => {
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
                  <div className="name">Aptitude Test 3</div>
                  <div className="marks">Maximum Marks: 30</div>
                </div>
              </div>
              <div className="right">
                <div className="date">April 22, 2021</div>
              </div>
            </div>
            <div className="leader">
              <div>1.</div>
              <div className="leaderDetails">
                <div className="badge gold">
                  <i className="fas fa-award"></i>
                </div>
                <div className="details">
                  <div className="name">Aaryan Khandelwal</div>
                  <div className="branch">4th Sem, ETC</div>
                </div>
              </div>
              <div className="time">29:20</div>
              <div className="score">30/30</div>
            </div>
            <div className="leader">
              <div>2.</div>
              <div className="leaderDetails">
                <div className="badge silver">
                  <i className="fas fa-award"></i>
                </div>
                <div className="details">
                  <div className="name">Aaryan Khandelwal</div>
                  <div className="branch">4th Sem, ETC</div>
                </div>
              </div>
              <div className="time">29:20</div>
              <div className="score">30/30</div>
            </div>
            <div className="leader">
              <div>3.</div>
              <div className="leaderDetails">
                <div className="badge bronze">
                  <i className="fas fa-award"></i>
                </div>
                <div className="details">
                  <div className="name">Aaryan Khandelwal</div>
                  <div className="branch">4th Sem, ETC</div>
                </div>
              </div>
              <div className="time">29:20</div>
              <div className="score">30/30</div>
            </div>
            <div className="leader">
              <div>4.</div>
              <div className="leaderDetails">
                <div className="details">
                  <div className="name">Aaryan Khandelwal</div>
                  <div className="branch">4th Sem, ETC</div>
                </div>
              </div>
              <div className="time">29:20</div>
              <div className="score">30/30</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default leaderboard;
