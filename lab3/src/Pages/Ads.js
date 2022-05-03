import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "../App.css";
import ChatIcon from "@mui/icons-material/Chat";
import Select from "react-select";

function Ads() {
  const [AdsContent] = useState(() => {
    const saved = localStorage.getItem("ads");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [selectText, setSelectText] = useState("description");

  let selectHandler = (e) => {
    setSelectText(e.value);
  };

  const handleMessage = (key) => {
    let personName = filteredData[key].author;
    localStorage.setItem("receiverType", "person");
    localStorage.setItem("name", personName);
    window.location.href = "/send-message";
  };

  const options = [
    { value: "description", label: "Opis" },
    { value: "course", label: "Kurs" },
    { value: "tags", label: "Tagi" },
  ];

  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = AdsContent.filter((el) => {
    if (inputText === "") {
      return el;
    } else {
      if (selectText === "description")
        return el.description.toLowerCase().includes(inputText);
      else if (selectText === "course")
        return el.course.toLowerCase().includes(inputText);
      else if (selectText === "tags")
        return el.tags.some((item) => inputText === item.toLowerCase());
    }
  });
  return (
    <>
      <div className="Panel">
        <div className="Title">Lista ogłoszeń</div>
        <div className="SearchBar">
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            label="Szukaj"
            style={{ width: "70%" }}
          />
          <Select
            options={options}
            style={{ fontSize: "large" }}
            maxMenuHeight={150}
            onChange={selectHandler}
            label="Wybierz"
            defaultValue={{ label: "Opis", value: 0 }}
          />
        </div>
        <ul className="AdsList">
          {filteredData.map((val, key) => {
            return (
              <li key={key} className="AdRow">
                <div className="user">
                  <img
                    className="image"
                    alt="Profile im"
                    src={require("../Images/icon.png")}
                  />
                  {""}
                  <div id="author">{val.author}</div>{" "}
                </div>
                <div className="AdContent">
                  <div id="course">{val.course}</div>
                  <div id="description">{val.description}</div>
                  <div id="tags">
                    {val.tags.map((txt, key) => (
                      <t id={key} className="tag">
                        {txt}
                      </t>
                    ))}
                  </div>
                  <div
                    className="message"
                    onClick={() => {
                      handleMessage(key);
                    }}
                  >
                    <ChatIcon fontSize="large" />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Ads;
