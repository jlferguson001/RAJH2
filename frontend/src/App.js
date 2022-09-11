import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductListScreen from './screens/ProductListScreen'
 




const App = () => {
 
  return (
    <Router>
      <Header />
      <main className='py-4'>
        <Container>
          <h1> Welcome to RAJH Frames</h1>
          {/* <HomeScreen /> */}
          <Routes>
            <Route exact path='/' element={<HomeScreen />} />
            <Route exact path='/admin/productlist' element={<ProductListScreen />} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </Router>

    // <Router>
    //   <Header />
    //   <main className='py-4'>
    //     <Container>
    //       <h1> Welcome to RAJH Frames</h1>
    //       <Routes>
    //         <Route path='/' component={HomeScreen} exact />
    //         {/* <Route path='/category/Mens' component={MensScreen} exact />
    //         <Route path='/category/Womens' component={WomensScreen} exact />
    //         <Route path='/category/Childrens' component={ChildrensScreen} exact />
    //         <Route path='/admin/productlist' component={ProductListScreen} exact />
    //         <Route path='/product/:id' component={ProductScreen} /> */}
    //         {/* <Route path='/cart/:id?' component={CartScreen} />  */}
    //       </Routes>
    //     </Container>
    //   </main>
    //   <Footer />
    // </Router>
  )
}

export default App