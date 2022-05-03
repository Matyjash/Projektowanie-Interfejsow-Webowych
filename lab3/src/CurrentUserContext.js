import React from "react";

export const CurrentUserContext = React.createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState({ status: "notlogged" });

  const switchCurrentUserState = () => {
    console.log(currentUser.status);
    if (currentUser.status === "notlogged") {
      let user2 = currentUser;
      user2.status = "logged";
      setCurrentUser(user2);
    } else {
      let user2 = currentUser;
      user2.status = "notlogged";
      setCurrentUser(user2);
    }
    console.log(currentUser.status);
  };

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, switchCurrentUserState }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUser = () => React.useContext(CurrentUserContext);
