import React, { useState } from "react";
import "./AutoComplete.css";

export default function AutoComplete({ data }) {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  // const [loadMore, setLoad] = useState(false);
  const [visible, setVisible] = useState(5);
  const [load, setLoad] = useState(true);

  const changeHandler = (e) => {
    let curInput = e.target.value;
    setInputValue(curInput);

    const filterData = data.filter((item) => {
      return item.includes(curInput);
    });

    // let renderItem = filterData.slice(0,5)
    setList(curInput ? filterData : []);
  };

  const showInfo = () => {
    if (list.length > 0) {
      return (
        <ul>
          {list.slice(0, visible).map((item, index) => {
            console.log(item);
            return <li key={index}>{item}</li>;
          })}
          <button
            className={list.length > 5 ? "" : "hidden"}
            onClick={loadMoreBtn}
          >
            load more
          </button>
        </ul>
      );
    }
    // else {
    //   return list.map((item, index) => {
    //     return (
    //       <ul>
    //         <li key={index}>{item}</li>
    //       </ul>
    //     );
    //   });
    // }
  };

  const loadMoreBtn = () => {
    setVisible(visible + 5);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={changeHandler} />
      {/* {
      list.length > 5 && (
        <ul>
          {list.slice(0,5).map((item,index) =>{
            console.log(item)
            return <li key = {index}>{item}</li>
          })}
          <button>loadMore</button>
        </ul>
      )
    }  */}
      {showInfo()}
    </div>
  );
}
