import "./styles.css";

// TodoList:
import TodoListClass from "./TodoList/TosoListClass";
import TodoListFunction from "./TodoList/TodoListFunction";
import AutoComplete from "./AutoComplete/AutoComplete";

import BlinkWrapper from "./BlinkyWrapper/BlinkyWrapper";
import Timer from "./Timer/Timer";
import Card from "./Card/Card";
import CommentTree from "./CommentTree/CommentTree";
import ImgComponent from "./changeImg/changeImg";

export default function App() {
  return (
    <div className="App">
      {/* <TodoListClass /> */}
      {/* <TodoListFunction /> */}

      {/* <AutoComplete /> */}
      {/* <BlinkWrapper /> */}
      {/* <Timer /> */}
      {/* <Card /> */}

      {/* <CommentTree /> */}

      <ImgComponent />
    </div>
  );
}
