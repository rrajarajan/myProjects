import React, {useEffect, useState} from 'react'
import { Row, Col } from 'react-bootstrap';
import ProductComponent from '../component/ProductComponent'
import axios from 'axios';

//GET from FRONTEND
// import products from '../products';

const HomeScreen = () => {
  
  // GET from BACKEND
  // using AXIOS - useEffect
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products`);
      setProducts(data);
    }
    fetchProducts();
  }, [])

  // GET using FETCH - useEffect
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
            <Col  key={product._id} sm={12} md={6} lg={4} xl={3}>
                <ProductComponent product={product} />
            </Col>
        ))}
        </Row>        
    </>
  )
}

export default HomeScreen