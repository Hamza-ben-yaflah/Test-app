import React, { useState, useEffect } from "react";
import "./pop.css";

function Popup() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        name,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (data) => console.log(await data.json()));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign In</h3>

      <div className="form-group">
        <label htmlFor="inp-username">User Name</label>
        <input
          onChange={(e) => {
            setUsername(e.target.value);
            console.log(username);
          }}
          type="text"
          className="form-control"
          placeholder="UserName"
        />
      </div>

      <div className="form-group">
        <label htmlFor="inp-name">Name</label>
        <input
          onChange={(e) => {
            setName(e.target.value);
            console.log(name);
          }}
          type="text"
          className="form-control"
          placeholder="Name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="inp-password">Password</label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(password);
          }}
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
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  );
}

export default Popup;
