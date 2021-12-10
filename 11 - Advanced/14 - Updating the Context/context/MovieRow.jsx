import React, { UserContext } from "react";
import UserContext from "./userContext";

export default function MovieRow(props) {
  const userContext = useContext(UserContext);
  return (
    <div>
      {" "}
      Movie Row {userContext.currentUser
        ? userContext.currentUser.name
        : ""}{" "}
    </div>
  );
}
