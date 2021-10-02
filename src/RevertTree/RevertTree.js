import React, { useState } from "react";

export default function ReverseTree() {
  const data = {
    val: 1,
    children: [
      { val: 2 },
      {
        val: 3,
        children: [
          {
            val: 4,
            children: [{ val: 5 }]
          },
          {
            val: 6
          }
        ]
      },
      { val: 7, children: [{ val: 8 }] },
      { val: 9 }
    ]
  };

  const [open, setOpen] = useState(false);
  const [rootData, setRootData] = useState("");
  const init = (data, index) => {
    data.id = index ? index + "" : "";
    if (data.children) {
      data.children.forEach((item, index) => {
        init(item, data.id + index);
      });
    }
  };
  init(data, 0);

  const handleData = (e) => {
    const id = e.target.id;
    console.log(id);
    if (id !== undefined) {
      let newData = id.split("").reduce((prev, curr) => {
        return prev.children[curr];
      }, data);
      setRootData(newData);
      setOpen(!open);
    }
  };

  return (
    <div data-id={data.id}>
      <span onClick={handleData}>{open ? "-" : "+"}</span>
      {/* {data.val} */}
      {data.val}
      <Tree rootData={rootData} />
    </div>
  );
}

const Tree = ({ rootData }) => {
  // console.log(rootData)
  const [open, setOpen] = useState(false);
  const handleData = () => {
    setOpen(!open);
  };
  return (
    <ul>
      {rootData &&
        rootData.children.map((item, index) => {
          // console.log(item)
          return (
            <div key={index}>
              <span onClick={handleData}>{open ? "-" : "+"}</span>
              {item.val}

              {
                // console.log(item.children)
                item.children && <Tree data={item.children} />
              }
            </div>
          );
        })}
      {/* {rootData&&rootData.children.map((item)=>{
          // console.log(item.children)
          return <Node nodeData={item.children}/>
        })} */}
    </ul>
  );
};
