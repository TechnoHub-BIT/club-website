import React, { useState, useEffect } from "react";
import "./CreateTestComponent.css";
import { db } from "../../../firebase";
import { useAuth } from "../../../contexts/AuthContext";
import AlertModal from "../../AlertModalComponent/AlertModalComponent";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";
import { TextArea } from "semantic-ui-react";

const CreateTest = () => {
  let history = useHistory();

  //Modal
  const [modal, showModal] = useState("");

  const closeModal = () => {
    showModal("");
  };

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
    setTestStatus(e.target.value);
  };
  const [answerstatus, setAnswerstatus] = useState("");
  const answerkeystatus = (e) => {
    setAnswerstatus(e.target.value);
  };

  const [testprivacy, setTestprivacy] = useState("");
  const privacy = (e) => {
    setTestprivacy(e.target.value);
  };

  const [privacypassword, setPrivacypassword] = useState("");
  const ppassword = (e) => {
    setPrivacypassword(e.target.value);
  };

  const [testdescription, setTestDescription] = useState("");
  const description = (e) => {
    setTestDescription(e.target.value);
  };

  const [questions, setQuestion] = useState([
    {
      question: "",
      op1: "",
      op2: "",
      op3: "",
      op4: "",
      op5: "",
      correctAnswer: "",
      questionType: "",
      explanation: "",
      imageUrl: "",
    },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...questions];
    list[index][name] = value;
    setQuestion(list);
  };

  const addMore = () => {
    setQuestion([
      ...questions,
      {
        question: "",
        op1: "",
        op2: "",
        op3: "",
        op4: "",
        op5: "",
        correctAnswer: "",
        questionType: "",
        explanation: "",
        imageUrl: "",
      },
    ]);
  };

  const handleRemoveQuestion = (index) => {
    const list = [...questions];
    list.splice(index, 1);
    setQuestion(list);
  };

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

  const firestoremaisave = (e) => {
    if (
      title !== "" &&
      duration !== "" &&
      totalmarks !== "" &&
      testdate !== "" &&
      starttime !== "" &&
      endtime !== "" &&
      negativemarks !== "" &&
      teststatus !== "" &&
      positivemarks !== "" &&
      answerstatus !== "" &&
      teststatus !== "" &&
      testprivacy !== ""
    ) {
      // && question !== "" || op1 !== "" || op2 !== "" || op3 !=="" || op4 !== "" || correctAnswer !== "")
      e.preventDefault();
      db.collection("Tests")
        .add({
          title: title,
          duration: duration,
          totalmarks: totalmarks,
          teststatus: teststatus,
          answerstatus: answerstatus,
          testdate: testdate,
          starttime: starttime,
          endtime: endtime,
          positivemarks: positivemarks,
          negativemarks: negativemarks,
          questions: questions,
          testprivacy: testprivacy,
          privacypassword: privacypassword,
          testdescription: testdescription,
        })
        .then(() => {
          showModal(
            <AlertModal
              message="Test has been created successfully!"
              icon="successful"
              leftBtn="Okay"
              action={() => {
                history.push("/tests");
              }}
              close={closeModal}
            />
          );
        })
        .catch((error) => {
          alert(error.message);
        });
    } else
      showModal(
        <AlertModal
          message="Please fill in all the details!"
          icon="exclamation"
          leftBtn="Okay"
          action={closeModal}
          close={closeModal}
        />
      );
  };

  return (
    <React.Fragment>
      {modal}
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
                  <div className="inputGroup twoInputs">
                    <div className="input">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Test Name"
                        onChange={handleOnChange}
                        value={title}
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
                        value={duration}
                        required
                      />
                      <label htmlFor="duration">Test Duration(In mins.)*</label>
                    </div>
                  </div>
                  <div className="inputGroup twoInputs">
                    <div className="input">
                      <select
                        name="status"
                        id="status"
                        onChange={status}
                        value={teststatus}
                        required
                      >
                        <option value="">--Test Status--</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Over">Over</option>
                      </select>
                    </div>
                    <div className="input">
                      <select
                        name="answerkey"
                        onChange={answerkeystatus}
                        value={answerstatus}
                        id="answerkey"
                        required
                      >
                        <option value="">--Answer Key Status--</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                    <div className="input">
                      <select
                        name="privacy"
                        id="privacy"
                        onChange={privacy}
                        value={testprivacy}
                        required
                      >
                        <option value="">--Test Privacy--</option>
                        <option value="Public">Public</option>
                        <option value="Private">Private</option>
                      </select>
                    </div>
                    <div className="input">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Test privacy password"
                        onChange={ppassword}
                        value={privacypassword}
                      />
                      <label htmlFor="password">
                        Test Password(if private)
                      </label>
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
                        value={testdate}
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
                        value={starttime}
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
                        value={endtime}
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
                        value={totalmarks}
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
                        value={positivemarks}
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
                        value={negativemarks}
                        required
                      />
                      <label htmlFor="nmarks">Negative Marks*</label>
                    </div>
                  </div>
                  <div class="inputGroup">
                    <div className="input">
                      <TextArea
                        type="text"
                        name="testdescription"
                        id="testdescription"
                        value={testdescription}
                        onChange={description}
                        placeholder="Test description"
                      />
                      <label htmlFor="testdescription">Test Description</label>
                    </div>
                  </div>
                </form>
                <form>
                  {questions &&
                    questions.map((create, index) => (
                      <div>
                        <h3 className="smallTitle">
                          Question No. {index + 1} Details&nbsp;&nbsp;
                          {questions.length !== 1 && (
                            <button
                              type="button"
                              className="removeBtn"
                              onClick={() => handleRemoveQuestion(index)}
                            >
                              <i className="fas fa-times"></i>
                            </button>
                          )}
                        </h3>
                        <div class="inputGroup" key={index}>
                          <div className="input">
                            <TextArea
                              type="text"
                              name="question"
                              id={"question" + index}
                              value={create.question}
                              onChange={(e) => handleChange(e, index)}
                              placeholder="Question"
                            />
                            <label htmlFor={"question" + index}>Question</label>
                          </div>
                        </div>
                        <div class="inputGroup" key={index}>
                          <div className="input">
                            <TextArea
                              type="text"
                              name="explanation"
                              id="explanation"
                              value={create.explanation}
                              onChange={(e) => handleChange(e, index)}
                              placeholder="Explanation"
                            />
                            <label htmlFor="explanation">Explanation</label>
                          </div>
                        </div>
                        <div className="inputGroup twoInputs">
                          <div className="input">
                            <select
                              name="questionType"
                              value={create.questionType}
                              onChange={(e) => handleChange(e, index)}
                            >
                              <option>--Select Question Type--</option>
                              <option value="MCQ">MCQ</option>
                              <option value="MSQ">MSQ</option>
                            </select>
                          </div>
                          <div className="input">
                            <input
                              name="correctAnswer"
                              type="text"
                              id={"correctAnswer" + index}
                              value={create.correctAnswer}
                              onChange={(e) => handleChange(e, index)}
                              placeholder="Correct Option"
                              required
                            />
                            <label htmlFor={"correctAnswer" + index}>
                              Correct Answer
                            </label>
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
                          <div className="input">
                            <input
                              type="text"
                              name="op5"
                              id={"optione" + index}
                              value={create.op5}
                              onChange={(e) => handleChange(e, index)}
                              placeholder="Option E"
                            />
                            <label htmlFor={"optione" + index}>Option E</label>
                          </div>
                          <div className="input">
                            <input
                              type="text"
                              name="imageUrl"
                              id={"imageUrl" + index}
                              value={create.imageUrl}
                              onChange={(e) => handleChange(e, index)}
                              placeholder="Question Image URL(1920x1080px)"
                            />
                            <label htmlFor={"imageUrl" + index}>
                              Question Image URL(1920x1080px)
                            </label>
                          </div>
                        </div>
                        {questions.length - 1 === index && (
                          <div className="inputGroup twoInputs w50p">
                            <button
                              type="button"
                              className="addBtn"
                              onClick={() => addMore(index)}
                            >
                              <i className="fas fa-plus"></i>&nbsp;&nbsp;Add
                              Question
                            </button>
                            <button
                              type="button"
                              className="createBtn"
                              onClick={firestoremaisave}
                            >
                              <i className="fas fa-check"></i>&nbsp;&nbsp;Create
                              Test
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
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
};

export default CreateTest;
