import React from "react";

export default class TodoListClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    };
  }

  changeHandler = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  };

  addHandler = () => {
    const newItem = {
      id: Math.random(),
      value: this.state.inputValue
    };

    this.setState({
      list: [...this.state.list, newItem],
      inputValue: ""
    });
  };

  deleteHandler = (id) => {
    // const newList = [...this.state.list]
    // console.log (newList)
    // newList.splice(id,1)
    // this.setState({
    //   list:newList
    // })

    let list = this.state.list.filter((item) => item.id !== id);
    // console.log(list)
    console.log(id);
    this.setState({
      list
    });
  };

  render() {
    const { list } = this.state;
    // console.log(list)
    return (
      <div>
        <h2>ToDo List</h2>
        <input
          type="text"
          onChange={this.changeHandler}
          value={this.state.inputValue}
        />
        <button onClick={this.addHandler}>add</button>
        <ul>
          {list.map((item) => {
            return (
              <li key={item.id}>
                {item.value}
                <button onClick={() => this.deleteHandler(item.id)}>
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
