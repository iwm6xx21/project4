const mongoose = require('../db/connections')

const imageSchema = new mongoose.Schema({
    img: {type: String},
})

const Image = mongoose.model('Image', imageSchema)

module.exports = Image;