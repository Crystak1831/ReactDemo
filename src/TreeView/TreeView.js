// import "./styles.css";
import React, { useEffect, useState } from "react";
import Tree from "./Tree";
const TreeView = () => {
  const [root, setRoot] = useState([]);
  const [isVisible, setVisible] = useState(false);
  const handleExpand = () => {
    fetchData("./folder.json");
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
          console.log(temp);
          setRoot([...temp]);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <span onClick={handleExpand}>[{isVisible ? `-` : `+`}] root/</span>
      {root.length > 0 && isVisible && (
        <div className="first-layer">
          <Tree Data={root} />
        </div>
      )}
    </div>
  );
};
export default TreeView;
