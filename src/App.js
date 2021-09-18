import "./styles.css";

// TodoList:
import TodoListClass from "./TodoList/TosoListClass";
import TodoListFunction from "./TodoList/TodoListFunction";
import AutoComplete from "./AutoComplete/AutoComplete";

export default function App() {
  return (
    <div className="App">
      {/* <TodoListClass /> */}
      {/* <TodoListFunction /> */}

      <AutoComplete />
    </div>
  );
}
