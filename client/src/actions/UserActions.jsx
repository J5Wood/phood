export async function login(credentials) {
  const creds = {
    email: credentials[0],
    password: credentials[1],
  };
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(creds),
  };
  const resp = await fetch("http://localhost:3001/sessions", configObj);
  const data = await resp.json();
  return data.data;
  // ***** Add reaction to bad data.
}

export async function signup(credentials) {
  const creds = {
    email: credentials[0],
    password: credentials[1],
  };
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(creds),
  };
  const resp = await fetch("http://localhost:3001/users", configObj);
  const data = await resp.json();
  return data;
  // ***** Add reaction to bad data.
}
