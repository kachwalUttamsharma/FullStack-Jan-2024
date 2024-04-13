import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { TiTrash, TiTick } from "react-icons/ti";

const ToDoLists = () => {
  const [task, setTask] = useState({
    title: "",
    by: "",
  });
  const [list, setList] = useState([]);

  const handleTaskInfo = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setTask({ ...task, [key]: value });
  };

  const addTaskHandler = () => {
    const updatedTask = { ...task, id: uuid(), isDone: false };
    setList([...list, updatedTask]);
    setTask({
      title: "",
      by: "",
    });
  };

  const markDoneHandler = (id) => {
    const index = list?.findIndex((task) => task.id === id);
    const doneTask = [...list];
    doneTask[index].isDone = true;
    setList(doneTask);
  };

  const deleteTaskHandler = (id) => {
    const filteredTask = list?.filter((task) => task.id !== id);
    setList(filteredTask);
  };
  return (
    <>
      <div>
        <h1>ToDoLists</h1>
        <div>
          I want to complete{" "}
          <input
            type="text"
            name="title"
            value={task?.title}
            onChange={(e) => {
              handleTaskInfo(e);
            }}
          />
          <input
            type="date"
            name="by"
            value={task?.by}
            onChange={(e) => {
              handleTaskInfo(e);
            }}
          />
        </div>
        <button onClick={addTaskHandler}>Add a Task</button>
      </div>
      <ul>
        {list?.length > 0 &&
          list?.map((item) => {
            return (
              <li key={item?.id}>
                <span
                  style={{ textDecoration: item?.isDone ? "line-through" : "" }}
                >
                  <strong>{item?.title} </strong>is due by {item?.by}
                  <span>
                    <TiTick
                      size={24}
                      onClick={() => markDoneHandler(item?.id)}
                    />
                  </span>
                  <span>
                    <TiTrash
                      size={24}
                      onClick={() => deleteTaskHandler(item?.id)}
                    />
                  </span>
                </span>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ToDoLists;
