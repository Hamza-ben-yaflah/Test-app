import React, { useState } from "react";
import Popup from "../popup/Popup";
function User({ info, onDelete }) {
  const [pop1, setPop1] = useState(false);

  console.log(info);

  return (
    <div>
      <h4>{`Your name is ${info.name}`}</h4>{" "}
      <button onClick={() => onDelete(info.id)}>delete</button>
      <button onClick={() => setPop1(true)}>Edit</button>
      <div>{`Your username is ${info.username}`}</div>
      {pop1 ? <Popup /> : console.log(" ")}
    </div>
  );
}

export default User;
