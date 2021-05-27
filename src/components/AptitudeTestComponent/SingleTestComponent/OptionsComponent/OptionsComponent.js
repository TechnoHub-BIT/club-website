import React from "react";

const Options = (props) => {
  return (
    <React.Fragment>
      {props.item.questionType === "MCQ" ? (
        <input
          type="radio"
          title="Clear Selection"
          name={"option" + (props.index + 1)}
          onChange={(e) => props.handleAnswer(e, props.index, "Unanswered")}
          value="Unanswered"
          className="hiddenRadio"
          defaultChecked
        />
      ) : null}
      {props.item.questionType === "MCQ" ? (
        <div className="options">
          <div>
            <input
              type="radio"
              onChange={(e) => props.handleAnswer(e, props.index, "A")}
              name={"option" + (props.index + 1)}
              id={"optiona" + (props.index + 1)}
              value={props.item.op1}
            />
            &nbsp;&nbsp; (A){" "}
            <label htmlFor={"optiona" + (props.index + 1)}>
              {props.item.op1}
            </label>
          </div>
          <div>
            <input
              type="radio"
              onChange={(e) => props.handleAnswer(e, props.index, "B")}
              name={"option" + (props.index + 1)}
              id={"optionb" + (props.index + 1)}
              value={props.item.op2}
            />
            &nbsp;&nbsp; (B){" "}
            <label htmlFor={"optionb" + (props.index + 1)}>
              {props.item.op2}
            </label>
          </div>
          <div>
            <input
              type="radio"
              onChange={(e) => props.handleAnswer(e, props.index, "C")}
              name={"option" + (props.index + 1)}
              id={"optionc" + (props.index + 1)}
              value={props.item.op3}
            />
            &nbsp;&nbsp; (C){" "}
            <label htmlFor={"optionc" + (props.index + 1)}>
              {props.item.op3}
            </label>
          </div>
          <div>
            <input
              type="radio"
              onChange={(e) => props.handleAnswer(e, props.index, "D")}
              name={"option" + (props.index + 1)}
              id={"optiond" + (props.index + 1)}
              value={props.item.op4}
            />
            &nbsp;&nbsp; (D){" "}
            <label htmlFor={"optiond" + (props.index + 1)}>
              {props.item.op4}
            </label>
          </div>
          {props.item.op5 !== "" ? (
            <div>
              <input
                type="radio"
                onChange={(e) => props.handleAnswer(e, props.index, "E")}
                name={"option" + (props.index + 1)}
                id={"optione" + (props.index + 1)}
                value={props.item.op5}
              />
              &nbsp;&nbsp; (E){" "}
              <label htmlFor={"optione" + (props.index + 1)}>
                {props.item.op5}
              </label>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="options">
          <div>
            <input
              type="checkbox"
              onChange={(e) => props.handleAnswer(e, props.index, "A")}
              name={"option" + (props.index + 1)}
              id={"optiona" + (props.index + 1)}
              value={props.item.op1}
            />
            &nbsp;&nbsp; (A){" "}
            <label htmlFor={"optiona" + (props.index + 1)}>
              {props.item.op1}
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={(e) => props.handleAnswer(e, props.index, "B")}
              name={"option" + (props.index + 1)}
              id={"optionb" + (props.index + 1)}
              value={props.item.op2}
            />
            &nbsp;&nbsp; (B){" "}
            <label htmlFor={"optionb" + (props.index + 1)}>
              {props.item.op2}
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={(e) => props.handleAnswer(e, props.index, "C")}
              name={"option" + (props.index + 1)}
              id={"optionc" + (props.index + 1)}
              value={props.item.op3}
            />
            &nbsp;&nbsp; (C){" "}
            <label htmlFor={"optionc" + (props.index + 1)}>
              {props.item.op3}
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={(e) => props.handleAnswer(e, props.index, "D")}
              name={"option" + (props.index + 1)}
              id={"optiond" + (props.index + 1)}
              value={props.item.op4}
            />
            &nbsp;&nbsp; (D){" "}
            <label htmlFor={"optiond" + (props.index + 1)}>
              {props.item.op4}
            </label>
          </div>
          {props.item.op5 !== "" ? (
            <div>
              <input
                type="checkbox"
                onChange={(e) => props.handleAnswer(e, props.index, "E")}
                name={"option" + (props.index + 1)}
                id={"optione" + (props.index + 1)}
                value={props.item.op5}
              />
              &nbsp;&nbsp; (E){" "}
              <label htmlFor={"optione" + (props.index + 1)}>
                {props.item.op5}
              </label>
            </div>
          ) : null}
        </div>
      )}
    </React.Fragment>
  );
};

export default Options;
