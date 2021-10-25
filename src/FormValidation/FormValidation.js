import { useState } from "react";
import "./FormValidation.css";

export default function FormValidation() {
  const [formValue, setFormValue] = useState("");
  const [inputLsit, setInputList] = useState([]);
  const [enterValid, setEnterValid] = useState(true);
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
    if (formValue.trim() === "") {
      setEnterValid(false);
      return;
    }

    setEnterValid(true);
    setInputList([...inputLsit, formValue]);
    setFormValue("");
    console.log(inputLsit);
  };

  const nameInputClasses = enterValid ? "form-control" : "form-control invalid";

  return (
    <div>
      <form onSubmit={handleForm}>
        <div className={nameInputClasses}>
          <label>Enter the Name</label>
          <input type="text" onChange={(e) => onChange(e)} value={formValue} />
          <button onClick={handleSubmit}>onSubmit</button>
          {!enterValid && <p className="error-text">must enter the name</p>}
        </div>

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
