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
import LoginPage from "./UserLogin/UserLogin";
import SortTable from "./SortTable/SortTable";

export default function App() {
  return (
    <div className="App">
      {/* <TodoListClass /> */}
      {/* <TodoListFunction /> */}

      {/* <AutoComplete /> */}
      {/* <BlinkWrapper /> */}
      {/* <Timer /> */}
      <Card />

      {/* <CommentTree /> */}

      {/* <ImgComponent /> */}
      {/* <LoginPage /> */}
      {/* <SortTable /> */}
    </div>
  );
}
