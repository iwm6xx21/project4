const express = require('express')
const router = express.Router()
const Image = require('../models/image')
const multer = require('multer')
const {storage} = require('../cloudinary')
const upload = multer({storage})



router.get('/', (req, res) => {
    res.render('home')
})

router.get('/upload',(req, res) => {
    res.render('upload')
})


// post route for uploading image to the editor
router.post('/', upload.array('img'), async (req, res) => {
    const uploads = new Image(req.body)
    uploads.img = req.files.map(f => ({url: f.path, filename: f.filename}))
    await uploads.save()
    res.redirect(`/${uploads.id}`);
})


// show route
router.get('/:id', async (req, res) => {
    const images = await Image.findById(req.params.id)
        res.render('show', {images})
})


// edit image route
router.get('/:id/edit', async (req, res) => {
    Image.findById(req.params.id, (err, image) => {
        res.render('edit', {image})
    })
})


// edit image in database then redirect to the show page. 

router.put('/:id/edit', upload.array('img'), async (req, res) => {
    const redirect = Image.findById(req.params.id)
    const image = await Image.findByIdAndUpdate(req.params.id, req.body, {new: true});
    const imgs = req.files.map(f => ({url: f.path, filename: f.filename}));
    image.img.shift(...imgs)
    image.img.push(...imgs)
    await image.save()

    res.redirect(`/${image.id}`)
})

// Update effects in database route. This is Triggered by click events in the effects.js file

router.put('/:id', async (req, res) => {
    Image.findByIdAndUpdate(req.params.id, req.body, {new: true}, (img) => {
        return Image.find({}).then(imgs => {
            return res.json(imgs)
        })
    })

})





module.exports = router