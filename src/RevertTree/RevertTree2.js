import "./styles.css";
import { useState } from "react";
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

// const setIsOpen = (node) => {
//   if (!Array.isArray(node)) {
//     // For object, set isOpen and check "children" for recursion
//     node.isOpen = false;
//     if (node.children) {
//       setIsOpen(node.children);
//     }
//   } else {
//     // For array, iterate through each item and set isOpen to false
//     for (const item of node) {
//       setIsOpen(item);
//     }
//   }
// };

// setIsOpen(data);

const TreeComponent = ({ level = 0, val, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNode = () => setIsOpen(!isOpen);

  return (
    <ul key={val}>
      {children && (
        <button className="toggle-button" onClick={toggleNode}>
          {isOpen ? "-" : "+"}
        </button>
      )}
      {val}
      {isOpen &&
        children &&
        children.map((item) => (
          <li key={item.val}>
            <TreeComponent level={level + 1} {...item} />
          </li>
        ))}
    </ul>
  );
};

export default function App() {
  return (
    <div className="App">
      <TreeComponent {...data} />
    </div>
  );
}
