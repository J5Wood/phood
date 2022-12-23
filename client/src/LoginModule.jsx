import { useState } from "react";
import { login, signup } from "./actions/UserActions";

export function LoginModule() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  function handleLoginInputChange(event) {
    const key = event.target.name;
    setLoginInfo({ ...loginInfo, [key]: event.target.value });
  }

  async function handleLoginSubmit(e) {
    e.preventDefault();
    const response = await login([loginInfo.email, loginInfo.password]);
    localStorage.setItem("token", response.attributes.token);
    window.location.href = "/dashboard";
  }

  const [signupInfo, setSignupInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleSignupInputChange(event) {
    const key = event.target.name;
    setSignupInfo({ ...signupInfo, [key]: event.target.value });
  }

  async function handleSignupSubmit(e) {
    e.preventDefault();
    if (signupInfo.password !== signupInfo.confirmPassword)
      console.log("Passwords must match!!!");
    const response = await signup([signupInfo.email, signupInfo.password]);

    if (response.status === "error") {
      console.log(response.message);
      return;
    }

    localStorage.setItem("token", response.data.attributes.token);
    window.location.href = "/dashboard";
  }

  return (
    <div className="login-module">
      <h2 className="login-header">Login</h2>
      <form className="login-form" onSubmit={(e) => handleLoginSubmit(e)}>
        <label htmlFor="login-email">Email</label>
        <input
          type="text"
          id="login-email"
          name="email"
          onChange={(e) => handleLoginInputChange(e)}
        ></input>
        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          id="login-password"
          name="password"
          onChange={(e) => handleLoginInputChange(e)}
        ></input>
        <input className="login-submit" type="submit" />
      </form>
      <div className="login-splitter">
        <span />
        or
        <span />
      </div>
      <h2 className="login-header">Signup</h2>
      <form
        className="login-form signup"
        onSubmit={(e) => handleSignupSubmit(e)}
      >
        <label htmlFor="signup-email">Email</label>
        <input
          type="text"
          id="signup-email"
          name="email"
          onChange={(e) => handleSignupInputChange(e)}
        ></input>
        <label htmlFor="signup-password">Password</label>
        <input
          type="password"
          id="signup-password"
          name="password"
          onChange={(e) => handleSignupInputChange(e)}
        ></input>
        <label htmlFor="confirm-signup-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-signup-password"
          name="confirmPassword"
          onChange={(e) => handleSignupInputChange(e)}
        ></input>
        <input className="login-submit" type="submit" />
      </form>
    </div>
  );
}
