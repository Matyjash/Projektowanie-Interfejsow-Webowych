import React from "react";
import Sidebar from "./Components/Sidebar.js";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Info from "./Pages/Info.js";
import Home from "./Pages/Home.js";
import Ads from "./Pages/Ads.js";
import Add from "./Pages/Add.js";
import AdsGroup from "./Pages/AdsGroup.js";
import AddGroup from "./Pages/AddGroup.js";
import SendMessage from "./Pages/SendMessage.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route path="home" element={<Home />} />
            <Route path="ads" element={<Ads />} />
            <Route path="add" element={<Add />} />
            <Route path="info" element={<Info />} />
            <Route path="ads-group" element={<AdsGroup />} />
            <Route path="add-group" element={<AddGroup />} />
            <Route path="send-message" element={<SendMessage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
