import React, {useEffect, useState} from 'react'
import { Row, Col } from 'react-bootstrap';
import ProductComponent from '../component/ProductComponent'
import axios from 'axios';

//GET from FRONTEND
import products from '../products';


const HomeScreen = () => {
  //GET from BACKEND
  // const [products, setProducts] = useState([]); /*empty array*/
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get("/api/products");

  //     setProducts(data);
  //   };
  //   fetchProducts();
  // }, []);

  // TEST - get API calls
  // const [APIData, setAPIData] = useState([])
  // useEffect(() => {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`)
  //       .then((response) => {
  //           setAPIData(response.data);
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
        {/* // TEST - show API calls */}
        {/* <Row>
        <hr />
        {APIData.map((item) => (
          <Col>
            <h1>{item.name}</h1>
            <p>{item.email}</p>
          </Col>
        ))}
        </Row>         */}
    </>
  )
}

export default HomeScreen