import React, { useState } from "react";
import "./RevertTree.css";

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
  // const init = (data, index) => {
  //   data.id = index ? index + "" : "";
  //   if (data.children) {
  //     data.children.forEach((item, index) => {
  //       init(item, data.id + index);
  //     });
  //   }
  // };
  // init(data, 0);

  const handleData = () => {
    setOpen(!open);
  };

  return (
    <div data-id={data.id}>
      {data.children && <span onClick={handleData}>{open ? "-" : "+"}</span>}
      {data.val}
      {data &&
        open &&
        data.children.map((item) => {
          return (
            <ul>
              <Tree node={item} children={item.children} />
            </ul>
          );
        })}
    </div>
  );
}

const Tree = ({ node }) => {
  console.log(node);
  const [open, setOpen] = useState(false);
  const handleSpan = () => {
    setOpen(!open);
  };

  const TreeNode = () => {
    if (node.children) {
      //  <span>h</span>
      if (open) {
        return node.children.map((item) => (
          <Tree node={item} children={item.children} />
        ));
      }
    }
  };

  return (
    <li>
      {node.children && <span onClick={handleSpan}>{open ? "-" : "+"}</span>}
      {node.val}
      <ul>{TreeNode()}</ul>
    </li>
  );
};

// css:
// ul {
//   list-style: none;
// }

// .icon {
//   cursor: pointer;
// }
