import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import{LinkContainer} from 'react-router-bootstrap'
import { Row, Col, Table, Button } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
 
 


const ProductListScreen = () => {


  return (
    <>
     <Table className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>BRAND</th>
              <th>CATEGORY</th>
              <th>COLOR</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>{product.color}</td>
                <td>${product.price}</td>

                <td>
                  {/* <LinkContainer to={`/admin/product/${product._id}/edit`}> */}
                  <Button variant='light' className='btn-sm'>
                    <i className='fas fa-edit'></i>
                  </Button>
                  {/* </LinkContainer> */}
                  <Button
                    variant='danger'
                    className='btn-sm'
                   
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
     
    </>
  )
}

 
export default ProductListScreen
