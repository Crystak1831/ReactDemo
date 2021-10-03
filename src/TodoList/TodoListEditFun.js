import React, { useState } from "react";

export default function Todo() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [origin, setOrigin] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleClick = () => {
    const newItem = {
      // id: new Date(),
      value: input,
      isEdit: false
    };
    setList([...list, newItem]);
    setInput("");
    // console.log(list)
  };

  const handleDelete = (id) => {
    let newList = [...list];
    // let newList = list.filter((item) => item.id !== id);
    newList.splice(id, 1);
    setList(newList);
  };

  const handleEditChange = (index, e) => {
    let temp = [...list];
    temp[index].value = e.target.value;
  };

  const handleEdit = (item, index) => {
    let originalTodo = item.value;
    let temp = [...list];
    temp[index].isEdit = true;
    setList(temp);
    setOrigin(originalTodo);
  };

  const handleSave = (item, index) => {
    let temp = [...list];
    temp[index].value = item.value;
    temp[index].isEdit = false;
    setList(temp);
  };

  const handleCancel = (index) => {
    let temp = [...list];
    temp[index].value = origin;
    temp[index].isEdit = false;
    setList(temp);
  };

  const inputTodo = (item, index) => {
    return item.isEdit ? (
      <div>
        <input
          type="text"
          defaultValue={item.value}
          onChange={(e) => handleEditChange(index, e)}
        />
      </div>
    ) : (
      item.value
    );
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={input} />
      <button onClick={handleClick}>add</button>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              {/* {item.value}
              <button>edit</button> */}
              {inputTodo(item, index)}

              <button onClick={() => handleEdit(item, index)}>edit</button>
              <button onClick={() => handleSave(item, index)}>save</button>
              <button onClick={() => handleCancel(index)}>cancel</button>
              <button onClick={() => handleDelete(index)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
