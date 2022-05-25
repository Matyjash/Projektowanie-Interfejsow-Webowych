import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AlertTemplate from "react-alert-template-basic";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import axios from "axios";

export const adsGroup = [
  {
    title: "Grupa",
    members: [
      { person: "Andrzej Ucho", tags: ["frontend", "devops"] },
      { person: "Dominika Palec", tags: ["backend", "ui/ux"] },
    ],
    course: "BD2 Projekt",
    description: "Poszukujemy członków do grupy.",
  },
];

axios.get("data/Users.json").then((res) => {
  const users = res.data;
  if (
    !localStorage.getItem("users") ||
    localStorage.getItem("users") === undefined
  ) {
    localStorage.setItem("users", JSON.stringify(users));
  }
});

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
