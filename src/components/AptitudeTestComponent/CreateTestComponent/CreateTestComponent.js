import React, { useState } from "react";
import "./CreateTestComponent.css";
import { db } from '../../../firebase';

const CreateTest = () => {
    const [title, setTitle] = useState('');
    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };

    const [duration, setDuration] = useState('');
    const testduration = (e) => {
        setDuration(e.target.value);
    };

    const [totalmarks, setTotalmarks] = useState('');
    const marks = (e) => {
        setTotalmarks(e.target.value);
    };

    const [testdate, setTestdate] = useState('');
    const date = (e) => {
        setTestdate(e.target.value);
    };

    const [starttime, setStarttime] = useState('');
    const sTime = (e) => {
        setStarttime(e.target.value);
    };

    const [endtime, setEndtime] = useState('');
    const eTime = (e) => {
        setEndtime(e.target.value);
    };
   
    //   const [question, setQuestion] = useState("");
    //   const handleChange = (index,e) => {
    //     setQuestion(index,e.target.value);
    //   };
    //   const [op1, setOp1] = useState("");
    //   const option1 = (index,e) => {
    //     setOp1(index,e.target.value);
    //   };
    //   const [op2, setOp2] = useState("");
    //   const option2 = (index,e) => {
    //     setOp2(index,e.target.value);
    //   };
    //   const [op3, setOp3] = useState("");
    //   const option3 = (index,e) => {
    //     setOp3(index,e.target.value);
    //   };
    //   const [op4, setOp4] = useState("");
    //   const option4 = (index,e) => {
    //     setOp4(index,e.target.value);
    //   };
    //   const [correctAnswer, setCorrectAnswer] = useState("");
    //   const correctOption = (index,e) => {
    //     setCorrectAnswer(index,e.target.value);
    //   };
    const [questions, setQuestions] = useState([
        { question: "", op1: "", op2: "", op3: "", op4: "", correctAnswer: "" },
    ]);
    const handleChangeInput = (index,e) =>{
        const values = [...questions];
        values[index][e.target.name] = e.target.value;
        setQuestions(values);
    } 
    
    const newQuestion = () => {
        setQuestions([
            ...questions,
            { question:'', op1: "", op2: "", op3: "", op4: "", correctAnswer: "" },
        ]);
    };

    const firestoremaisave = (e) => {
        if (title !== '' && duration !== '' && totalmarks !== '' && testdate !== '' && starttime !== '' && endtime !== '')
        // && question !== "" || op1 !== "" || op2 !== "" || op3 !=="" || op4 !== "" || correctAnswer !== "" ) 
        {
            e.preventDefault();
            db.collection("Tests").add({
                title: title,
                duration: duration,
                totalmarks: totalmarks, 
                testdate: testdate,
                starttime: starttime,
                endtime:endtime,
                // question:question,
                // op1:op1,
                // op2:op2,
                // op3:op3,
                // op4:op4,
                // correctAnswer:correctAnswer
            })
                .then(() => {
                    alert("Account Created!");
                })
                .catch((error) => {
                    alert(error.message);
                });

        }
        else {
            alert("Please fill in all the details!");
        }

    }
    return(
        <React.Fragment>
            <div className="createTestCont">
                <h1 className="title">Create Test</h1>
                <div className="centreCard">
                    <div className="createForm">        
                        <form>
                            <div className="inputGroup">
                                <div className="input">
                                    <input type="text" name="name" id="name" placeholder="Test Name" onChange={handleOnChange} value={title} required />
                                    <label htmlFor="name">Test Name</label>
                                </div>
                            </div>
                            <div className="inputGroup twoInputs">
                                <div className="input">
                                    <input type="number" name="duration" id="duration" placeholder="Test Duration(In mins)" onChange={testduration} value={duration} required />
                                    <label htmlFor="duration">Test Duration</label>
                                </div>
                                <div className="input">
                                    <input type="marks" name="marks" id="marks" placeholder="Total marks" onChange={marks} value={totalmarks} required />
                                    <label htmlFor="marks">Total Marks</label>
                                </div>
                            </div>
                            <div className="inputGroup twoInputs">
                                <div className="input">
                                    <input type="time" name="stime" id="stime" placeholder="Starting Time" onChange={sTime} value={starttime} required />
                                    <label htmlFor="stime">Starting Time</label>
                                </div>
                                <div className="input">
                                    <input type="time" name="etime" id="etime" placeholder="Ending TIme" onChange={eTime} value={endtime} required />
                                    <label htmlFor="etime">Ending Time</label>
                                </div>
                            </div>
                            <div className="inputGroup">
                                <div className="input">
                                    <input type="date" name="date" id="date" placeholder="Test Date" onChange={date} value={testdate} required />
                                    <label htmlFor="date">Test Date</label>
                                </div>
                            </div>
                        </form>
                        <form>
                            {questions.map((create, index) => (
                                <div class="inputGroup twoInputs" key={index}>
                                    <div className="input">
                                        <input type="text" id={ "question" + index } value={create.question} onChange={ e => handleChangeInput(index,e)} placeholder="Question" />
                                        <label htmlFor={ "question" + index }>Question</label>
                                    </div>
                                    <div className="input">
                                        <input type="text" id={ "optiona" + index } value={create.op1} onChange={ e => handleChangeInput(index,e)} placeholder="Option A" />
                                        <label htmlFor={ "optiona" + index }>Option A</label>
                                    </div>
                                    <div className="input">
                                        <input type="text" id={ "optionb" + index } value={create.op2} onChange={ e => handleChangeInput(index,e)} placeholder="Option B" />
                                        <label htmlFor={ "optionb" + index }>Option B</label>
                                    </div>
                                    <div className="input">
                                        <input type="text" id={ "optionc" + index } value={create.op3} onChange={ e => handleChangeInput(index,e)} placeholder="Option C" />
                                        <label htmlFor={ "optionc" + index }>Option C</label>
                                    </div>
                                    <div className="input">
                                        <input type="text" id={ "optiond" + index } value={create.op4} onChange={ e => handleChangeInput(index,e)} placeholder="Option D" />
                                        <label htmlFor={ "optiond" + index }>Option D</label>
                                    </div>
                                    <div className="input">
                                        <select
                                            value={create.correctAnswer}
                                            onChange={ e => handleChangeInput(index,e)} placeholder="Correct Option"
                                        >
                                            <option value="">--Select Correct Option--</option>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                            <option value="D">D</option>
                                        </select>
                                    </div>
                                    <button type="submi" onClick={newQuestion}>Add question</button>
                                </div>
                            ))}
                        </form>
                        <button type="submit" onClick={firestoremaisave}>Create Test</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CreateTest;
