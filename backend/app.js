const express = require('express')
const { ObjectId } = require('mongodb')
const { connectToDb, getDb} = require('./db')

//init app & middleware
const app = express()
app.use(express.json())

//db connection
let db

connectToDb((err) => {
    if (!err) {}
    app.listen(3005, () => {
        console.log('app listening on port 3005')
    })
    db = getDb()
})


//routes

app.get('/products', (req, res) => {
    let products = []

    db.collection('products')
    .find()
    .sort({category: 1})
    .forEach(product =>  products.push(product))
    .then(() => {
        res.status(200).json(products)
    })
    .catch(() =>  {
        res.status(500).json({error: 'Could not fetch the documents'} )
    })
    
})

app.get('/products/Mens', (req, res) => {
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

app.get('/products/Womens', (req, res) => {
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

app.get('/products/Childrens', (req, res) => {
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

app.get('/products/:id', (req, res) => {

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

app.post('/products', (req,res) => {
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

app.delete('/products/:id', (req, res) => {

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

app.patch('/products/:id', (req, res) => {
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