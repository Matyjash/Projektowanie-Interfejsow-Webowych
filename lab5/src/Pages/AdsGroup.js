import React from "react";
import TextField from "@mui/material/TextField";
import "../App.css";
import Select from "react-select";
import ChatIcon from "@mui/icons-material/Chat";
import axios from "axios";

class AdsGroup extends React.Component {
  constructor() {
    super();
    this.state = {
      AdsContent: [],
      FilteredAds: [],
      selectText: "description",
      inputText: "",
    };

    this.getData();
    this.state.FilteredAds = this.state.AdsContent;
  }

  handleMessage = (key) => {
    let groupName = this.state.FilteredAds[key].title;
    localStorage.setItem("receiverType", "group");
    localStorage.setItem("name", groupName);
    window.location.href = "/send-message";
  };

  inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    console.log(lowerCase);
    this.state.inputText = lowerCase;
    this.setState({
      FilteredAds: this.filterData(),
    });
  };

  filterData = () => {
    return this.state.AdsContent.filter((el) => {
      if (this.state.inputText === "") {
        return el;
      } else {
        if (this.state.selectText === "description")
          return el.description.toLowerCase().includes(this.state.inputText);
        else if (this.state.selectText === "course")
          return el.course.toLowerCase().includes(this.state.inputText);
        else if (this.state.selectText === "members")
          return el.members.some(
            (item) => this.state.inputText === item.person.toLowerCase()
          );
      }
    });
  };

  getData = () => {
    let saved;
    axios.get("data/AdsGroups.json").then((res) => {
      const ads = res.data;
      saved = ads;
      console.log(saved);
      this.state.AdsContent = saved;
      this.state.FilteredAds = this.state.AdsContent;
      this.forceUpdate();
    });
  };

  render() {
    return (
      <>
        <div className="Panel">
          <div className="Title">Lista ogłoszeń grup</div>
          <div className="SearchBar">
            <TextField
              id="outlined-basic"
              onChange={this.inputHandler}
              variant="outlined"
              label="Szukaj"
              style={{ width: "70%" }}
            />
            <Select
              options={[
                { value: "description", label: "Opis" },
                { value: "course", label: "Kurs" },
                { value: "members", label: "Członkowie" },
              ]}
              style={{ fontSize: "large" }}
              maxMenuHeight={150}
              onChange={(e) => {
                this.state.selectText = e.value;
              }}
              label="Wybierz"
              defaultValue={{ label: "Opis", value: "description" }}
            />
          </div>
          <ul className="AdsList">
            {this.state.FilteredAds.map((val, key) => {
              return (
                <li key={key} className="AdRow">
                  <div className="user">
                    <img
                      className="image"
                      alt="Profile im"
                      src={require("../Images/icon-groups-3.jpg")}
                    />
                    {""}
                    <div id="title">{val.title}</div>{" "}
                  </div>
                  <div className="AdContent">
                    <div id="course">{val.course}</div>
                    <div id="description">{val.description}</div>
                    <div id="tags">
                      {val.members.map((txt, key) => (
                        <div id="member">
                          {txt.person}
                          {": "}
                          {txt.tags.map((tg, ky) => (
                            <t id={ky} className="tag">
                              {tg}
                            </t>
                          ))}
                        </div>
                      ))}
                    </div>
                    <div
                      className="message"
                      onClick={() => {
                        this.handleMessage(key);
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
}

export default AdsGroup;
