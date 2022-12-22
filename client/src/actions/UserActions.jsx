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
  const data = await resp.json().data;
  localStorage.setItem("token", data.attributes.token);
  debugger;
}
