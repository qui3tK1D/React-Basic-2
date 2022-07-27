import React, { useState } from "react";

import styles from "./CourseInput.module.css";
import Button from "../../UI/Button";

console.log(styles);

// import styled from "styled-components";
// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color:${(props) => (props.invalid ? "red" : "black")}
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     background:${(props) => (props.invalid ? "#ffd7d7" : "transparent")}
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

function CourseInput(props) {
  const [enteredValue, setEnteredValue] = useState("");

  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = function (e) {
    if (e.target.value.trim().length) setIsValid(true);
    setEnteredValue(e.target.value);
  };

  const formSubmitHandler = function (e) {
    e.preventDefault();
    if (!enteredValue.trim().length) return setIsValid(false);

    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}

export default CourseInput;
