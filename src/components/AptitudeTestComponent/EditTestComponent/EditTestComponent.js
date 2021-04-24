import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { useAuth } from "../../../contexts/AuthContext";

const EditTest = (props) => {
  const [tests, setTest] = useState([""]);

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

  useEffect(() => {
    const fetchquestions = async () => {
      const doc = await db.collection("Tests");
      const snapshot = await doc.where("questions", "!=", []).get();
      if (snapshot.empty) {
        return <h1>No questions</h1>;
      }
      snapshot.forEach((doc) => {
        setQuestion(doc.data().questions);
      });
    };

    fetchquestions();
  }, [props]);

  //   const onChange = (e) => {
  //     const { name, value } = e.target;
  //     const list = [tests];
  //     list[name] = value;
  //    setEditTest(list);
  //   };

  const OnHandle = (e) => {
    const list = [tests];
    list[e.target.name] = e.target.value;
    setTest(list);
  };

  // const [title, setTitle] = useState('');
  // const handleOnChange = (e) => {
  //     setTitle(e.target.value);
  // };

  // const [duration, setDuration] = useState('');
  // const testduration = (e) => {
  //     setDuration(e.target.value);
  // };

  // const [totalmarks, setTotalmarks] = useState('');
  // const marks = (e) => {
  //     setTotalmarks(e.target.value);
  // };

  // const [testdate, setTestdate] = useState('');
  // const date = (e) => {
  //     setTestdate(e.target.value);
  // };

  // const [starttime, setStarttime] = useState('');
  // const sTime = (e) => {
  //     setStarttime(e.target.value);
  // };

  // const [endtime, setEndtime] = useState('');
  // const eTime = (e) => {
  //     setEndtime(e.target.value);
  // };

  // const [positivemarks, setPositivemarks] = useState('');
  // const pMarks = (e) => {
  //     setPositivemarks(e.target.value);
  // };

  // const [negativemarks, setNegativemarks] = useState('');
  // const nMarks = (e) => {
  //     setNegativemarks(e.target.value);
  // };

  const [questions, setQuestion] = useState([
    { question: "", op1: "", op2: "", op3: "", op4: "", correctAnswer: "" },
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
      { question: "", op1: "", op2: "", op3: "", op4: "", correctAnswer: "" },
    ]);
  };

  const handleRemoveQuestion = (index) => {
    const list = [...questions];
    list.splice(index, 1);
    setQuestion(list);
  };

  // const firestoremaisave = (e) => {
  //     if (title !== '' && duration !== '' && totalmarks !== '' && testdate !== '' && starttime !== '' && endtime !== '' && negativemarks !== '' && positivemarks !=='' )
  //     // && question !== "" || op1 !== "" || op2 !== "" || op3 !=="" || op4 !== "" || correctAnswer !== "")
  //     {
  //         e.preventDefault();
  //         db.collection("Tests").add({
  //             title: title,
  //             duration: duration,
  //             totalmarks: totalmarks,
  //             testdate: testdate,
  //             starttime: starttime,
  //             endtime:endtime,
  //             positivemarks:positivemarks,
  //             negativemarks:negativemarks,
  //            questions:questions
  //         })
  //             .then(() => {
  //                 alert("Account Created!");
  //             })
  //             .catch((error) => {
  //                 alert(error.message);
  //             });

  //     }
  //     else {
  //         alert("Please fill in all the details!");
  //     }

  // }
  const firestoremaisave = (e) => {
    e.preventDefault();

    const {
      title,
      duration,
      totalmarks,
      testdate,
      starttime,
      endtime,
      positivemarks,
      negativemarks,
      questions,
    } = tests;

    const updateRef = db.collection("Tests").doc(test.id);
    updateRef
      .set({
        title,
        duration,
        totalmarks,
        testdate,
        starttime,
        endtime,
        positivemarks,
        negativemarks,
        questions,
      })
      .then((docRef) => {
        setTest({
          title: "",
          duration: "",
          totalmarks: "",
          testdate: "",
          starttime: "",
          endtime: "",
          positivemarks: "",
          negativemarks: "",
          questions: [],
        })
          .then(() => {
            alert("Test updated");
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <React.Fragment>
      <div className="createTestCont">
        <h1 className="title">
          Edit {tests.title}
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
                    onChange={(e) => OnHandle(e)}
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
                    onChange={(e) => OnHandle(e)}
                    value={tests.duration}
                    required
                  />
                  <label htmlFor="duration">Test Duration(In mins.)*</label>
                </div>
              </div>
              <div className="inputGroup threeInputs">
                <div className="input">
                  <input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="Test Date"
                    onChange={(e) => OnHandle(e)}
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
                    onChange={(e) => OnHandle(e)}
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
                    onChange={(e) => OnHandle(e)}
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
                    onChange={(e) => OnHandle(e)}
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
                    onChange={(e) => OnHandle(e)}
                    value={tests.positivemarks}
                    required
                  />
                  <label htmlFor="stime">Positive Marks*</label>
                </div>
                <div className="input">
                  <input
                    type="number"
                    name="nmarks"
                    id="nmarks"
                    min="0"
                    placeholder="Negative Marks"
                    onChange={(e) => OnHandle(e)}
                    value={tests.negativemarks}
                    required
                  />
                  <label htmlFor="nmarks">Negative Marks*</label>
                </div>
              </div>
            </form>
            <form>
              {questions.map((create, index) => (
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
                        <option value="">--Select Correct Option--</option>
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
                    <button type="button" className="addBtn" onClick={addMore}>
                      <i className="fas fa-plus"></i>&nbsp;&nbsp;Add Question
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
              ))}
              <div className="inputGroup twoInputs w50p">
                {/* <button type="button" className="addBtn" onClick={addMore}><i className="fas fa-plus"></i>&nbsp;&nbsp;Add Question</button>
                                <button type="button" className="cancelBtn" onClick={handleRemoveQuestion}><i className="fas fa-minus"></i>&nbsp;&nbsp;cancel Question</button> */}
                <button
                  type="button"
                  className="createBtn"
                  onClick={firestoremaisave}
                >
                  <i className="fas fa-check"></i>&nbsp;&nbsp;Create Test
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditTest;
