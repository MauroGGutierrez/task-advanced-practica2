// import React, { useState } from 'react';
import React, { useState } from "react";
import "./advancedDesign.css";

function TaskAdvanced() {
  const [inputTask, setInputTask] = useState({ description: "" });
  const [array, setArray] = useState([]);
  const [id, setId] = useState(0);

  const createTaskHandler = (text) => {
    setInputTask({ id, description: text, complete: false });
  };

  const addButton = (e) => {
    e.preventDefault();
    setId(id + 1);
    setArray([...array, inputTask]);
  };

  const deleteHandler = (id) => {
    const newArray = array.filter((task) => task.id !== id);
    setArray(newArray);
  };

  const completeHandler = (id) => {
    const newArray = array.map((task) => {
      if (task.id === id) {
        task.complete = !task.complete;
      }
      return task;
    });
    setArray(newArray);
  };

  return (
    <div className="Task-ad">
      <h1>Task Advanced</h1>
      <form>
        <h3>Enter a task</h3>
        <input
          type="text"
          placeholder="Enter task..."
          value={inputTask.description}
          onChange={(e) => createTaskHandler(e.target.value)}
        />
        <button className="buttonMain" type="button" onClick={addButton}>
          ADD TASK
        </button>
        <div className="tasks-list">
          {array.map((task) => (
            <div className="boxs">
              <button
                type="button"
                className="deleteButton"
                onClick={() => deleteHandler(task.id)}
              >
                Delete
              </button>
              <p key={task} className={task.complete ? "task-complete" : ""}>
                {" "}
                {task.description}{" "}
              </p>
              <button
                type="button"
                className={
                  task.complete ? "incompleteButton" : "completeButton"
                }
                onClick={() => completeHandler(task.id)}
              >
                {task.complete ? "Incomplete" : "Completar"}
              </button>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default TaskAdvanced;
