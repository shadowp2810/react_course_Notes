import React, { UserContext } from "react";
import UserContext from "./UserContext";

export default function MovieRow(props) {
  const currentUser = useContext(UserContext);
  return <div> {currentUser.name} </div>;
}
