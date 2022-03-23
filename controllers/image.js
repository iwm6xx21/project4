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
    res.redirect(`/${uploads.id}`);
})


router.get("/editor", (req, res) => {
    Image.find({},(err,images) => {
        res.render('editor', {images})
    });
})

// show route
router.get('/:id', async (req, res) => {
    const images = await Image.findById(req.params.id)
        res.render('show', {images})
})



module.exports = router