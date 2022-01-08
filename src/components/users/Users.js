import React, { useState } from "react";
import Popup from "../popup/Popup";
function User({ info, onDelete }) {
  const [pop1, setPop1] = useState(false);

  console.log(info);

  const fetchdelete = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (data) => console.log(await data.json()));
  };

  return (
    <div>
      <h4>{`Your name is ${info.name}`}</h4>{" "}
      <button
        onClick={() => {
          onDelete(info.id);
          fetchdelete(info.id);
        }}
      >
        delete
      </button>
      <button onClick={() => setPop1(true)}>Edit</button>
      <div>{`Your username is ${info.username}`}</div>
      {pop1 ? <Popup /> : console.log(" ")}
    </div>
  );
}

export default User;
