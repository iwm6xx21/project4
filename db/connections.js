const mongoose = require('mongoose')

// mongoURI = 'mongodb://localhost:27017/photodev'

mongoURI = process.env.NODE_ENV === "production" ? process.env.DB_URL : process.env.MONGOD_URI

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(instance => {
    console.log(`Connected to the db: ${instance.connections[0].name}`)
})
.catch(err => console.log(`Connection failed, ${err}`))

module.exports = mongoose