import React, { useState, useEffect, useRef } from "react";
import "./BlinkyWrappers.css";
// 记得用setInterval去做一个blinky，用css，display：block；display：none做闪烁
export default function BlinkWrapper() {
  return <Blinky>Blinky</Blinky>;
}

// function Blinky(props){
//   const [isShow, setShow] = useState(false)
//   useEffect(()=>{
//     setInterval(()=>{
//       setShow(!isShow)
//     },1000)
//   },[isShow])
//   return<div className= {isShow?"show":"hidden"}>{props.children}</div>
// }

// 难点：如果useEffect不用isShow监听, 只会出现一次闪烁，因为，每次运行的时候都会创建
// 一个isShow， 我们需要一个中介点去使isShow 指向它。 we can use useRef
function Blinky(props) {
  const [isShow, setShow] = useState(true);
  let showRef = useRef(false);
  useEffect(() => {
    setInterval(() => {
      showRef = !showRef;
      setShow(showRef);
    }, 1000);
  }, []);
  return <div className={isShow ? "show" : "hidden"}>{props.children}</div>;
}
