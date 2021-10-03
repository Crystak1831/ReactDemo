import React, { useEffect, useState } from "react";
import Node from "./Node";
const Tree = ({ Data }) => {
  return (
    <>
      <ul className={"first-tree"}>
        {Data.map((item) => (
          <Node nodeData={item} />
        ))}
      </ul>
    </>
  );
};

export default Tree;
