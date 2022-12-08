import React from "react";

export function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form className="login-form">
        <label htmlFor="email">Email</label>
        <input type="text" id="email"></input>
        <label htmlFor="password">Password</label>
        <input type="password" id="password"></input>
      </form>
      <h2>Signup</h2>
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
