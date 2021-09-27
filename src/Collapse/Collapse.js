import React, { useRef, useEffect, useState } from "react";
import "./styles.css";

const data = [
  { title: "Title1", desc: "1cdsdsfdsvsdewfdew" },
  { title: "Title2", desc: "2cdsdsfdsvsdewfdew" },
  {
    title: "Title3",
    desc:
      "3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfds vsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsv sdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsds fdsvsdewfdew3cdsds fdsvsdewfdew3 cdsdsfdsvsdew fdew3cdsdsfdsvsdewfdew3 cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3 cdsdsfdsvsdewfdew3cdsds fdsvsdewfdew3c dsdsfdsvsdewfdew3cdsdsfdsvsdewfdew3cdsdsfdsvsdewfdew"
  }
];

export default function App() {
  return <Collapse data={data} />;
}

const Collapse = (props) => {
  const { data } = props;

  return (
    data &&
    data.map((item, idx) => {
      return <Unit item={item} key={idx} />;
    })
  );
};

const Unit = (props) => {
  const { item } = props;
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.height = open
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [open]);

  const onClickHandler = () => {
    setOpen(!open);
  };
  // semantic !!!
  return (
    <section className="wrapper">
      <h4 onClick={onClickHandler}>{item.title}</h4>
      <article ref={contentRef}>{item.desc}</article>
    </section>
  );
};

// CSS:
// .hide {
//   display: none;
// }

// .wrapper h4 {
//   margin-top: -1px;
//   border: 1px solid #333;
// }

// .wrapper article {
//   height: 0;
//   overflow: hidden;
//   transition: height 0.3s ease;
// }

// h4 {
//   margin-block-start: 0;
//   margin-block-end: 0;
// }
