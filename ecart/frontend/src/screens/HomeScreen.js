import React, {useEffect, useState} from 'react'
import { Row, Col } from 'react-bootstrap';
import ProductComponent from '../component/ProductComponent'
import axios from 'axios';

//GET from FRONTEND
// import products from '../products';

const HomeScreen = () => {
  
  //GET from BACKEND
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5001/api/products`)
        .then((response) => {
          setProducts(response.data);
        })
  }, [])

  // GET using FETCH method
  // useEffect(() => {
  //   fetch(`http://localhost:5001/api/products`)
  //       .then((response) => {
  //         setProducts(response.data);
  //       })
  // }, [])

  return (
    <>
    <h1>Latest Products</h1>
        <Row>
        {products.map((product) => (
            <Col  sm={12} md={6} lg={4} xl={3}>
                <ProductComponent product={product} />
            </Col>
        ))}
        </Row>        
    </>
  )
}

export default HomeScreen