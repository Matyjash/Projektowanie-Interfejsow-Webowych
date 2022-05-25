import React, { useReducer, useState } from "react";

const UserInfo = () => {
  const [UserContent, setUserContent] = useState(() => {
    const data = localStorage.getItem("user");
    const json = JSON.parse(data);
    return json || "";
  });

  return (
    <ul>
      <h1>Profil użytkownika {UserContent.author}</h1>
      <li key={0} className="AdRow">
        <div className="user">
          <img className="image" alt="Profile im" src={UserContent.avatar} />
          {""}
          <div id="author">{UserContent.author}</div>{" "}
          <div id="email">Email: {UserContent.email}</div>
        </div>
      </li>
    </ul>
  );
};
export default UserInfo;
