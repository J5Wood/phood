import React from "react";

export function Login() {
  return (
    <div className="login-module">
      <h2 className="login-header">Login</h2>
      <form className="login-form">
        <label htmlFor="email">Email</label>
        <input type="text" id="email"></input>
        <label htmlFor="password">Password</label>
        <input type="password" id="password"></input>
      </form>
      <div className="login-splitter">
        <span />
        or
        <span />
      </div>
      <h2 className="login-header">Signup</h2>
      <form className="login-form">
        <label htmlFor="email">Email</label>
        <input type="text" id="email"></input>
        <label htmlFor="password">Password</label>
        <input type="password" id="password"></input>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password"></input>
      </form>
    </div>
  );
}
