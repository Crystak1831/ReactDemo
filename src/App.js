import "./styles.css";

// TodoList:
import TodoListClass from "./TodoList/TosoListClass";
import TodoListFunction from "./TodoList/TodoListFunction";

export default function App() {
  return (
    <div className="App">
      <TodoListClass />
      <TodoListFunction />
    </div>
  );
}
