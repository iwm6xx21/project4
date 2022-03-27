// const res = require("express/lib/response")


// effect list
const optionOne = document.querySelector('.bright')
const optionTwo = document.querySelector('.brushOption')
const optionThree = document.querySelector('.greyscaleOption')
const optionFour = document.querySelector('.colorOption')
const optionFive = document.querySelector('.saturationOption')
const optionDownload = document.querySelector('.download')
let image = document.querySelector('.image')
const effectCount = document.querySelector('.effectCount')



// effect div
const brightness = document.querySelector('.brightness')
const brush = document.querySelector('.brush')
const greyscale = document.querySelector('.greyscale')
const blur = document.querySelector('.color')
const saturation = document.querySelector('.saturation')

// effect counter elements
const countBrightness = document.getElementById('brightnessCounter')
const countBrush = document.getElementById('brushCounter')
const countGreyscale = document.getElementById('greyscaleCounter')
const countBlur = document.getElementById('blurCounter')
const countSaturation = document.getElementById('saturationCounter')
const imageID = document.getElementById('imageID')

// grab database effect from show EJS using target
let brightTarget = countBrightness.getAttribute('target')
let brushTarget = countBrush.getAttribute('target')
let greyscaleTarget = countGreyscale.getAttribute('target')
let blurTarget = countBlur.getAttribute('target')
let saturationTarget = countSaturation.getAttribute('target')
let imageIDTarget = imageID.getAttribute('target')


// Unhide effect options on button click
optionOne.addEventListener('click', () => {
    brightness.style.visibility = "visible"
    countBrightness.style.visibility ='visible'
})

optionTwo.addEventListener('click', () => {
    brush.style.visibility = "visible"
    countBrush.style.visibility ='visible'
})
optionThree.addEventListener('click', () => {
    greyscale.style.visibility = "visible"
    countGreyscale.style.visibility ='visible'
})
optionFour.addEventListener('click', () => {
    blur.style.visibility = "visible"
    countBlur.style.visibility ='visible'
})
optionFive.addEventListener('click', () => {
    saturation.style.visibility = "visible"
    countSaturation.style.visibility ='visible'
})

optionDownload.addEventListener('click', () => {
    console.log('clicked')
})


// effect adjustments

let greyCounts = greyscaleTarget
let brightnessCounts = brightTarget
let brushCounts = brushTarget
let saturationCounts = saturationTarget
let blurCounts = blurTarget
let currentlyAdjusting = imageIDTarget


// click event for effects
document.addEventListener('click', (e) => {
    e.preventDefault();
            image.style.filter = `grayscale(${greyCounts}%) brightness(${brightnessCounts}%) hue-rotate(${brushCounts}deg) saturate(${saturationCounts}%) blur(${blurCounts}px)`
            if(e.target.classList.contains('brightness-add')){
                axios.put(`http://localhost:2000/${currentlyAdjusting}`,{
                    brightness: brightnessCounts <= 200 ? countBrightness.innerText = brightnessCounts++ : 200
                    
                })
                
            }

            if(e.target.classList.contains('brightness-remove')){
                
                axios.put(`http://localhost:2000/${currentlyAdjusting}`,{
                    brightness: brightnessCounts >= 0 ? countBrightness.innerText = brightnessCounts-- :  0
                    
                })
            }

            if(e.target.classList.contains('greyscale-add')){

                axios.put(`http://localhost:2000/${currentlyAdjusting}`,{
                    greyscale: greyCounts <= 100 ? countGreyscale.innerText = greyCounts++ : 100
                })
            }

            if(e.target.classList.contains('greyscale-remove')) {

                axios.put(`http://localhost:2000/${currentlyAdjusting}`,{
                    greyscale: greyCounts > 0 ? countGreyscale.innerText = greyCounts -=1 : 0
                })
            }

            if(e.target.classList.contains('brush-add')){
                axios.put(`http://localhost:2000/${currentlyAdjusting}`,{
                    brush: brushCounts <= 100 ? countBrush.innerText = brushCounts++ : 100
                })
            }

            if(e.target.classList.contains('brush-remove')) {
                axios.put(`http://localhost:2000/${currentlyAdjusting}`,{
                    brush: brushCounts >= 0 ? countBrush.innerText = brushCounts -=1 : 0
                })
            }

            if(e.target.classList.contains('saturation-add')){
                axios.put(`http://localhost:2000/${currentlyAdjusting}`,{
                    saturation: saturationCounts <= 200 ? countSaturation.innerText = saturationCounts++ : 200
                })
            }

            if(e.target.classList.contains('saturation-remove')){
                axios.put(`http://localhost:2000/${currentlyAdjusting}`,{
                    saturation: saturationCounts >= 0 ? countSaturation.innerText = saturationCounts-- :  0
                })

            }

            if(e.target.classList.contains('color-add')){
                axios.put(`http://localhost:2000/${currentlyAdjusting}`,{
                    blur: blurCounts <= 4 ? countBlur.innerText = blurCounts++ : 4
                })
            }

            if(e.target.classList.contains('color-remove')){

                axios.put(`http://localhost:2000/${currentlyAdjusting}`,{
                    blur: blurCounts > 0 ? countBlur.innerText = blurCounts -=1 : 0
                })
            }
});



