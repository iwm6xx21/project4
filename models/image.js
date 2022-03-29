const mongoose = require('../db/connections')

const imageSchema = new mongoose.Schema({
    // img: {type: String},
    img: [
        {
            url: String,
            filename: String
        }
    ],
    brightness: {type: Number, default: 100},
    brush: {type: Number, default: 0},
    greyscale: {type: Number, default: 0},
    blur: {type: Number, default: 0},
    saturation: {type: Number, default: 100},
    color1: {type: Number, default: 0},
    color2: {type: Number, default: 0},
    color3: {type: Number, default: 0},

})

const Image = mongoose.model('Image', imageSchema)

module.exports = Image;