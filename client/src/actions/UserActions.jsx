export function login(credentials) {
  const username = credentials.username;
  const password = credentials.password;
  const creds = { password, username };
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(creds),
  };
  return (dispatch) => {
    dispatch({ type: "LOGGING_IN" });
    fetch("http://localhost:3001/session", configObj)
      .then((resp) => resp.json())
      .then((jsonResp) => {
        if (jsonResp.status === "error") {
          return handleError(jsonResp, dispatch);
        }
        localStorage.setItem("token", jsonResp.data.attributes.token);
        dispatch({ type: "LOGIN_USER", payload: jsonResp.data.attributes });
      })
      .catch(() =>
        dispatch({
          type: "ERROR",
          payload: "Must contain valid username and password",
        })
      );
  };
}
