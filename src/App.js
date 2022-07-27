import { useState } from "react";
import "./App.css";
import CourseGoalList from "./Components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./Components/CourseGoals/CourseInput/CourseInput";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addGoalHandler = function (enteredText) {
    setCourseGoals((prevGoals) => {
      return [
        { text: enteredText, id: Math.random().toString() },
        ...prevGoals,
      ];
    });
  };

  const deleteItemHandler = function (goalID) {
    setCourseGoals((prevGoals) => {
      return prevGoals.filter((cur) => cur.id !== goalID);
    });
  };

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>

      {courseGoals.length !== 0 || (
        <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
      )}

      {courseGoals.length > 0 && (
        <section id="goals">
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        </section>
      )}
    </div>
  );
}

export default App;
