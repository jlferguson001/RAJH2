const { MongoClient} = require('mongodb')

let dbConnection
let uri ='mongodb+srv://RAJH:rajh@rajh-frames-2.uzllu9g.mongodb.net/RAJH2?retryWrites=true&w=majority'

module.exports = {
    //cb = callback
    connectToDb: (cb) => {
        MongoClient.connect(uri)
        .then((client) => {
            dbConnection = client.db()
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getDb: () => dbConnection
}