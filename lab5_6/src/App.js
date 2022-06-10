import React, { useEffect } from "react";
import Sidebar from "./Components/Sidebar.js";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Info from "./Pages/Info.js";
import Home from "./Pages/Home.js";
import Ads from "./Pages/Ads.js";
import Add from "./Pages/Add.js";
import {auth} from "../src/Firebase/init";
import { useAuthState } from "react-firebase-hooks/auth";
import AdsGroup from "./Pages/AdsGroup.js";
import AddGroup from "./Pages/AddGroup.js";
import SendMessage from "./Pages/SendMessage.js";
import UserInfo from "./Pages/UserInfo.js";
import Login from "./Pages/Login.js";
import Logout from "./Pages/Logout.js";
import Register from "./Pages/Register.js";
import {logut} from "../src/Firebase/users";

import { CurrentUserProvider } from "./CurrentUserContext.js";

function App() {
  
  const [userInny] = useAuthState(auth);
  
  return (
    <CurrentUserProvider>
      <div className="App">
        <div>
          Akt. użyytkownik: {userInny && userInny.displayName}
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Sidebar />}>
              <Route path="home" element={<Home />} />
              <Route path="ads" element={<Ads />} />
              <Route path="ads/:userId" element={<UserInfo />} />
              <Route path="add" element={<Add />} />
              <Route path="info" element={<Info />} />
              <Route path="ads-group" element={<AdsGroup />} />
              <Route path="add-group" element={<AddGroup />} />
              <Route path="send-message" element={<SendMessage />} />
              <Route path="login" element={<Login />} />
              <Route path="logout" element={<Logout />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </CurrentUserProvider>
  );
}

export default App;
