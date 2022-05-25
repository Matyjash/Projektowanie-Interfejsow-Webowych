import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import "../App.css";
import ChatIcon from "@mui/icons-material/Chat";
import Select from "react-select";
import axios from "axios";
import { Link } from "react-router-dom";

function Ads() {
  const [AdsContent, setAdsContent] = useState([]);

  useEffect(() => {
    axios.get("data/Ads.json").then((res) => {
      const ads = res.data;
      setAdsContent(ads);
      console.log(AdsContent);
    });
  }, []);

  const [selectText, setSelectText] = useState("description");

  let selectHandler = (e) => {
    setSelectText(e.value);
  };

  const newTo = {
    pathname: "/category/595212758daa6810cbba4104",
    param1: "Par1",
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

  const postUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

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
                  <Link
                    to={{
                      pathname: `/ads/${val.author}`,
                    }}
                    onClick={() => postUser(val)}
                  >
                    <img className="image" alt="Profile im" src={val.avatar} />
                  </Link>
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
