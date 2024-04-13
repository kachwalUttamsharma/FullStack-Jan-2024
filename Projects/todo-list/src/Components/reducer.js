import { v4 as uuid } from "uuid";

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newTask = { ...action.payload, id: uuid(), isDone: false };
      return [...state, newTask];
    case "REMOVE_TASK":
      const filteredTask = state?.filter((task) => task.id !== action.payload);
      return [...filteredTask];
    case "DONE_TASK":
      const index = state?.findIndex((task) => task.id === action.payload);
      const doneTask = [...state];
      doneTask[index].isDone = true;
      return [...doneTask];
    default:
      return state;
  }
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_TASK": {
      return {
        ...state,
        [action.field]: action.payload,
      };
    }
    case "RESET_TASK": {
      return {
        title: "",
        by: "",
      };
    }
    default:
      return state;
  }
};
export { taskReducer, formReducer };
