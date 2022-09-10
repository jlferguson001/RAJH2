const { MongoClient} = require('mongodb')

let dbConnection

module.exports = {
    //cb = callback
    connectToDb: (cb) => {
        MongoClient.connect('mongodb://localhost:27017/RAJH2')
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