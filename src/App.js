import "./styles.css";

// TodoList:
import TodoListClass from "./TodoList/TosoListClass";
import TodoListFunction from "./TodoList/TodoListFunction";
import AutoComplete from "./AutoComplete/AutoComplete";

import BlinkWrapper from "./BlinkyWrapper/BlinkyWrapper";
import Timer from "./Timer/Timer";

export default function App() {
  return (
    <div className="App">
      {/* <TodoListClass /> */}
      {/* <TodoListFunction /> */}

      {/* <AutoComplete /> */}
      {/* <BlinkWrapper /> */}
      <Timer />
    </div>
  );
}
