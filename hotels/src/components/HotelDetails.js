import React, { useState } from "react";
import Data from "../data.json";
import { ListGroup, Button } from "react-bootstrap";

function HotelDetails() {
  // console.log(Data);
  const [jsonData, setJsonData] = useState(Data[0].results);
  console.log(jsonData);

  const sortByRich = () => {
    setJsonData((jsonData) => {
      const dataToSort = [...jsonData];
      dataToSort.sort(
        (a, b) =>
          Number(a.offer.displayPrice.amount) -
          Number(b.offer.displayPrice.amount)
      );
      return dataToSort;
    });
  };

  return (
    <div className="Hotel">
      <div className="Details">
        Sort by:{" "}
        <Button variant="outline-primary" onClick={sortByRich}>
          Price low-high
        </Button>
        {jsonData &&
          jsonData.map((item, index) => {
            return (
              <div key={index}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h4> {item.property.title} </h4>
                    <h6> {item.property.address} </h6>
                    <p> {item.offer.name} </p>
                    <h5>{item.offer.cancellationOption.cancellationType}</h5>
                    <p> 1 night total ({item.offer.displayPrice.currency})</p>
                    <p> ${item.offer.displayPrice.amount} </p>
                  </ListGroup.Item>
                  <ListGroup.Item> </ListGroup.Item>
                </ListGroup>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default HotelDetails;
