import "./styles.css";
import React, { useState } from "react";

const mockup = [
  { date: "2020-02-10", cnt: "3" },
  { date: "2020-02-11", cnt: "4" },
  { date: "2020-02-12", cnt: "0" },
  { date: "2020-02-13", cnt: "0" },
  { date: "2020-02-14", cnt: "12" },
  { date: "2020-02-15", cnt: "5" },
  { date: "2020-02-16", cnt: "6" },
  { date: "2020-02-17", cnt: "0" },
  { date: "2020-02-18", cnt: "3" },
  { date: "2020-02-19", cnt: "2" },
  { date: "2020-02-20", cnt: "5" },
  { date: "2020-02-21", cnt: "3" },
  { date: "2020-02-22", cnt: "12" },
  { date: "2020-02-23", cnt: "5" }
];

export default function App() {
  const [data, setData] = useState([...mockup]);
  return (
    <div className="App">
      {data.map((item, index) => (
        <Unit cnt={item.cnt} date={item.date} key={index} />
      ))}
    </div>
  );
}

const Unit = ({ cnt, date }) => {
  const getColor = (num) => {
    let cnt = Number(num);
    if (cnt === 0) return "#ccc";
    else if (1 <= cnt && cnt <= 3) return "#00ff80";
    else if (4 <= cnt && cnt <= 6) return "#0080ff";
    else return "red";
  };
  const getStyle = (cnt) => {
    return { backgroundColor: getColor(cnt) };
  };
  return (
    <div className="wrapper">
      <div
        className="timeline-unit"
        style={getStyle(cnt)}
        data-tooltip={`${cnt} comments`}
      ></div>
      <div className="timeline-date">{date}</div>
    </div>
  );
};

// CSS
// .App {
//   font-family: sans-serif;
//   display: flex;
//   justify-content: center;
// }

// .wrapper {
//   height: 380px;
//   display: flex;
//   position: relative;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// }

// .timeline-unit {
//   width: 20px;
//   height: 30px;
//   margin: 1px;
//   position: relative;
// }

// .timeline-unit::before,
// .timeline-unit::after {
//   --scale: 0;
//   --tooltip-color: #333;
//   position: absolute;
//   left: 50%;
//   transform: translate(-50%, -100%) scale(var(--scale));
//   transition: 0.2s transform;
//   transform-origin: bottom center;
// }

// .timeline-unit::before {
//   top: -15px;
//   content: attr(data-tooltip);
//   width: max-content;
//   border-radius: 4px;
//   color: #fff;
//   background-color: var(--tooltip-color);
//   padding: 5px;
// }

// .timeline-unit::after {
//   content: "";
//   border: 10px solid transparent;
//   border-top-color: var(--tooltip-color);
//   border-bottom-color: transparent;
//   transform-origin: top center;
// }

// .timeline-unit:hover::before,
// .timeline-unit:hover::after {
//   --scale: 1;
// }

// .timeline-date {
//   font-style: italic;
//   font-size: 12px;
//   color: grey;
//   transform: rotate(300deg);
//   width: 85px;
//   position: absolute;
//   top: 58%;
//   left: -175%;
// }
