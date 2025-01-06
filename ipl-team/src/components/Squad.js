import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Squad = ({ squaddetails }) => {
  return (
    <div className="SQUAD">
      <Card className="CustomCard" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={squaddetails.player_image} />
        <Card.Body>
          <Card.Title className="bg">{squaddetails.player_name}</Card.Title>
          <Card.Text className="text-color">{squaddetails.Role}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Squad;
