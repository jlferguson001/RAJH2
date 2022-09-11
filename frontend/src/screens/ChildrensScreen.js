import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
 
import axios from 'axios'
 


const ChildrensScreen = () => {
 const dispatch= useDispatch ()
     
 const productList = useSelector(state => state.productList)
 const{loading, error, products} = productList

 useEffect(() => {
  fetchData()
  //   dispatch(listProductCategory)
}, [])
// console.log(category)

const fetchData = async () => {
  const data = await axios.get(`/api/products/category/Childrens`).then(res => {
    console.log(res.data);
  }
  )
  console.log(data)
}

    

  return (
    <>
      <h1>Children's Frames</h1>
      {/* {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {' '}
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>*/}
      {/* )} */}
    </>
  )
}

export default ChildrensScreen