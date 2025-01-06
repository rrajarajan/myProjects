import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Card, Button } from "react-bootstrap";
import products from "../products";

const ProductScreen = ({ match }) => {
  const product = products.find(p => p.productId === match.params.id )
 
  return(
  <>
   <Link className="btn btn-warning my-3" to="/">
        Go Back
      </Link>
      <Row>
        {/* <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col> */}
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            {/* <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item> */}
            <ListGroup.Item style={{ color: "Blue" }}>UnitPrice: ${product.unitPrice}</ListGroup.Item>
            <ListGroup.Item style={{ color: "Blue" }}>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card style={{ background: "orange" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col style={{ color: "blue" }}>UnitPrice:</Col>
                  <Col>
                    <strong>${product.unitPrice}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col style={{ color: "blue" }}>maximumQuantity:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button 
                className="btn-block" 
                type="button"
                disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
  </>
  );
};

export default ProductScreen;
