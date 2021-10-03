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
import RevertTree from "./RevertTree/RevertTree";
import Navigation from "./Navigation/Navigation";
import EnterUserDetail from "./EnterUserDetail/EnterUserDetail";
import Comment from "./Comment/Comment";
import SampleCourse from "./SampleCourse/SampleCourse";
import TreeView from "./TreeView/TreeView";

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

      {/* <ImgComponent /> */}
      {/* <LoginPage /> */}
      {/* <SortTable /> */}
      <RevertTree />
      {/* <Navigation /> */}
      {/* <EnterUserDetail/> */}
      {/* <Comment /> */}
      {/* <SampleCourse/> */}
      {/* <TreeView /> */}
    </div>
  );
}
