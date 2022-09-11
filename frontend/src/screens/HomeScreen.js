 import React from 'react'
 import axios from 'axios'
 import {Row, Col} from 'react-bootstrap'
 import Developer from '../components/Developer'
 import developers from '../developers'
 import Product from '../components/Product'


 
 const HomeScreen = () => {
   return (
     <>
       {/* <Row>
         {' '}
         {products.map((product) => (
           <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
             <Product product={product} />
           </Col>
         ))}
       </Row> */}
       <h1>Your Developers</h1>
       <Row>
         {developers.map((developer) => (
           // number of columns per screen
           <Col key={developer._id} sm={12} md={6} lg={4} xl={3}>
             <Developer developer={developer} />
           </Col>
         ))}
       </Row>
     </>
   )
 }
 
 export default HomeScreen