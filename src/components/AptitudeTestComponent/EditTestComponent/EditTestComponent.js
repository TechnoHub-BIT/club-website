import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { useAuth } from "../../../contexts/AuthContext";
import AlertModal from "../../AlertModalComponent/AlertModalComponent";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";

const EditTest = (props) => {

//current user details
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
  let history = useHistory();
  
  //Modal
  const [modal, showModal] = useState("");
  const closeModal = () => {
    showModal("");
  };
  const [validity, setValidity] = useState(true);



  const [title, setTitle] = useState("");
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const [duration, setDuration] = useState("");
  const testduration = (e) => {
    setDuration(e.target.value);
  };

  const [totalmarks, setTotalmarks] = useState("");
  const marks = (e) => {
    setTotalmarks(e.target.value);
  };

  const [testdate, setTestdate] = useState("");
  const date = (e) => {
    setTestdate(e.target.value);
  };

  const [starttime, setStarttime] = useState("");
  const sTime = (e) => {
    setStarttime(e.target.value);
  };

  const [endtime, setEndtime] = useState("");
  const eTime = (e) => {
    setEndtime(e.target.value);
  };

  const [positivemarks, setPositivemarks] = useState("");
  const pMarks = (e) => {
    setPositivemarks(e.target.value);
  };

  const [negativemarks, setNegativemarks] = useState("");
  const nMarks = (e) => {
    setNegativemarks(e.target.value);
  };
  const [teststatus, setTestStatus] = useState("");
  const status = (e) => {
    setTestStatus(e.target.name);
  };
//   onChange = (e) => {
//     const state = this.state
//     state[e.target.name] = e.target.value;
//     this.setState({ Blogs: state });
// }
// const handleInputChange = (e) => {
//     const list = tests;
//     list[e.target.name] = e.target.value;
//     setInputList(list);
//   };



  const onSubmit = (e) => {
    if (
      title !== "" &&
      duration !== "" &&
      totalmarks !== "" &&
      testdate !== "" &&
      starttime !== "" &&
      endtime !== "" &&
      negativemarks !== "" &&
      teststatus !== "" &&
      positivemarks !== ""
    ) {
      e.preventDefault();
      db.collection("Tests").doc(props.match.params.id)
        .update({
          title: title,
          duration: duration,
          totalmarks: totalmarks,
          teststatus: teststatus,
          testdate: testdate,
          starttime: starttime,
          endtime: endtime,
          positivemarks: positivemarks,
          negativemarks: negativemarks,
          
        })
        .then(() => {
          alert("Test created!");
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Please fill in all the details!");
    }
  };

  const [tests, setTest] = useState([]);
  useEffect(() => {
    const ref = db.collection("Tests").doc(props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const Test = doc.data();
        setDuration(Test.duration);
        // setLength(Test.questions.length);
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
          teststatus: Test.teststatus,
        });
      } else
        showModal(
          <AlertModal
            message="This is not a Valid Test Link!"
            icon="exclamation"
            leftBtn="Go to Home"
            rightBtn="View other Tests"
            action={() => {
              history.push("/home");
            }}
            close={() => {
              history.push("/tests");
            }}
          />
        );
    });
  }, []);


  if (validity)
  return (
    <React.Fragment>
      <Helmet>
        <title>Aptitude Tests | TechnoHub BITD</title>
        <meta name="title" content="Aptitude Tests by TechnoHub BITD" />
      </Helmet>
      {profiles.id === 1 || profiles.id === 4 ? (
        <Fade up>
          <div className="createTestCont">
            <h1 className="title">
              Create New Test
              <a href="/tests">
                <button type="button">
                  <i className="fas fa-eye"></i>&nbsp;&nbsp;View All Tests
                </button>
              </a>
            </h1>
            <div className="centreCard">
              <div className="createForm">
                <form>
                  <h3 className="smallTitle">Basic Test Details</h3>
                  <div className="inputGroup threeInputs">
                    <div className="input">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Test Name"
                        onChange={handleOnChange}
                        value={tests.title}
                        required
                      />
                      <label htmlFor="name">Test Name*</label>
                    </div>
                    <div className="input">
                      <input
                        type="number"
                        name="duration"
                        id="duration"
                        placeholder="Test Duration(In mins.)"
                        onChange={testduration}
                        value={tests.duration}
                        required
                      />
                      <label htmlFor="duration">Test Duration(In mins.)*</label>
                    </div>
                    <div className="input">
                      <select
                        name="status"
                        id="status"
                        onChange={status}
                        value={tests.teststatus}
                        required
                      >
                        <option value="">--Test Status--</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                  <div className="inputGroup threeInputs">
                    <div className="input">
                      <input
                        type="date"
                        name="date"
                        id="date"
                        placeholder="Test Date"
                        onChange={date}
                        value={tests.testdate}
                        required
                      />
                      <label htmlFor="date">Test Date*</label>
                    </div>
                    <div className="input">
                      <input
                        type="time"
                        name="stime"
                        id="stime"
                        placeholder="Starting Time"
                        onChange={sTime}
                        value={tests.starttime}
                        required
                      />
                      <label htmlFor="stime">Starting Time*</label>
                    </div>
                    <div className="input">
                      <input
                        type="time"
                        name="etime"
                        id="etime"
                        placeholder="Ending TIme"
                        onChange={eTime}
                        value={tests.endtime}
                        required
                      />
                      <label htmlFor="etime">Ending Time*</label>
                    </div>
                  </div>
                  <div className="inputGroup threeInputs">
                    <div className="input">
                      <input
                        type="marks"
                        name="marks"
                        id="marks"
                        placeholder="Total marks"
                        onChange={marks}
                        value={tests.totalmarks}
                        required
                      />
                      <label htmlFor="marks">Total Marks*</label>
                    </div>
                    <div className="input">
                      <input
                        type="number"
                        name="pmarks"
                        id="pmarks"
                        placeholder="Positive Marks"
                        onChange={pMarks}
                        value={tests.positivemarks}
                        required
                      />
                      <label htmlFor="pmarks">Positive Marks*</label>
                    </div>
                    <div className="input">
                      <input
                        type="number"
                        name="nmarks"
                        id="nmarks"
                        min="0"
                        placeholder="Negative Marks"
                        onChange={nMarks}
                        value={tests.negativemarks}
                        required
                      />
                      <label htmlFor="nmarks">Negative Marks*</label>
                    </div>
                  </div>
                </form>
                <form>
                    {/* {tests.questions && tests.questions.map((create, index) => (
                      <div>
                        <h3 className="smallTitle">
                          Question No. {index + 1} Details
                        </h3>
                        <div class="inputGroup twoInputs" key={index}>
                          <div className="input">
                            <input
                              type="text"
                              name="question"
                              id={"question" + index}
                              value={create.question}
                              onChange={(e) => handleChange(e, index)}
                              placeholder="Question"
                            />
                            <label htmlFor={"question" + index}>Question</label>
                          </div>
                          <div className="input">
                            <select
                              name="correctAnswer"
                              value={create.correctAnswer}
                              onChange={(e) => handleChange(e, index)}
                              placeholder="Correct Option"
                            >
                              <option value="">
                                --Select Correct Option--
                              </option>
                              <option value="A">A</option>
                              <option value="B">B</option>
                              <option value="C">C</option>
                              <option value="D">D</option>
                            </select>
                          </div>
                        </div>
                        <div className="inputGroup twoInputs">
                          <div className="input">
                            <input
                              type="text"
                              name="op1"
                              id={"optiona" + index}
                              value={create.op1}
                              onChange={(e) => handleChange(e, index)}
                              placeholder="Option A"
                            />
                            <label htmlFor={"optiona" + index}>Option A</label>
                          </div>
                          <div className="input">
                            <input
                              type="text"
                              name="op2"
                              id={"optionb" + index}
                              value={create.op2}
                              onChange={(e) => handleChange(e, index)}
                              placeholder="Option B"
                            />
                            <label htmlFor={"optionb" + index}>Option B</label>
                          </div>
                          <div className="input">
                            <input
                              type="text"
                              name="op3"
                              id={"optionc" + index}
                              value={create.op3}
                              onChange={(e) => handleChange(e, index)}
                              placeholder="Option C"
                            />
                            <label htmlFor={"optionc" + index}>Option C</label>
                          </div>
                          <div className="input">
                            <input
                              type="text"
                              name="op4"
                              id={"optiond" + index}
                              value={create.op4}
                              onChange={(e) => handleChange(e, index)}
                              placeholder="Option D"
                            />
                            <label htmlFor={"optiond" + index}>Option D</label>
                          </div>
                          <button
                            type="button"
                            className="addBtn"
                            onClick={addMore}
                          >
                            <i className="fas fa-plus"></i>&nbsp;&nbsp;Add
                            Question
                          </button>
                          <button
                            type="button"
                            className="cancelBtn"
                            onClick={handleRemoveQuestion}
                          >
                            <i className="fas fa-minus"></i>&nbsp;&nbsp;cancel
                            Question
                          </button>
                        </div>
                      </div>
                    ))} */}
                    <div className="inputGroup twoInputs w50p">
                      {/* <button type="button" className="addBtn" onClick={addMore}><i className="fas fa-plus"></i>&nbsp;&nbsp;Add Question</button>
                                <button type="button" className="cancelBtn" onClick={handleRemoveQuestion}><i className="fas fa-minus"></i>&nbsp;&nbsp;cancel Question</button> */}
                      <button
                        type="button"
                        className="createBtn"
                        onClick={onSubmit}
                      >
                        <i className="fas fa-check"></i>&nbsp;&nbsp;Create Test
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Fade>
        ) : (
          <AlertModal
            message="You aren't authorized to access this page!"
            icon="exclamation"
            leftBtn="Go to Home"
            rightBtn="View other Tests"
            action={() => {
              history.push("/home");
            }}
            close={() => {
              history.push("/tests");
            }}
          />
        )}
      </React.Fragment>
    );
  else
    return (
      <AlertModal
        message="This is not a Valid Test Link!"
        icon="exclamation"
        leftBtn="Go to Home"
        rightBtn="View other Tests"
        action={() => {
          history.push("/home");
        }}
        close={() => {
          history.push("/tests");
        }}
      />
    );
};

export default EditTest;
