import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PlayerData from "../Data/cskplayers.json";
import Squad from "./Squad";

const Cards = ({ teamdetails }) => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [squads, setSquads] = useState(PlayerData);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <Row xs={2} md={4} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card
            className="mt-2"
            style={{ width: "18rem", textAlign: "center" }}
          >
            <Card.Img variant="top" src={teamdetails.home_team_logo} />
            <Card.Body>
              {teamdetails.background}
              <Card.Title>{teamdetails.team}</Card.Title>
              {/* <Card.Text></Card.Text> */}
            </Card.Body>
            {values.map((v, idx) => (
              <Button
                key={idx}
                className="me-2 mb-2"
                onClick={() => handleShow(v)}
              >
                PLAYERS
                {typeof v === "string" && `below ${v.split("-")[0]}`}
              </Button>
            ))}
            <Modal
              show={show}
              fullscreen={fullscreen}
              onHide={() => setShow(false)}
            >
              <Modal.Header closeButton style={{background:"#19398a"}}>
                <Modal.Title className="MODAL" style={{color:"whitesmoke"}}>
                  IPL Squad Lists-2022
                </Modal.Title>
              </Modal.Header>
              <Modal.Body >
                <div className="row" style={{ marginLeft: "-1px" }}>
                  {squads.map((squaddetails) => (
                    <div className="col-sm-3">
                      <Squad squaddetails={squaddetails} />
                    </div>
                  ))}
                </div>
              </Modal.Body>
            </Modal>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Cards;
