import React, { useContext } from "react";
import UserContext from "./userContext";

export default function Login(props) {
  const userContext = useContext(UserContext);

  return (
    <div>
      <button onClick={() => userContext.onLoggedIn("username")}>Login</button>
    </div>
  );
}
