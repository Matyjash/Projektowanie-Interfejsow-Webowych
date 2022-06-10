import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

function Add() {
  const { register, handleSubmit } = useForm();

  const [tags, setTags] = useState(["Projekt"]);

  const [ef, setEf] = useState({
    author: "Zbyszek",
    email: "",
    course: "",
    description: "",
    tags: ["Projekt"],
  });

  const saved = localStorage.getItem("ads");
  const ads = JSON.parse(saved);

  const handleAdd = (data) => {
    let temp = ef;
    temp.author = data.author;
    temp.email = data.email;
    temp.course = data.course;
    temp.description = data.description;
    temp.tags = tags;
    setEf(temp);
    addData(temp);
    window.location.href = "/ads";
  };

  const addData = (newData) => {
    ads.push(newData);
    localStorage.setItem("ads", JSON.stringify(ads));
  };

  return (
    <>
      <div className="Panel">
        <div className="Title">Dodawanie ogłoszenia</div>
        <div className="Form">
          <Form
            onSubmit={handleSubmit(handleAdd)}
            style={{
              paddingLeft: "100px",
              paddingTop: "100px",
              paddingRight: "100px",
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Imię</Form.Label>
              <Form.Control
                style={{ width: "30%" }}
                type="author"
                {...register("author")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                style={{ width: "30%" }}
                type="email"
                name="email"
                {...register("email")}
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
            <Form.Group className="mb-3" style={{ width: "50%" }}>
              <Form.Label>Tagi</Form.Label>
              <ReactTagInput
                tags={tags}
                onChange={(newTags) => setTags(newTags)}
                placeholder="Wprowadź tag i zatwierdź ENTER'em"
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

export default Add;
