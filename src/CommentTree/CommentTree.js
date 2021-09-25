import React, { useState, useEffect } from "react";

export default function CommentTrees() {
  const comments = [
    {
      id: 1,
      body: "Hello world, I am a top level comment (1)",
      parentId: null
    },
    { id: 2, body: "Example nested reply (2)", parentId: 1 },
    { id: 3, body: "Another nested reply (3)", parentId: 1 },
    { id: 4, body: "Second top level comment (4)", parentId: null },
    { id: 5, body: "nested reply again (5)", parentId: 4 },
    { id: 6, body: "just another reply (6)", parentId: 4 },
    { id: 7, body: "this is reply (7)", parentId: 4 },
    { id: 8, body: "Three levles deep (8)", parentId: 6 },
    { id: 9, body: "The last reply (9)", parentId: 7 },
    { id: 10, body: "The last reply (10)", parentId: 6 },
    { id: 11, body: "The last reply (11)", parentId: 1 }
  ];

  const [msg, setMsg] = useState([]);
  useEffect(() => {
    format();
  }, []);

  const organizer = (arr, item) => {
    arr.forEach((element) => {
      if (element.id === item.parentId) {
        element.children = element.children
          ? [...element.children, item]
          : [item];
      } else {
        element.children && organizer(element.children, item);
      }
    });
  };

  const format = () => {
    let data = [];
    for (let item of comments) {
      if (item.parentId === null) {
        data.push(item);
        // console.log(data)
      } else {
        organizer(data, item);
      }
    }
    setMsg(data);
  };
  return (
    <div>
      {msg.map((item) => {
        return <Tree key={item.id} data={item} />;
      })}
    </div>
  );
}
const Tree = ({ data }) => {
  return (
    <>
      <div>{data.body}</div>
      {data.children &&
        data.children.map((item) => {
          return (
            <div>
              <Tree key={item.id} data={item} />
            </div>
          );
        })}
    </>
  );
};
