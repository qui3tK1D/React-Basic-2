import React from "react";
import "./CourseGoalList.css";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

function CourseGoalList(props) {
  return (
    <ul className="goal-list">
      {props.items.map((cur) => (
        <CourseGoalItem key={cur.id} id={cur.id} onDelete={props.onDeleteItem}>
          {cur.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
}

export default CourseGoalList;
