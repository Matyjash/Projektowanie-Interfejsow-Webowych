import React from "react";

const Logout = () => {
  if (
    !localStorage.getItem("currentUser") ||
    localStorage.getItem("currentUser") === undefined
  ) {
    return (
      <div className="Panel">
        <div className="Title">Komunikat</div>
        <div className="Description">Nie jesteś zalogowany</div>
      </div>
    );
  } else {
    localStorage.removeItem("currentUser");
    return (
      <div className="Panel">
        <div className="Title">Komunikat</div>
        <div className="Description">Wylogowano użytkownika.</div>
      </div>
    );
  }
};

export default Logout;
