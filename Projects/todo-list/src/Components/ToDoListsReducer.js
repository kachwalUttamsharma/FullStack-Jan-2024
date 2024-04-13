import React, { useReducer } from "react";
import { TiTrash, TiTick } from "react-icons/ti";
import { formReducer, taskReducer } from "./reducer";

const ToDoListsReducer = () => {
  const [list, dispatch] = useReducer(taskReducer, []);
  const [task, taskDispatch] = useReducer(formReducer, {
    title: "",
    by: "",
  });

  return (
    <>
      <div>
        <h1>ToDoLists Reducer</h1>
        <div>
          I want to complete
          <input
            type="text"
            name="title"
            value={task?.title}
            onChange={(e) => {
              taskDispatch({
                type: "HANDLE_TASK",
                field: e.target.name,
                payload: e.target.value,
              });
            }}
          />
          <input
            type="date"
            name="by"
            value={task?.by}
            onChange={(e) => {
              taskDispatch({
                type: "HANDLE_TASK",
                field: e.target.name,
                payload: e.target.value,
              });
            }}
          />
        </div>
        <button
          onClick={() => {
            dispatch({ type: "ADD_TASK", payload: task });
            taskDispatch({
              type: "RESET_TASK",
            });
          }}
        >
          Add a Task
        </button>
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
                      onClick={() =>
                        dispatch({ type: "DONE_TASK", payload: item?.id })
                      }
                    />
                  </span>
                  <span>
                    <TiTrash
                      size={24}
                      onClick={() =>
                        dispatch({ type: "REMOVE_TASK", payload: item?.id })
                      }
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

export default ToDoListsReducer;
