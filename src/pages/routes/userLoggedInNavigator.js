import { ReactSession } from "react-client-session";

function userLoggedInNavigator(navigate) {
  function navigator() {
    const token = localStorage.getItem("access_token");
    if (!token) {
      navigate("/");
      localStorage.clear();
    }
  }
  return navigator;
}

export default userLoggedInNavigator;
