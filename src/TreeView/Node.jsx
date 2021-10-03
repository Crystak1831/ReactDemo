import React, { useEffect, useState } from "react";
import Tree from "./Tree";

const Node = ({ nodeData }) => {
  const [ownData, setData] = useState(JSON.parse(JSON.stringify(nodeData)));
  const [isVisible, setVisible] = useState(false);
  const handleSubExpand = async () => {
    await fetchData("./folder.json");
    setVisible(!isVisible);
  };
  const fetchData = async (url) => {
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          let temp = data.map((item) => {
            if (item.type === "folder") {
              item.children = [];
            }
            return item;
          });

          let newData = { ...ownData, children: [...temp] };
          console.log(newData);
          setData(newData);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <li>
        <span onClick={handleSubExpand}>[{isVisible ? `-` : `+`}]</span>{" "}
        {ownData.name}
      </li>
      {ownData.children.length > 0 && isVisible && (
        <Tree Data={ownData.children} />
      )}
    </>
  );
};

export default Node;
