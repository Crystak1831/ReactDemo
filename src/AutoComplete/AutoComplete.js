import React, { useState, useEffect } from "react";
import data from "./state.json";

export default function AutoComplete() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  // const filterOperation = (curInput) =>{
  //   let newList = data.filter((item) =>{
  //     return item.name.includes(curInput) ||item.abbreviation.includes(curInput)
  //   })
  //   setList(curInput?newList:[])
  // }

  const handleChange = (e) => {
    let curInput = e.target.value;
    setInput(curInput);

    const filterData = data.filter((item) => {
      return (
        item.name.includes(curInput) || item.abbreviation.includes(curInput)
      );
    });

    setList(filterData);
  };

  const handleComplete = (e) => {
    const curText = e.target.innerHTML;
    setInput(curText);
    setList([]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="please enter"
        value={input}
        onChange={handleChange}
      />
      <ul>
        {list.map((item) => {
          return (
            <li key={item.name} onClick={handleComplete}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
