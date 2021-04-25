import React, { useEffect, useState } from "react";
import "./LeaderboardComponent.css";
import { db } from "../../../firebase";
import Moment from "moment";
import AlertModal from "../../AlertModalComponent/AlertModalComponent";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";

const Leaderboard = (props) => {
  let history = useHistory();

  //Modal
  const [modal, showModal] = useState("");

  const closeModal = () => {
    showModal("");
  };

  const [validity, setValidity] = useState(true);

  const [test, setTest] = useState([]);

  const ref = db.collection("Tests").doc(props.match.params.id);
  useEffect(() => {
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
      } else setValidity(false);
    });
  }, []);

  const [result, setResult] = useState([]);
  useEffect(() => {
    db.collection("Tests")
      .doc(props.match.params.id)
      .collection("results")
      .orderBy("score", "desc")
      .get()
      .then((response) => {
        const fetchResults = [];
        response.forEach((document) => {
          const fetchResult = {
            id: document.id,
            ...document.data(),
          };
          fetchResults.push(fetchResult);
        });
        setResult(fetchResults);
      });
  }, []);

  //Current User Details
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

  if (validity)
    return (
      <React.Fragment>
        <Helmet>
          <title>Aptitude Tests | TechnoHub BITD</title>
          <meta name="title" content="Aptitude Tests by TechnoHub BITD" />
        </Helmet>
        <Fade up>
          <div className="leaderboardCont">
            <h1 className="title">LEADERBOARD</h1>
            <div className="centreCard">
              <div className="leadersList">
                <div className="header">
                  <div className="left">
                    <i className="fas fa-trophy"></i>
                    <div className="testDetails">
                      <div className="name">{test.title}</div>
                      <div className="marks">
                        Maximum Marks: {test.totalmarks}
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div className="date">
                      {Moment(test.testdate).format("ll")}
                    </div>
                  </div>
                </div>
                {result.map((test, index) => {
                  let badge = null;
                  if (index === 0)
                    badge = (
                      <div className="badge gold">
                        <i className="fas fa-award"></i>
                      </div>
                    );
                  else if (index === 1)
                    badge = (
                      <div className="badge silver">
                        <i className="fas fa-award"></i>
                      </div>
                    );
                  else if (index === 2)
                    badge = (
                      <div className="badge bronze">
                        <i className="fas fa-award"></i>
                      </div>
                    );
                  else
                    badge = (
                      <div className="badge" style={{ opacity: "0" }}>
                        <i className="fas fa-award"></i>
                      </div>
                    );

                  //Display only Top 10 Scores
                  if (index < 10) {
                    return (
                      <div className="leader">
                        <div className="sno">{index + 1}.</div>
                        <div className="leaderDetails">
                          {badge}
                          <div className="details">
                            <div className="name">{test.fullname}</div>
                            <div className="branch">{test.branch}</div>
                          </div>
                        </div>
                        <div className="time">{test.timeleft}</div>
                        <div className="score">{test.score}</div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </Fade>
      </React.Fragment>
    );
  else
    return (
      <AlertModal
        message="This is not a Valid Leaderboard Link!"
        icon="exclamation"
        leftBtn="Go to Home"
        rightBtn="View Tests"
        action={() => {
          history.push("/home");
        }}
        close={() => {
          history.push("/tests");
        }}
      />
    );
};

export default Leaderboard;
