import { useState } from "react";

export default function FormValidation() {
  const [formValue, setFormValue] = useState("");
  const [inputLsit, setInputList] = useState([]);
  // const [show, setShow] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setFormValue(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(formValue);
    // alert(formValue)
    // const newItem = {
    //   name: formValue
    // };
    // setShow(!show);
    // console.log(newItem);fd
    setInputList([...inputLsit, formValue]);
    setFormValue("");
    console.log(inputLsit);
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <label>Enter the Name</label>
        <input type="text" onChange={(e) => onChange(e)} value={formValue} />
        <button onClick={handleSubmit}>onSubmit</button>
        {/* {show ? formValue : ""} */}
      </form>
      {inputLsit.length > 0 &&
        inputLsit.map((item, index) => {
          return (
            <div key={index}>
              <li>{item}</li>
            </div>
          );
        })}
    </div>
  );
}
