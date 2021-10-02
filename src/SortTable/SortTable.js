import React, { useState } from "react";
//use sort function to sort the data: Array.sort({a-b})==small-->big
//b-a from big-->small
//delete:filter,slpice
//setData: store the data in the <div> map itelize
//:datalist:write the checkbox, set checkbox-->invisible

export default function SortTable() {
  let data = [
    { title: "T1", content: "C1", grade: 110 },
    { title: "T2", content: "C2", grade: 100 },
    { title: "T3", content: "C3", grade: 150 },
    { title: "T4", content: "C4", grade: 90 },
    { title: "T5", content: "C5", grade: 112 }
  ];

  const initialData = () => {
    return data.map((item) => {
      return item;
    });
  };

  let [dataList, setData] = useState(initialData());
  // const [isChecked, setCheck] = useState(false);

  const sortDown = () => {
    dataList.sort((e1, e2) => {
      return e2.grade - e1.grade;
    });
    setData(dataList.slice());
  };

  const sortUp = () => {
    dataList.sort((e1, e2) => {
      return e1.grade - e2.grade;
    });
    setData(dataList.slice());
  };
  const handler = (index) => {
    let checked = dataList[index].isChecked;
    dataList[index].isChecked = !checked;
    dataList[index] = { ...dataList[index] };
    setData(dataList.slice());
  };

  const deleteHandler = () => {
    let delArr = [];
    dataList.forEach((item, index) => {
      if (item.isChecked) delArr.push(index);
    });

    dataList = dataList.filter((item, index) => {
      if (delArr.indexOf(index) === -1) return item;
    });

    setData(dataList);
  };

  const TableHead = () => {
    return Object.keys(dataList[0]).map((item, index) => {
      return <td key={index}>{item}</td>;
    });
  };

  const TableList = () => {
    return dataList.map((item, index) => {
      return (
        <tr key={index} className={item.isChecked ? "active" : ""}>
          <td>
            <input
              type="checkbox"
              onChange={() => handler(index)}
              checked={item.isChecked}
            />
            {item.title}
            {item.content}
            {item.grade}
          </td>

          {/* {Object.keys(item).map((k, i) => {
            if (k !== "isChecked") {
              return <td key={i}>{item[k]}</td>;
            }
          })} */}
        </tr>
      );
    });
  };

  return (
    <div>
      <button onClick={sortDown}>sort Down</button>
      <button onClick={sortUp}>sort up</button>
      <button onClick={deleteHandler}>delete</button>
      <table>
        <tr>
          <th>{TableHead()}</th>
        </tr>
        {TableList()}
      </table>
    </div>
  );
}
