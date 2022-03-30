// effect list
const optionOne = document.querySelector('.bright')
const optionTwo = document.querySelector('.brushOption')
const optionThree = document.querySelector('.greyscaleOption')
const optionFour = document.querySelector('.colorOption')
const optionFive = document.querySelector('.saturationOption')
const optionDownload = document.querySelector('.download')
const colorifyOption = document.querySelector('.colorifyOption')
let image = document.querySelector('.image')
const imageSource = document.querySelector('.image').src
const effectCount = document.querySelector('.effectCount')
const imageDiv = document.querySelector('.imageDiv')
const grabOverlay = document.querySelector('.image__overlay')
const resetColor = document.querySelector('.resetColor')





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
const countColorify = document.getElementById('colorifyCounter')
const imageID = document.getElementById('imageID')


// grab database effect from show EJS using target
let brightTarget = countBrightness.getAttribute('target')
let brushTarget = countBrush.getAttribute('target')
let greyscaleTarget = countGreyscale.getAttribute('target')
let blurTarget = countBlur.getAttribute('target')
let saturationTarget = countSaturation.getAttribute('target')
let imageIDTarget = imageID.getAttribute('target')
let colorifyTarget = countColorify.getAttribute('target')
let currentlyAdjusting = imageIDTarget

// Pin filter effects
image.style.filter = `grayscale(${greyscaleTarget}%) brightness(${brightTarget}%) hue-rotate(${brushTarget}deg) saturate(${saturationTarget}%) blur(${blurTarget}px)`


// Pin colorify effect
grabOverlay.style.opacity = "0.40" 
grabOverlay.style.backgroundColor = `rgba(${colorifyTarget})`

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


// effect adjustments
let greyCounts = greyscaleTarget
let brightnessCounts = brightTarget
let brushCounts = brushTarget
let saturationCounts = saturationTarget
let blurCounts = blurTarget

// add colorify effect on button click
colorifyOption.addEventListener('click', () => {
    resetColor.style.visibility = "visible"
    function randomColor(){
        return Math.floor(Math.random() * 255 );
    } 
    let colorOne = randomColor()
    let colorTwo = randomColor()
    let colorThree = randomColor() 
    // axios here
    axios.put(`http://localhost:2000/${currentlyAdjusting}`,{
        color1: colorOne,
        color2: colorTwo,
        color3: colorThree
    }).then ( (res) => {
        grabOverlay.style.opacity = "0.40"
        grabOverlay.style.backgroundColor = `rgba(${colorOne}, ${colorTwo}, ${colorThree})`
    }) 
        

        
})

// remove colorify
resetColor.addEventListener('click', () => {
    let colorOne = 0
    let colorTwo = 0
    let colorThree = 0
    // axios here
    axios.put(`http://localhost:2000/${currentlyAdjusting}`,{
        color1: colorOne,
        color2: colorTwo,
        color3: colorThree
    }).then ( (res) => {
        // need to fix this on remove to stay at 0 on refresh
        grabOverlay.style.opacity = "0"
        grabOverlay.style.backgroundColor = `rgba(${colorOne}, ${colorTwo}, ${colorThree})`
    }) 
        
        
})




// click event for filter effects
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


// download image 
optionDownload.addEventListener('click', () => {
        axios({
            url: imageSource,
            method: 'GET',
            responseType: 'blob',
        }).then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", "image.jpg");
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                })
})