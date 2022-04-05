import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AlertTemplate from "react-alert-template-basic";
import { transitions, positions, Provider as AlertProvider } from "react-alert";

export const ads = [
  {
    author: "Zbyszek",
    email: "???",
    course: "AK2 Projekt",
    description:
      "Poszukuje grupy do projektu z Architektury Komputerów 2. Oferuje duże doświadczenie ponieważ zaliczam ten kurs już trzeci raz :-)",
    tags: ["AK2", "Projekt", "Architektura Komputerów 2"],
  },
  {
    author: "Franek",
    email: "???",
    course: "NiDUC Projekt",
    description:
      "Witam wszystkich, poszukuje grupy do projektu z Niezawodności i Diagnostyki Układów Cyfrowych, szczególnie interesuje mnie temat Metody detekcji zakłóceń pomiędzy aparatem konsumpcji a cieczą ściśle chmielową o odczycie kwasowym",
    tags: ["NiDUC", "Projekt"],
  },
  {
    author: "Janek",
    email: "???",
    course: "Projekt zespołowy",
    description:
      "Hej. Podobno w tym semestrze mamy kurs o nazwie Projekt Zespołowy. Nie do końca rozumiem na czym on polega i kiedy prowadzący przedstawią nam listę tematów... Czy ktoś chciałby przygranąć mnie do grupy?",
    tags: ["Projekt", "Projekt zespołowy"],
  },
  {
    author: "Olek",
    email: "???",
    course: "PIW Projekt",
    description:
      "Cześć. Czy ktoś poszukuje może grupy do projektu z Projektowania Interfejsów Webowych? Nigdzie nie mogę znaleźć ogłoszeń związanych z tym kursem... Czyżby każdy znalazł już swoją grupę? ",
    tags: ["PIW", "Projekt"],
  },
];

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

if (!localStorage.getItem("ads") || localStorage.getItem("ads") === undefined) {
  localStorage.setItem("ads", JSON.stringify(ads));
}

if (
  !localStorage.getItem("ads-group") ||
  localStorage.getItem("ads-group") === undefined
) {
  localStorage.setItem("ads-group", JSON.stringify(adsGroup));
}

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
