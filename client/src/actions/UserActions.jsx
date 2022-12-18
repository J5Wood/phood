export async function login(credentials) {
  const creds = {
    email: credentials[0],
    password: credentials[1],
  };
  debugger;
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(creds),
  };
  const resp = await fetch("http://localhost:3001/sessions", configObj);
  // .then((resp) => {
  //   console.log(resp);
  //   resp.json();
  // })
  // .then((sessionData) => {
  //   console.log("1", sessionData);
  //   if (sessionData.status === "error") {
  //     console.log("error");
  //   }
  //   console.log("2", sessionData);
  //   debugger;
  //   localStorage.setItem("token", sessionData.data.attributes.token);
  // })
  debugger;
  // .catch(() => console.log("error"));
}
