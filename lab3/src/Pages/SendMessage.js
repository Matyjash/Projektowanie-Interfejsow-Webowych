import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "@pathofdev/react-tag-input/build/index.css";
import { useLocation } from "react-router";
import { useAlert } from "react-alert";

function Add(props) {
  const { register, handleSubmit } = useForm();

  const alert = useAlert();

  const location = useLocation();

  const formRef = useRef(null);

  const handleSend = (data) => {
    formRef.current.reset();
    alert.show("Wysłano wiadomość!");
  };

  const name = localStorage.getItem("name");
  const receiverType = localStorage.getItem("receiverType");

  let welcomeMessage = "";
  if (receiverType === "group") {
    welcomeMessage = (
      <div className="Title">Wysyłanie wiadomości do grupy {name}</div>
    );
  } else {
    welcomeMessage = (
      <div className="Title">Wysyłanie wiadomości do użytkownika {name}</div>
    );
  }

  return (
    <>
      <div className="Panel">
        {welcomeMessage}
        <div className="Form">
          <Form
            ref={formRef}
            onSubmit={handleSubmit(handleSend)}
            style={{
              paddingLeft: "100px",
              paddingTop: "100px",
              paddingRight: "100px",
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Temat</Form.Label>
              <Form.Control
                style={{ width: "50%" }}
                type="topic"
                {...register("topic")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Treść</Form.Label>
              <Form.Control
                as="textarea"
                type="message"
                name="message"
                rows={5}
                {...register("message")}
              />
            </Form.Group>
            <Button variant="warning" onClick={handleSubmit(handleSend)}>
              Prześlij
            </Button>{" "}
          </Form>
        </div>
      </div>
    </>
  );
}

export default Add;
