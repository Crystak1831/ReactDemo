import { useEffect, useState } from "react";

export default function TodoListFunction() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const addHandler = () => {
    // 优化：
    // 不能输入为空
    if (!input.trim().length) {
      alert("there no empty value allowed");
      return;
    }

    // 不能重复list,不区分大小写
    let existLength = list.filter(
      (item) => item.value.toUpperCase() === input.toUpperCase()
    ).length;
    if (existLength) {
      alert("exist todo");
      return;
    }

    const newItem = {
      id: new Date(),
      value: input
    };

    setList([...list, newItem]);
    setInput("");
  };

  const deleteHandler = (id) => {
    // 用filter删除：
    [...list];
    let newList = list.filter((item) => item.id !== id);

    // 用splice删除：
    // let newList = list.splice(id,1)
    setList(newList);
  };

  return (
    <div>
      <h2>To Do</h2>
      <input type="text" value={input} onChange={changeHandler} />
      <button onClick={addHandler}>Add</button>
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              {item.value}
              <button onClick={() => deleteHandler(item.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
