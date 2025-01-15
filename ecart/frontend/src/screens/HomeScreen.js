import React from 'react'
import { Row, Col } from 'react-bootstrap';
import ProductComponent from '../component/ProductComponent'
import products from '../products';


const HomeScreen = () => {
  return (
    <>
    <h1>Latest Products</h1>
        <Row>
        {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <ProductComponent product={product} />
            </Col>
        ))}
        </Row>
    </>
  )
}

export default HomeScreen