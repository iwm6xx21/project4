const mongoose = require('../db/connections')

const imageSchema = new mongoose.Schema({
    img: {type: String},
    brightness: {type: Number, default: 100},
    brush: {type: Number, default: 0},
    greyscale: {type: Number, default: 0},
    blur: {type: Number, default: 0},
    saturation: {type: Number, default: 100}
})

const Image = mongoose.model('Image', imageSchema)

module.exports = Image;