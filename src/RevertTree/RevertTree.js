import React, { useState } from "react";

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

  // const initialData = (data,index) =>{
  //   if(data.children){
  //     data.children.forEach((item) =>{
  //       initialData(item)
  //     })
  //   }
  // }
  // initialData(data,0)

  return (
    <div>
      <Tree data={data} />
    </div>
  );
}

const Tree = ({ data }) => {
  return (
    <ul>
      {data.children &&
        data.children.map((item, index) => {
          return (
            <li key={index}>
              {item.val}

              {
                //  console.log(item.children)
                item.children && <Tree data={item.children} />
              }
            </li>
          );
          //   if(item.children){
          //     return <div key={index}>
          //        <Tree data = {item.children}/>
          //     </div>
          //   }else{
          //     ""
          //   }
        })}
    </ul>
  );
};
