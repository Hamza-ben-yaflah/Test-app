import React, { useState, useEffect } from "react";
import User from "./components/users/Users";
import Popup from "./components/popup/Popup";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [users, setUsers] = useState({});
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [pop, setPop] = useState(false);
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
  if (loading) {
    return <p>Data is loading...</p>;
  }

  return (
    <div>
      <button onClick={() => setShow(true)}>display Users</button>
      <button onClick={() => setPop(true)}>Add user</button>

      {show
        ? users &&
          users.result.map((user, i) => (
            <User
              key={i}
              info={user}
              onDelete={(id) => {
                setUsers({
                  ...users,
                  result: users.result.filter((user) => user.id !== id),
                });
              }}
            />
          ))
        : error}
      {pop ? <Popup /> : null}
    </div>
  );
}

export default App;
