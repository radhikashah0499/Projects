import React, { useEffect, useState } from "react";
import "../App.css";
const TodoForm = (props) => {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState([]);
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const sometasks = [
    "Networking Basics",
    "Introduction to Javascript",
    "Cross -origin Resource Sharing(CORS)",
    "Getting Started with React",
    "Git and pushing everything on repos",
    "API and Http methods",
    "Treat Task 1",
    "Styled Components & Redux",
    "Node.js a usual suspect",
    "Node.js Extras",
    "The BIG 4",
    "AWS",
    "Docker",
    "Typescript and rest for now",
  ];

  const AddTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };

      setTasklist([...tasklist, taskDetails]);
    }
  };
  const detail = [];
  function Adddefualt() {
    var l = sometasks.length;
    for (var i = 0; i < l; i++) {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: sometasks[i],
        isCompleted: false,
      };
      detail[i] = taskDetails;
      // setTasklist([...tasklist, taskDetails]);
    }
    setTasklist(detail);
  }

  const deletetask = (e, id) => {
    e.preventDefault();
    setTasklist(tasklist.filter((t) => t.id !== id)); //Deleting the task by using the filter method, where not keeing the task with the id you clicked for delete
  };

  const taskCompleted = (e, id) => {
    e.preventDefault();
    //finidng the index
    const element = tasklist.findIndex((elem) => elem.id == id);
    const newTaskList = [...tasklist];
    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };
    setTasklist(newTaskList);
  };

  useEffect(() => {
    Adddefualt();
  }, []);
  return (
    <div className="todo">
      <input
        type="text"
        placeholder="Add a note"
        name="text"
        onChange={(e) => handleChange(e)}
      />
      <button className="todo-button" onClick={AddTask}>
        Add todo
      </button>

      <br />
      {tasklist !== [] ? (
        <div style={{display:"flex" , flexDirection:"column" , width:"500px"}}> 
          {tasklist.map((t) => (
            <div className={t.isCompleted ? "crossText" : "listitem"}>
              {t.value}
              <div  className="buttons">
              <button
                className="complete"
                onClick={(e) => taskCompleted(e, t.id)}
              >
                Completed
              </button>
              <button className="delete" onClick={(e) => deletetask(e, t.id)}>
                Delete
              </button>
              </div>
              
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default TodoForm;
