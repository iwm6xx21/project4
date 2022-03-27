const { request } = require('express')
const express = require('express')
const { base } = require('../models/image')
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

// show route
router.get('/:id', async (req, res) => {
    const images = await Image.findById(req.params.id)
        res.render('show', {images})
})

// post route for uploading image to the editor
router.post('/editor', upload.array('img'), async (req, res) => {
    const uploads = new Image(req.body)
    uploads.img = req.files.map(f => ({url: f.path, filename: f.filename}))
    await uploads.save()
    res.redirect(`/${uploads.id}`);
})


router.get("/editor", (req, res) => {
    Image.find({},(err,images) => {
        res.render('editor', {images})
    });
})

// Update effect route

router.put('/:id',  async (req, res) => {
    // const images = await Image.findByIdAndUpdate(req.params.id, req.body, {new: true});
//    Image.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updateImage) => {
//         if(error){
//             res.send({error: error.message})
//         } else {
//             updateImage.save()
//         }
//     })
//     const images = await Image.findById(req.params.id)
//     res.redirect(`/${images.id}`)
    // console.log(req.body)
    Image.findByIdAndUpdate(req.params.id, req.body, {new: true}, (img) => {
        return Image.find({}).then(imgs => {
            return res.json(imgs)
        })
    })

})



module.exports = router