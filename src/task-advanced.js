// import React, { useState } from 'react';
import React, { useState } from 'react';
import "./advancedDesign.css";

function TaskAdvanced() {
  const [array, setArray] = useState([]);
  const [enter, setEnter] = useState("");
  const [object, setObject] = useState({
    id: 0, name: "enter.value", complete: false
  })
  console.log(object)
  const addButton = (e) => {
    e.preventDefault();
    setEnter("");
    setArray([...array, enter]);
  };

  return (
    <div className="Task-ad">
      <h1>Task Basic</h1>
      <form>
        <h3>Enter a task</h3>
        <input
          type="text"
          placeholder="Enter task..."
          value={enter}
          onChange={(e) => setEnter(e.target.value)}
        />
        <button className='buttonMain' type="button" onClick={addButton}>
          ADD TASK
        </button>
        <div className='tasks-list'>
          {array.map((task) => (
            <div className='boxs'>
              <button className='deleteButton'>Delete</button>
              <p key={task}> {task} </p>
              <button className='completeButton'>complete</button>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default TaskAdvanced;
