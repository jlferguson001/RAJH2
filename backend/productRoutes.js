const express = require('express')
const { ObjectId } = require('mongodb')
const { connectToDb, getDb} = require('./config/db')

 

//init  & middleware
const productRoutes = express()
productRoutes.use(express.json())

//db connection
let db

connectToDb((err) => {
    if (!err) {}
    productRoutes.listen(5005, () => {
        console.log('app listening on port 5005')
    })
    db = getDb()
})


//routes

productRoutes.get('/products', (req, res) => {
    //current page
    // const page = req.query.p || 0
    // const productsPerPage = 3

    let products = []

    db.collection('products')
    .find()
    .sort({category: 1})
    // .limit(productsPerPage)
    // .skip(page * productsPerPage)
    .forEach(product =>  products.push(product))
    .then(() => {
        res.status(200).json(products)
    })
    .catch(() =>  {
        res.status(500).json({error: 'Could not fetch the documents'} )
    })
    
})

productRoutes.get('/products/Mens', (req, res) => {
  let products = []

  db.collection('products')
    .find({category: "Mens"})
    .forEach((product) => products.push(product))
    .then(() => {
      res.status(200).json(products)
    })
    .catch(() => {
      res.status(500).json({ error: 'Could not fetch the documents' })
    })
})

productRoutes.get('/products/Womens', (req, res) => {
  let products = []

  db.collection('products')
    .find({ category: 'Womens' })
    .forEach((product) => products.push(product))
    .then(() => {
      res.status(200).json(products)
    })
    .catch(() => {
      res.status(500).json({ error: 'Could not fetch the documents' })
    })
})

productRoutes.get('/products/Childrens', (req, res) => {
  let products = []

  db.collection('products')
    .find({ category: 'Childrens' })
    .forEach((product) => products.push(product))
    .then(() => {
      res.status(200).json(products)
    })
    .catch(() => {
      res.status(500).json({ error: 'Could not fetch the documents' })
    })
})

productRoutes.get('/products/:id', (req, res) => {

    if(ObjectId.isValid(req.params.id)) {
        
        db.collection('products').findOne({ _id: ObjectId(req.params.id)})
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => {
            res.status(500).json({error: 'Could not fetch the document'})
        })
    }
    
})

productRoutes.post('/products', (req,res) => {
    const product = req.body

    db.collection('products')
    .insertOne(product)
    .then(result => {
        res.status(201).json(result)
    })
    .catch(err => {
        res.status(500).json({err: ''})
    })

})

productRoutes.delete('/products/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
      db.collection('products')
        .deleteOne({ _id: ObjectId(req.params.id) })
        .then(result => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json({error: 'Could not delete the document'})
        })
    }else{
          res.status(500).json({ error: 'Not a valid id' })
        }
    })

productRoutes.patch('/products/:id', (req, res) => {
    const updates = req.body

     if (ObjectId.isValid(req.params.id)) {
       db.collection('products')
         .updateOne({ _id: ObjectId(req.params.id)}, {$set: updates})
         .then((result) => {
           res.status(200).json(result)
         })
         .catch((err) => {
           res.status(500).json({ error: 'Could not update the document' })
         })
     } else {
       res.status(500).json({ error: 'Not a valid id' })
     }
})

module.exports = productRoutes;