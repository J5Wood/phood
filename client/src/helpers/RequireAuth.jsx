import { useState } from "react";
import { AuthConsumer } from "../actions/UserActions";
import { Navigate } from "react-router-dom";
export function RequireAuth({ children }) {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const { authed, isAuthorized } = AuthConsumer();

  if (authed) {
    return <>{children}</>;
  }
  if (checkingAuth) {
    checkForAuthorization(setCheckingAuth, isAuthorized);
    return <h2>Loading...</h2>;
  }
  return <Navigate to="/login" replace />;
}

async function checkForAuthorization(setCheckingAuth, isAuthorized) {
  if (!!localStorage.token) {
    await isAuthorized();
  }
  setCheckingAuth(false);
}
