import React from "react";
import "./CourseGoalItem.css";

function CourseGoalItem(props) {
  const deleteHandler = function () {
    props.onDelete(props.id);
  };
  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
}

export default CourseGoalItem;
