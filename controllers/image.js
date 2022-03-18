const express = require('express')
const router = express.Router()
const Image = require('../models/image')


router.get('/', (req, res) => {
    res.render('home')
})

router.get('/upload',(req, res) => {
    res.render('upload')
})


// post route for uploading image to the editor
router.post('/editor', async (req, res) => {
    const uploads = new Image(req.body)
    await uploads.save()
    console.log(uploads)
    res.redirect('/editor');
})

// router.get('/editor', (req, res) => {
//     const uploads = Image.find({})
//     console.log(uploads)
//         res.render('editor', {uploads})
// })

router.get("/editor", (req, res) => {
    Image.find({},(err,images) => {
        res.render('editor', {images})
    });
})


module.exports = router