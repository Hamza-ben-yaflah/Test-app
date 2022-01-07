import React, { useState, useEffect } from "react";
import Users from "./components/users/Users";
function App() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log(users);
      })
      .catch((error) => setError(error));
  }, []);

  const display = () => {
    setShow(true);
    console.log(show);
  };

  return (
    <div>
      <button
        onClick={() => {
          display();
        }}
      >
        display Users
      </button>
      {show
        ? users && users.result.map((user, i) => <Users key={i} info={user} />)
        : error}
    </div>
  );
}

export default App;
