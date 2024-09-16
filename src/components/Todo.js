import React, { useEffect, useState } from "react";
import Tasks from "./Tasks";

let id = 0;

const Todo = () => {
  const [allTasks, setAllTask] = useState([]);
  const [task, setTask] = useState("");

  //   const testTask1 = {
  //     name: "test1",
  //     id: 1,
  //   };
  //   const testTask2 = {
  //     name: "test2",
  //     id: 2,
  //   };

  //   useEffect(() => {
  //     setAllTask((prev) => [...prev, testTask1, testTask2]);
  //   }, []);

  const handleInput = (e) => {
    setTask(e.target.value);
  };
  const handleAdd = () => {
    if (task.trim()) {
      const newTask = {
        name: task.trim(),
        id: Date.now(),
      };
      setAllTask((prev) => [...prev, newTask]);
      setTask("");
    }
  };

  const handleDelete = (id) => {
    setAllTask((prev) => {
      return prev.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="todo">
      <div className="input-button-div">
        <input id="task-input" value={task} onChange={handleInput} />
        <button id="add-btn" onClick={handleAdd}>
          Add Todo
        </button>
      </div>
      <div className="tasks">
        {allTasks.length > 0 ? (
          <ul className="tasks">
            {allTasks.map((items) => {
              return (
                <li className="task" key={items.id}>
                  <div>
                    <p>{items.name}</p>
                  </div>
                  <div className="delete-div">
                    <button
                      onClick={() => {
                        handleDelete(items.id);
                      }}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No Tasks</p>
        )}
      </div>
    </div>
  );
};

export default Todo;
