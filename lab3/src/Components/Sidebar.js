import React from "react";
import "../App.css";
import { SidebarContent } from "./SidebarContent";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="Sidebar">
        <ul className="SidebarList">
          {SidebarContent.map((val, key) => {
            return (
              <li
                key={key}
                className="row"
                id={window.location.pathname === val.link ? "active" : ""}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                {""}
                <div id="icon">{val.icon}</div>{" "}
                <div id="title">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Sidebar;
