import React, { useEffect, useState } from "react";
import "./LeaderboardComponent.css";
import { db } from "../../../firebase";
import Moment from "moment";
import AlertModal from "../../AlertModalComponent/AlertModalComponent";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const Leaderboard = (props) => {
  let history = useHistory();

  const [validity, setValidity] = useState(true);

  const [test, setTest] = useState([]);

  const [listLimit, setLimit] = useState(10);

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

  //  let tb =  db.collection("Tests").doc(props.match.params.id).collection("results").orderBy("score", "desc").orderBy("timeleft", "desc").startAt(test.score).endAt(test.score +'\uf8ff').get();
  const [result, setResult] = useState([]);
  useEffect(() => {
    db.collection("Tests")
      .doc(props.match.params.id)
      .collection("results")
      .orderBy("score", "desc")
      // .orderBy("timeleft", "desc")
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

  //Convert timeleft into integer
  result.forEach((item) => {
    item.timeleft = parseInt(item.timeleft, 10);
  });

  //FUnction to sort array based pn timeleft
  const dynamicSort = (property) => {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      /* next line works with strings and numbers,
       * and you may want to customize it to your needs
       */
      var result =
        a[property] > b[property] ? -1 : a[property] < b[property] ? 1 : 0;
      return result * sortOrder;
    };
  };

  function dynamicSortMultiple() {
    var props = arguments;
    return function (obj1, obj2) {
      var i = 0,
        result = 0,
        numberOfProperties = props.length;
      while (result === 0 && i < numberOfProperties) {
        result = dynamicSort(props[i])(obj1, obj2);
        i++;
      }
      return result;
    };
  }

  result.sort(dynamicSortMultiple("score", "timeleft"));

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

  //Calculate Time taken from Time left
  const calcTime = (testDuration, timeLeft) => {
    let hours = parseInt((testDuration - timeLeft) / 3600000, 10);
    let minutes = parseInt((testDuration - timeLeft) / 60000, 10);
    let seconds = parseInt(((testDuration - timeLeft) / 1000) % 60, 10);

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    return hours + ":" + minutes + ":" + seconds;
  };

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
            <table id="resultsExcelTable" className="table d-none">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>E-mail</th>
                </tr>
              </thead>
              <tbody>
                {result.map((leader, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}.</td>
                      <td>{leader.fullname}</td>
                      <td>{leader.email}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {profiles.id === 1 || profiles.id === 4 ? (
              <div style={{ marginLeft: "15vw" }}>
                <ReactHTMLTableToExcel
                  className="btn btn-info"
                  table="resultsExcelTable"
                  filename={test.title + "-Results"}
                  sheet="Sheet"
                  buttonText="Export List as Spreadsheet"
                />
              </div>
            ) : null}

            {result.length != 0 ? (
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
                  {result.map((leader, index) => {
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
                        <div
                          className="badge onlyMobile"
                          style={{ fontSize: "1.2rem", fontWeight: "500" }}
                        >
                          {index + 1}.
                        </div>
                      );

                    //Display only Top 10 Scores
                    if (index < listLimit) {
                      const testDuration =
                        parseInt(test.duration, 10) * 60 * 1000;

                      return (
                        <div className="leader">
                          <div className="sno">{index + 1}.</div>
                          <div className="leaderDetails">
                            {badge}
                            <div className="details">
                              <div className="name">
                                {leader.fullname != null
                                  ? leader.fullname
                                  : leader.email}
                              </div>
                              <div className="branch">{leader.branch}</div>
                            </div>
                          </div>
                          <div className="time">
                            <strong className="onlyMobile">
                              Time Taken:&nbsp;&nbsp;
                            </strong>
                            {calcTime(testDuration, leader.timeleft)}
                          </div>
                          <div className="score">
                            {leader.score}
                            <strong className="onlyMobile">
                              &nbsp;&nbsp;
                              <span style={{ fontSize: "1rem" }}>
                                marks scored
                              </span>
                            </strong>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
                {listLimit === 10 ? (
                  <button
                    type="button"
                    className="viewAllBtn"
                    onClick={() => setLimit(result.length)}
                  >
                    <i className="fas fa-eye"></i>&nbsp;&nbsp;View All
                  </button>
                ) : (
                  <button
                    type="button"
                    className="viewAllBtn"
                    onClick={() => setLimit(10)}
                  >
                    <i className="fas fa-long-arrow-alt-up"></i>&nbsp;&nbsp;Show
                    Top 10
                  </button>
                )}
              </div>
            ) : (
              <h4 style={{ textAlign: "center", padding: "3em 20px" }}>
                There are no entries yet!
              </h4>
            )}
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
