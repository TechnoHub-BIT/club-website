import React, { useState } from "react";
import { db } from "../../../firebase";

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

      const [general,setGeneral] = useState([
          { question: "", op1: "", op2: "", op3: "", op4: "", correctAnswer: "" },
        ]);

//   const handleOnChange = (e) => {
//       setGeneral(e.target.value)
//   }

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
    //   const [questions, setQuestions] = useState([
    //       { question: "", op1: "", op2: "", op3: "", op4: "", correctAnswer: "" },
    //     ]);
    //   const handleChangeInput = (index,e) =>{
    //       const values = [...questions];
    //       values[index][e.target.name] = e.target.value;
    //       setQuestions(values);
    //   }

    //     const newQuestion = () => {
    //       setQuestions([
    //         ...questions,
    //         { question:'', op1: "", op2: "", op3: "", op4: "", correctAnswer: "" },
    //       ]);
    //     };

      // const firestoremaisave = (e) => {
      //     if (title !== '' && duration !== '' && totalmarks !== '' && testdate !== '' && starttime !== '' && endtime !== '')
      //     // && question !== "" || op1 !== "" || op2 !== "" || op3 !=="" || op4 !== "" || correctAnswer !== "" )
      //     {
      //         e.preventDefault();
      //         db.collection("Tests").add({
      //             // title: title,
      //             // duration: duration,
      //             // totalmarks: totalmarks,
      //             // testdate: testdate,
      //             // starttime: starttime,
      //             // endtime:endtime,
      // questions: {
          //index:index,
      //             // question:question,
      //             // op1:op1,
      //             // op2:op2,
      //             // op3:op3,
      //             // op4:op4,
      //             // correctAnswer:correctAnswer}
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
      const [questions, setQuestion] = useState([
        {  question: "", op1: "", op2: "", op3: "", op4: "", correctAnswer: "" },
      ]);
    //   const handleChange = (e, index) => {
    //     const { name, value } = e.target;
    //     const lists = [...form];
    //     lists[index][name] = value;
    //     setForm(lists);
    //   };
    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...questions];
        list[index][name] = value;
        setQuestion(list);
      };
    
      const addMore = () => {
        setQuestion([...questions,  { question: "", op1: "", op2: "", op3: "", op4: "", correctAnswer: "" }]);
      };
      return(
          <React.Fragment>
              <div className="createTestCont">
                  <form>
                      {general.map((item)=> {
                          return(
                              <div>
                      <input type="text" name="name" placeholder="Test Name" onChange={handleOnChange} value={item.title} required/><br /><br />
                      <input type="number" name="duration" placeholder="Test Duration(In mins)" onChange={handleOnChange} value={item.duration} required/><br /><br />
                      <input type="marks" name="marks" placeholder="Total marks" onChange={handleOnChange} value={item.totalmarks} required /><br /><br />
                      <input type="date" name="date" placeholder="Test Date" onChange={handleOnChange} value={item.testdate} required /><br /><br />
                      <input type="time" name="stime" placeholder="Starting Time" onChange={handleOnChange} value={item.starttime} required/><br /><br />
                      <input type="time" name="etime" placeholder="Ending TIme" onChange={handleOnChange} value={item.endtime} required /><br /><br />
                      </div>
                      // {/* <input type="number" name="duration" placeholder="Test Duration(In mins)" onChange={testduration} value={duration} required/><br /><br />
                      // <input type="marks" name="marks" placeholder="Total marks" onChange={marks} value={totalmarks} required /><br /><br />
                      // <input type="date" name="date" placeholder="Test Date" onChange={date} value={testdate} required /><br /><br />
                      // <input type="time" name="stime" placeholder="Starting Time" onChange={sTime} value={starttime} required/><br /><br />
                      // <input type="time" name="etime" placeholder="Ending TIme" onChange={eTime} value={endtime} required /><br /><br /> */}
                      )
                      }
  )}
                  </form>
                  <form>
          {questions.map((create, i) => {
              return (
            <div key={i}>
         
              <input type="text" name="question" onChange={(e) => handleChange(e, i)} value={create.question} placeholder="question" /><br /><br />

              <input type="text" name="op1" onChange={(e) => handleChange(e, i)} value={create.op1} placeholder="option1" /><br /><br />
              
              <input type="text" name="op2" onChange={(e) => handleChange(e, i)} value={create.op2} placeholder="option2" /><br /><br />
              
              <input type="text" name="op3" onChange={(e) => handleChange(e, i)} value={create.op3} placeholder="option3" />
              
              <input type="text" name="op4" onChange={(e) => handleChange(e, i)} value={create.op4} placeholder="option4" />

              <input type="text" name = "correctAnswer" value={create.correctAnswer} onChange={ e => handleChange(e,i)} placeholder="correct option" /><br /><br />
              </div>
              )})}
              <button type="submi" onClick={addMore}>Add question</button>
        
              </form>
          
              </div>
          </React.Fragment>
      );


};

export default CreateTest;
