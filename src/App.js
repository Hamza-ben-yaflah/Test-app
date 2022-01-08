import React, { useState, useEffect } from "react";
import User from "./components/users/Users";
import Popup from "./components/popup/Popup";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [users, setUsers] = useState({});
  const [error, setError] = useState(null);
  const [showUsers, setShowUsers] = useState(false);
  const [showPopup, setPopShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/users`)
      .then(async (response) => await response.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const updateUser = (updatedUser) => {
    fetch(`http://localhost:3000/users/${updatedUser.id}`, {
      method: "PUT",
      body: JSON.stringify({
        username: updatedUser.username,
        name: updatedUser.name,
        password: updatedUser.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      const changedUsers = users.result.map((user) => {
        if (user.id === updatedUser.id) return updatedUser;
        return user;
      });
      setUsers({ ...users, result: changedUsers });
    });
  };

  const addUser = (user) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify({
        username: user.username,
        name: user.name,
        password: user.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => setUsers({ ...users, result: [user, ...users.result] }));
  };

  if (loading) {
    return <p>Data is loading...</p>;
  }

  return (
    <div>
      <button onClick={() => setShowUsers(true)}>display Users</button>
      <button onClick={() => setPopShowPopup(true)}>Add user</button>

      {showUsers
        ? users &&
          users.result?.map((user, i) => (
            <User
              key={i}
              info={user}
              onDelete={(id) => {
                setUsers({
                  ...users,
                  result: users.result.filter((user) => user.id !== id),
                });
              }}
              onUpdate={updateUser}
            />
          ))
        : error}
      {showPopup ? <Popup onSave={addUser} /> : null}
    </div>
  );
}

export default App;
