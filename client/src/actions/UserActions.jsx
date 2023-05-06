import { createContext, useContext, useState } from "react";

const authContext = createContext();

export function useAuth() {
  const [authed, setAuthed] = useState(false);

  async function login(credentials) {
    const creds = {
      email: credentials[0],
      password: credentials[1],
    };
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(creds),
    };
    const resp = await fetch("http://localhost:3001/sessions", configObj);
    const data = await resp.json();
    const response = data.data;

    if (response.status === "error") {
      console.log(response.message);
      return;
    }
    if (response.id) {
      localStorage.setItem("token", response.id);
      setAuthed(true);
      return true;
    }
    return false;
    // ***** Add reaction to bad data.
  }

  async function signup(credentials) {
    const creds = {
      email: credentials[0],
      password: credentials[1],
    };
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(creds),
    };
    const resp = await fetch("http://localhost:3001/users", configObj);
    const data = await resp.json();
    const response = data.data;

    if (response.status === "error") {
      console.log(response.message);
      return;
    }
    if (response.id) {
      localStorage.setItem("token", response.id);
      setAuthed(true);
      return true;
    }
    return false;
    // ***** Add reaction to bad data.
  }

  async function isAuthorized(token) {
    const configObj = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const resp = await fetch("http://localhost:3001/sessions", configObj);
    const data = await resp.json();
    return data;
  }
  return {
    authed,
    login,
    signup,
    isAuthorized,
  };
}

export function AuthProvider({ children }) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function AuthConsumer() {
  return useContext(authContext);
}
