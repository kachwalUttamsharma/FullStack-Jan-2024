import "./App.css";
import List from "./Components/List";
// import ToDoLists from "./Components/ToDoLists";
import ToDoListsReducer from "./Components/ToDoListsReducer";

function App() {
  return (
    <div className="App">
      {/* <ToDoLists /> */}
      <ToDoListsReducer />
      <List />
    </div>
  );
}

export default App;
