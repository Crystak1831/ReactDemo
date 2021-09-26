import React, { useState, useEffect } from "react";

export default function Card() {
  let ranks = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let suits = ["♠", "♣", "♥", "♦"];
  // const [rankList, setRank] = useState(ranks)
  // const [suitList,setSuits] = useState(suits)
  const [combo, setCombo] = useState([]);
  const [current, setCurrent] = useState([]);

  useEffect(() => {
    let array = [];
    for (let i = 0; i < ranks.length; i++) {
      for (let j = 0; j < suits.length; j++) {
        array.push(ranks[i] + suits[j]);
      }
    }
    setCombo(array);
  }, []);

  const getNewCard = () => {
    let array = combo;
    // console.log(array)
    let currentCard = [];
    for (let i = 0; i < 5; i++) {
      let index = Math.floor(Math.random() * array.length);
      currentCard.push(array[index]);
      array.splice(index, 1);
    }
    setCurrent(currentCard);
    setCombo(array);
  };

  const shuffleHandle = () => {
    let array = [];
    for (let i = 0; i < ranks.length; i++) {
      for (let j = 0; j < suits.length; j++) {
        array.push(ranks[i] + suits[j]);
      }
    }
    setCurrent([]);
    setCombo(array);
  };

  return (
    <div>
      <button onClick={getNewCard}>new hand of card</button>
      <button onClick={shuffleHandle}>shuffle</button>
      <div className="card-container">
        {current.map((item) => {
          return <div key={item}>{item}</div>;
        })}
      </div>
    </div>
  );
}
