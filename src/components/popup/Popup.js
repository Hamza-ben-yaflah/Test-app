import React, { useState } from "react";
import "./pop.css";

function Popup({ user, onSave }) {
  const [username, setUsername] = useState(user?.username || "");
  const [name, setName] = useState(user?.name || "");
  const [password, setPassword] = useState(user?.password || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formUser = {
      username,
      name,
      password,
    };

    onSave(user ? { ...formUser, id: user.id } : formUser);

    // setUsername("");
    // setName("");
    // setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign In</h3>

      <div className="form-group">
        <label htmlFor="inp-username">User Name</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className="form-control"
          placeholder="UserName"
        />
      </div>

      <div className="form-group">
        <label htmlFor="inp-name">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="inp-password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Submit
      </button>
    </form>
  );
}

export default Popup;
