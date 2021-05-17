import React, { Component } from "react";
import { db } from "../../../firebase";
import AlertModal from "../../AlertModalComponent/AlertModalComponent";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";
import { TextArea } from "semantic-ui-react";

class EditTest extends Component {
  //     const { currentUser, logout } = useAuth();
  //   const [profiles, setProfiles] = useState([]);

  //   useEffect(() => {
  //     if (currentUser) {
  //       db.collection("members")
  //         .doc(currentUser.uid)
  //         .onSnapshot(function (doc) {
  //           const data = doc.data();
  //           setState(data);
  //         });
  //     }
  //   }, [currentUser]);

  state = {
    title: "",
    duration: "",
    totalmarks: "",
    teststatus: "",
    testdate: "",
    starttime: "",
    endtime: "",
    positivemarks: "",
    negativemarks: "",
    answerstatus: "",
    profiles: "",
    testprivacy: "",
    privacypassword: "",
    questions: [
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
      },
    ],
  };

  componentDidMount() {
    const ref = db.collection("Tests").doc(this.props.match.params.id);
    ref.get().then((doc) => {
      const test = doc.data();
      this.setState({
        // id: doc.id,
        title: test.title,
        duration: test.duration,
        totalmarks: test.totalmarks,
        testdate: test.testdate,
        starttime: test.starttime,
        endtime: test.endtime,
        positivemarks: test.positivemarks,
        negativemarks: test.negativemarks,
        questions: test.questions,
        teststatus: test.teststatus,
        answerstatus: test.answerstatus,
        questions: test.questions,
        testprivacy: test.testprivacy,
        privacypassword: test.privacypassword,
      });
    });
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ test: state });
  };

  handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...this.state.questions];
    list[index][name] = value;
    this.setState(list);
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      title,
      duration,
      totalmarks,
      teststatus,
      testdate,
      starttime,
      endtime,
      positivemarks,
      negativemarks,
      answerstatus,
      questions,
      testprivacy,
      privacypassword,
    } = this.state;
    const updateRef = db.collection("Tests").doc(this.props.match.params.id);
    updateRef
      .update({
        title,
        duration,
        totalmarks,
        teststatus,
        testdate,
        starttime,
        endtime,
        positivemarks,
        negativemarks,
        answerstatus,
        questions,
        testprivacy,
        privacypassword,
      })
      .then((docRef) => {
        this.setState({
          title: "",
          duration: "",
          totalmarks: "",
          teststatus: "",
          testdate: "",
          starttime: "",
          endtime: "",
          positivemarks: "",
          negativemarks: "",
          answerstatus: "",
          testprivacy: "",
          privacypassword: "",
          questions: [
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
            },
          ],
        });
        this.props.history
          .push("/tests")
          .then(() => {
            alert("Test update");
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  addMore = () => {
    this.setState((prevState) => ({
      questions: [
        ...prevState.questions,
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
        },
      ],
    }));
  };

  handleRemoveQuestion = (index) => {
    this.setState({
      questions: this.state.questions.filter((s, sindex) => index !== sindex),
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* {modal} */}
        <Helmet>
          <title>Aptitude Tests | TechnoHub BITD</title>
          <meta name="title" content="Aptitude Tests by TechnoHub BITD" />
        </Helmet>
        {/* {profiles.id === 1 || profiles.id === 4 ? ( */}
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
                        name="title"
                        // id="name"
                        placeholder="Test Name"
                        value={this.state.title}
                        onChange={this.onChange}
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
                        onChange={this.onChange}
                        value={this.state.duration}
                        required
                      />
                      <label htmlFor="duration">Test Duration(In mins.)*</label>
                    </div>
                  </div>
                  <div className="inputGroup twoInputs">
                    <div className="input">
                      <select
                        name="teststatus"
                        id="status"
                        onChange={this.onChange}
                        value={this.state.teststatus}
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
                        name="answerstatus"
                        onChange={this.onChange}
                        value={this.state.answerstatus}
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
                        name="testprivacy"
                        id="testprivacy"
                        onChange={this.onChange}
                        value={this.state.testprivacy}
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
                        name="privacypassword"
                        id="privacypassword"
                        placeholder="Test privacy password"
                        onChange={this.onChange}
                        value={this.state.privacypassword}
                      />
                      <label htmlFor="privacypassword">
                        Test Password(if private)
                      </label>
                    </div>
                  </div>
                  <div className="inputGroup threeInputs">
                    <div className="input">
                      <input
                        type="date"
                        name="testdate"
                        id="date"
                        placeholder="Test Date"
                        onChange={this.onChange}
                        value={this.state.testdate}
                        required
                      />
                      <label htmlFor="date">Test Date*</label>
                    </div>
                    <div className="input">
                      <input
                        type="time"
                        name="starttime"
                        id="stime"
                        placeholder="Starting Time"
                        onChange={this.onChange}
                        value={this.state.starttime}
                        required
                      />
                      <label htmlFor="stime">Starting Time*</label>
                    </div>
                    <div className="input">
                      <input
                        type="time"
                        name="endtime"
                        id="etime"
                        placeholder="Ending TIme"
                        onChange={this.onChange}
                        value={this.state.endtime}
                        required
                      />
                      <label htmlFor="etime">Ending Time*</label>
                    </div>
                  </div>
                  <div className="inputGroup threeInputs">
                    <div className="input">
                      <input
                        type="marks"
                        name="totalmarks"
                        id="marks"
                        placeholder="Total marks"
                        onChange={this.onChange}
                        value={this.state.totalmarks}
                        required
                      />
                      <label htmlFor="marks">Total Marks*</label>
                    </div>
                    <div className="input">
                      <input
                        type="number"
                        name="positivemarks"
                        id="pmarks"
                        placeholder="Positive Marks"
                        onChange={this.onChange}
                        value={this.state.positivemarks}
                        required
                      />
                      <label htmlFor="pmarks">Positive Marks*</label>
                    </div>
                    <div className="input">
                      <input
                        type="number"
                        name="negativemarks"
                        id="nmarks"
                        min="0"
                        placeholder="Negative Marks"
                        onChange={this.onChange}
                        value={this.state.negativemarks}
                        required
                      />
                      <label htmlFor="nmarks">Negative Marks*</label>
                    </div>
                  </div>
                </form>
                <form>
                  {this.state.questions &&
                    this.state.questions.map((questions, index) => (
                      <div>
                        <h3 className="smallTitle">
                          Question No. {index + 1} Details&nbsp;&nbsp;
                          {questions.length !== 1 && (
                            <button
                              type="button"
                              className="removeBtn"
                              onClick={() => this.handleRemoveQuestion(index)}
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
                              id={index}
                              value={questions.question}
                              onChange={(e) => this.handleChange(e, index)}
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
                              id={index}
                              value={questions.explanation}
                              onChange={(e) => this.handleChange(e, index)}
                              placeholder="explanation"
                            />
                            <label htmlFor={"explanation" + index}>
                              Explanation
                            </label>
                          </div>
                        </div>
                        <div className="inputGroup twoInputs">
                          <div className="input">
                            <select
                              name="questionType"
                              value={questions.questionType}
                              onChange={(e) => this.handleChange(e, index)}
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
                              id={index}
                              value={questions.correctAnswer}
                              onChange={(e) => this.handleChange(e, index)}
                              placeholder="Correct Option"
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
                              id={index}
                              value={questions.op1}
                              onChange={(e) => this.handleChange(e, index)}
                              placeholder="Option A"
                            />
                            <label htmlFor={"optiona" + index}>Option A</label>
                          </div>
                          <div className="input">
                            <input
                              type="text"
                              name="op2"
                              id={index}
                              data-id={index}
                              value={questions.op2}
                              onChange={(e) => this.handleChange(e, index)}
                              placeholder="Option B"
                            />
                            <label htmlFor={"optionb" + index}>Option B</label>
                          </div>
                          <div className="input">
                            <input
                              type="text"
                              name="op3"
                              id={index}
                              value={questions.op3}
                              onChange={(e) => this.handleChange(e, index)}
                              placeholder="Option C"
                            />
                            <label htmlFor={"optionc" + index}>Option C</label>
                          </div>
                          <div className="input">
                            <input
                              type="text"
                              name="op4"
                              id={index}
                              value={questions.op4}
                              onChange={(e) => this.handleChange(e, index)}
                              placeholder="Option D"
                            />
                            <label htmlFor={"optiond" + index}>Option D</label>
                          </div>
                          <div className="input">
                            <input
                              type="text"
                              name="op5"
                              id={index}
                              value={questions.op5}
                              onChange={(e) => this.handleChange(e, index)}
                              placeholder="Option E"
                            />
                            <label htmlFor={"optione" + index}>Option E</label>
                          </div>
                        </div>
                        {this.state.questions.length - 1 === index && (
                          <div className="inputGroup twoInputs w50p">
                            <button
                              type="button"
                              className="addBtn"
                              onClick={(e) => this.addMore(index)}
                            >
                              <i className="fas fa-plus"></i>&nbsp;&nbsp;Add
                              Question
                            </button>
                            <button
                              type="button"
                              className="createBtn"
                              onClick={this.onSubmit}
                            >
                              <i className="fas fa-check"></i>&nbsp;&nbsp;Update
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
        {/* ) : (
        <AlertModal
          message="You aren't authorized to access this page!"
          icon="exclamation"
          leftBtn="Go to Home"
          rightBtn="View other Tests"
        //   action={() => {
        //     history.push("/home");
        //   }}
        //   close={() => {
        //     history.push("/tests");
        //   }}
        />
      )}  */}
      </React.Fragment>
    );
  }
}

export default EditTest;
