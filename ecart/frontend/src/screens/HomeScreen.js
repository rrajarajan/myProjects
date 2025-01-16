import React, {useEffect, useState} from 'react'
import { Row, Col } from 'react-bootstrap';
import ProductComponent from '../component/ProductComponent'
import axios from 'axios';

//GET from FRONTEND
import products from '../products';


const HomeScreen = () => {
  const [product, setProduct] = useState([]);
  const [APIData, setAPIData] = useState([])
  
  

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {
            setAPIData(response.data);
        })
  }, [])

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
        <Row>
        {APIData.map((item) => (
          <div>
            <h1>{item.name}</h1>
            <p>{item.email}</p>
          </div>
        ))}
        </Row>        
    </>
  )
}

export default HomeScreen