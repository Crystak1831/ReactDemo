import React, { useState, useEffect } from "react";
import data from "./state.json";

/**
 * profermance:
 * debounce -- Apple: debounce本身就是setTimeOut
 * 原始的profermance会很差，因为每次输入都要做一个api call，我们要尽量减少api call
 * 当前用户每个字的间隔小于0.5s or 1s，我们可以认定用户还在输入，这样可以不用做api call
 * 知道看到user结束打字，2s之后出结果
 */

export default function AutoComplete() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  // 写一个debounce去检测间隔 -- setTimeout， closure
  function debounce(func, wait, immediate) {
    let timer;
    //args is destructure of 传进来的参数
    return (...args) => {
      let callNow = immediate || !timer;
      // 加this是因为不想之后指向会乱
      if (callNow) func.apply(this, args);
      // 不立即响印
      function delayCall() {
        //检测每次input间的间隔
        timer = null; //解绑
        if (!immediate) func.apply(this, args);
      }

      //假如wait是2s,user输入之后等2s，没触发就会api call，如果不满两秒的话，之前的timer就失效了--clearTimeOut(timer)，不会出发apicall
      clearTimeout(timer);
      timer = setTimeout(delayCall, wait);
    };
  }

  const filterOperation = (curInput) => {
    const updataFilterData = data.filter(
      (item) =>
        item.name.includes(curInput) || item.abbreviation.includes(curInput)
    );

    setList(curInput ? updataFilterData : []);
  };

  // 1s之后才会api call
  const debounceFilter = debounce((curInput) => {
    filterOperation(curInput);
  }, 1000);

  const handleChange = (e) => {
    let curInput = e.target.value;
    setInput(curInput);
    debounceFilter(curInput); //相当于下面的操作

    // const filterData = data.filter((item) => {
    //   return (
    //     item.name.includes(curInput) || item.abbreviation.includes(curInput)
    //   );
    // });
    // setList(filterData);
  };

  const handleComplete = (e) => {
    const curText = e.target.innerHTML;
    setInput(curText);
    setList([]);
  };

  return (
    <div>
      <h2>Auto Complete</h2>
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
// .hidden {
//   display: none;
// }
