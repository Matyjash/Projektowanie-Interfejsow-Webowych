import React, { useEffect, useState, useNavigate } from "react";
import { useCurrentUser } from "../CurrentUserContext.js";
import axios from "axios";
import { auth } from "../Firebase/init";
import {logInWithEmailAndPassword, logInWithGoogle, loginWithFacebook } from "../Firebase/users";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  const { givenUser, switchCurrentUserState } = useCurrentUser();
  const [currentUser, setCurrentUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  //const navigate = useNavigate();
  useEffect(() => {
    if (loading)
        return
    if (user)
       // navigate("/");
    if(error)
        console.error({error});
    }, [user, loading]);

  // const logIn = ( name, password) => {

  //   if (users.filter((e) => e.userName === name).length > 0) {
  //     if (users.filter((e) => e.userName === name)[0].password === password) {
  //       switchCurrentUserState();
  //       localStorage.setItem(
  //         "currentUser",
  //         JSON.stringify(users.filter((e) => e.userName === name)[0])
  //       );
  //       setCurrentUser(users.filter((e) => e.userName === name)[0]);
  //       alert("zalogowano");
  //       return;
  //     }
  //   }
  //   alert("Błąd logowania");
  // };

  useEffect(() => {
    const data = localStorage.getItem("currentUser");
    const currentUser = JSON.parse(data);
    setCurrentUser(currentUser);

    setUsers(JSON.parse(localStorage.getItem("users")));
  }, []);

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  console.log(currentUser);

  if (currentUser === null)
    return (
      <div className="Panel">
        <div className="Title">Logowanie</div>

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
            logInWithEmailAndPassword(document.getElementById("input_name").value,
            document.getElementById("password_name").value);
          }}
        >
          Zaloguj
        </button>
        <button
        onClick={logInWithGoogle}
        >Login with Google
        </button>
        <button
        onClick={loginWithFacebook}>
          Login with Facebook
        </button>
      </div>
    );
  else {
    return (
      <div className="Panel">
        <div className="Title">Logowanie</div>
        Użytkownik jest już zalogowany.
        <button onClick={logout}>Wyloguj</button>
      </div>
    );
  }
};

export default Login;
