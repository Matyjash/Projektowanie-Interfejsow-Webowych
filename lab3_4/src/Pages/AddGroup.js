import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

function AddGroup() {
  const { register, handleSubmit } = useForm();

  const [members, setMembers] = useState([]);

  const handleAddMember = (data) => {
    const nam = data.person;
    const tg = tgs;
    const mem = { person: nam, tags: tg };
    console.log(members);
    let mbr = members;
    mbr.push(mem);
    setMembers(mbr);
    console.log(members);
    forceUpdate();
  };

  const [tgs, setTags] = useState(["Projekt"]);

  const [ef, setEf] = useState({
    title: "Grupa",
    members: [{ person: "", tags: ["tag1", "tag2"] }],
    course: "",
    description: "",
  });

  const saved = localStorage.getItem("ads-group");
  const ads = JSON.parse(saved);

  const handleAdd = (data) => {
    let temp = ef;
    temp.title = data.title;
    temp.members = members;
    temp.course = data.course;
    temp.description = data.description;
    setEf(temp);
    addData(temp);
    window.location.href = "/ads-group";
  };

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const addData = (newData) => {
    ads.push(newData);
    localStorage.setItem("ads-group", JSON.stringify(ads));
  };

  return (
    <>
      <div className="Panel">
        <div className="Title">Dodawanie ogłoszenia grupy</div>
        <div className="Form">
          <Form
            onSubmit={handleSubmit(handleAdd)}
            style={{
              paddingLeft: "100px",
              paddingTop: "100px",
              paddingRight: "100px",
            }}
          >
            <div>
              <div style={{ marginBottom: "60px" }}></div>
              <Form.Group className="mb-3">
                <Form.Label id="member-name">
                  Imię i nazwisko członka grupy
                </Form.Label>
                <Form.Control
                  id="member-name"
                  style={{ width: "40%" }}
                  type="member"
                  name="member"
                  {...register("person")}
                />
              </Form.Group>
              <Form.Group className="mb-3" style={{ width: "50%" }}>
                <Form.Label id="tag-list">Tagi członka grupy</Form.Label>
                <ReactTagInput
                  tags={tgs}
                  onChange={(newTags) => setTags(newTags)}
                  placeholder="Wprowadź tag i zatwierdź ENTER'em"
                />
              </Form.Group>
              <h4>Członkowie:</h4>
              {members.map((txt, key) => (
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
              <div style={{ marginBottom: "50px", marginTop: "50xp" }}>
                <Button
                  variant="warning"
                  onClick={handleSubmit(handleAddMember)}
                >
                  {" "}
                  Dodaj członka
                </Button>{" "}
              </div>
            </div>
            <Form.Group className="mb-3">
              <Form.Label>Nazwa grupy</Form.Label>
              <Form.Control
                style={{ width: "30%" }}
                type="title"
                {...register("title")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nazwa kursu</Form.Label>
              <Form.Control
                style={{ width: "30%" }}
                type="course"
                name="course"
                {...register("course")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Opis</Form.Label>
              <Form.Control
                as="textarea"
                type="description"
                name="description"
                rows={3}
                {...register("description")}
              />
            </Form.Group>
            <Button variant="warning" onClick={handleSubmit(handleAdd)}>
              Prześlij
            </Button>{" "}
          </Form>
        </div>
      </div>
    </>
  );
}

export default AddGroup;
