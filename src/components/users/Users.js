import React from "react";

function User({ info }) {
  return (
    <div>
      <h4>{`Your name is ${info.name}`}</h4>
      <div>{`Your username is ${info.username}`}</div>
    </div>
  );
}

export default User;
