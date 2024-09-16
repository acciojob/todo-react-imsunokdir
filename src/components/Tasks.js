import React from "react";

const Tasks = (props) => {
  const { allTasks, setAllTasks, handleDelete } = props;
  return (
    <>
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
    </>
  );
};

export default Tasks;
