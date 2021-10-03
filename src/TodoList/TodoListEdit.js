import React from "react";
import "./styles.css";
class App extends React.Component {
  state = {
    inputValue: "",
    todos: [],
    originTodo: ""
  };
  handleChange = (e) => {
    console.log(typeof e.target.value, "??");
    this.setState({
      inputValue: e.target.value
    });
  };
  handleClick = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        { name: this.state.inputValue, isEdit: false }
      ],
      inputValue: ""
    });
  };
  handleEdit = (todo, index) => {
    let originTodo = todo.name;
    let temp = [...this.state.todos];
    temp[index].isEdit = true;
    this.setState(() => ({
      originTodo,
      todos: temp
    }));
  };
  handleEditChange = (index, e) => {
    let temp = [...this.state.todos];
    temp[index].name = e.target.value;
  };
  handleSave = (todo, index) => {
    let temp = [...this.state.todos];
    temp[index].name = todo.name;
    temp[index].isEdit = false;
    this.setState({
      todos: temp
    });
  };
  handleDelete = (index) => {
    let temp = [...this.state.todos];
    temp.splice(index, 1);
    this.setState({
      todos: temp
    });
  };
  handleCancel = (index) => {
    let temp = [...this.state.todos];
    temp[index].name = this.state.originTodo;
    temp[index].isEdit = false;
    this.setState({
      todos: temp
    });
  };
  renderButton = (todo, index) => {
    return todo.isEdit ? (
      <>
        <button onClick={() => this.handleSave(todo, index)}>save</button>
        <button onClick={() => this.handleCancel(index)}>cancel</button>
      </>
    ) : (
      <button onClick={() => this.handleEdit(todo, index)}>edit</button>
    );
  };
  renderTodo = (todo, index) => {
    return todo.isEdit ? (
      <input
        defaultValue={todo.name}
        onChange={(e) => this.handleEditChange(index, e)}
      />
    ) : (
      todo.name
    );
  };
  render() {
    return (
      <div className="App">
        <h2>Todo list</h2>
        <input value={this.state.inputValue} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li key={index}>
                {this.renderTodo(todo, index)}
                {this.renderButton(todo, index)}
                <button onClick={() => this.handleDelete(index)}>delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
