import React, { useState } from "react";

//UI
//get the value of the mail and pwd
//Login:<div></div>
//setValue('')
//visible(flase) visible !(visible):
// isUserErr?flase
//

export default function LoginPage() {
  const correctEmail = "jasonLin@gmail.com";
  const correctPwd = "correctPassword";
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setLogin] = useState(false);
  const [mailErr, setMailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [visible, setVisible] = useState(false);

  const userHandler = (e) => {
    setLogin(false);
    setMail(e.target.value);
    if (e.target.value === correctEmail) {
      setMailErr(false);
    }
  };

  const passwordHandler = (e) => {
    setLogin(false);
    setPassword(e.target.value);
    if (e.target.value === correctPwd) {
      setPasswordErr(false);
    }
  };

  const loginHandler = () => {
    setLogin(true);
    let at = mail.indexOf("@");
    var dot = mail.lastIndexOf(".");
    let isValid =
      mail.length > 0 &&
      at > 0 &&
      dot > at + 1 &&
      dot < mail.length &&
      mail[at + 1] !== "." &&
      mail.indexOf(" ") === -1 &&
      mail.indexOf("..") === -1 &&
      mail === correctEmail;
    let isPwdCorrect = password === correctPwd;
    setMailErr(!isValid);
    setPasswordErr(!isPwdCorrect);
    // setMail(mail)
    // setPassword(password)
  };

  const visibelHandler = () => {
    setVisible(!visible);
  };

  const handleDisable = () => {
    if (!mail || !password) {
      return true;
    }
    return false;
  };

  return (
    <div>
      mail:{" "}
      <input
        type="text"
        value={mail}
        placeholder="enter the email"
        onChange={userHandler}
      />
      <br />
      password:
      <input
        type={visible ? "text" : "password"}
        value={password}
        placeholder="enter the password"
        onChange={passwordHandler}
      />
      <br />
      <button onClick={loginHandler} disabled={handleDisable()}>
        Login
      </button>
      <button>Reset</button>
      <input type="checkbox" onClick={visibelHandler} />
      visible
      <div>{isLogin ? `success-${mail}` : ""}</div>
    </div>
  );
}
