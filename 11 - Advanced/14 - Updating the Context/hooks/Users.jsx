import React, { useEffect } from "react";
//we use axios to make an api call
import axios from "axios";

export default function Users(props) {
  //In class components we make api calls in componentDidMount method.
  //In functional components we don't have that so we useEffect hook

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      //this returns a promise, we can choose to await it
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setUsers[result.data];
      //setUsers will set state variable and this will cause component to rerender.
    }

    getUsers();
  });
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
