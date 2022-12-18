import { useState } from "react";
import { login } from "./actions/UserActions";

export function LoginModule() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleInputChange(event) {
    const key = event.target.id;
    setLoginInfo({ ...loginInfo, [key]: event.target.value });
  }
  async function handleLoginSubmit() {
    await login([loginInfo.email, loginInfo.password]);
    debugger;
  }

  return (
    <div className="login-module">
      <h2 className="login-header">Login</h2>
      <form className="login-form" onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={(e) => handleInputChange(e)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => handleInputChange(e)}
        ></input>
        <input className="login-submit" type="submit" />
      </form>
      <div className="login-splitter">
        <span />
        or
        <span />
      </div>
      <h2 className="login-header">Signup</h2>
      <form className="login-form signup" onSubmit={(e) => handleFormSubmit(e)}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email"></input>
        <label htmlFor="password">Password</label>
        <input type="password" id="password"></input>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password"></input>
        <input className="login-submit" type="submit" />
      </form>
    </div>
  );
}
