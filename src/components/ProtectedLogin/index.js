import { Redirect, Route } from "react-router-dom";

const ProtectedLogin = (props) => {
  const accessToken = localStorage.getItem("login-token");
  if (accessToken === null) {
    return <Redirect to="/login" />;
  }
  return <Route {...props} />;
};

export default ProtectedLogin;
