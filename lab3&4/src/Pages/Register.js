import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../CurrentUserContext.js";
import axios from "axios";

const Register = () => {
  const { givenUser, switchCurrentUserState } = useCurrentUser();
  const [currentUser, setCurrentUser] = useState([]);
  const [users, setUsers] = useState([]);

  const register = (name, password) => {
    const newUser = { userName: name, password: password };

    let users = JSON.parse(localStorage.getItem("users"));
    console.log(users);
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Zarejestrowano");

    document.getElementById("input_name").value = "";
    document.getElementById("password_name").value = "";
  };

  useEffect(() => {
    const data = localStorage.getItem("currentUser");
    const currentUser = JSON.parse(data);
    setCurrentUser(currentUser);

    axios.get("data/Users.json").then((res) => {
      setUsers(res.data);
    });
  }, []);

  console.log(currentUser);

  if (currentUser === null)
    return (
      <div className="Panel">
        <div className="Title">Rejestracja</div>

        <div>
          Login:
          <input id="input_name"></input>
        </div>
        <div>
          Hasło:
          <input id="password_name"></input>
        </div>
        <button
          onClick={() => {
            register(
              document.getElementById("input_name").value,
              document.getElementById("password_name").value
            );
          }}
        >
          Zarejestruj
        </button>
      </div>
    );
  else {
    return (
      <div className="Panel">
        <div className="Title">Rejestracja</div>
        Użytkownik jest już zalogowany.
      </div>
    );
  }
};

export default Register;
