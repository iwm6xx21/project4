// effect list
const optionOne = document.querySelector('.bright')
const optionTwo = document.querySelector('.brushOption')
const optionThree = document.querySelector('.greyscaleOption')
const optionFour = document.querySelector('.colorOption')
const optionFive = document.querySelector('.saturationOption')
const optionDownload = document.querySelector('.download')
let image = document.querySelector('.image')






// effect div
const brightness = document.querySelector('.brightness')
const brush = document.querySelector('.brush')
const greyscale = document.querySelector('.greyscale')
const color = document.querySelector('.color')
const saturation = document.querySelector('.saturation')


// Unhide effect options on button click

optionOne.addEventListener('click', () => {
    brightness.style.visibility = "visible"
})

optionTwo.addEventListener('click', () => {
    brush.style.visibility = "visible"
})
optionThree.addEventListener('click', () => {
    greyscale.style.visibility = "visible"
})
optionFour.addEventListener('click', () => {
    color.style.visibility = "visible"
})
optionFive.addEventListener('click', () => {
    saturation.style.visibility = "visible"
})

optionDownload.addEventListener('click', () => {
    console.log('clicked')
})



// Add filters

let grayscale = 10
let add = 10
let remove = 10
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('filter-btn')){
        if(e.target.classList.contains('greyscale-add')){

            grayscale <= 99 ? image.style.filter = `grayscale(${grayscale++}%)` : 100
            console.log(grayscale)
        } else if(e.target.classList.contains('greyscale-remove')){
            grayscale > 0 ? image.style.filter = `grayscale(${grayscale--}%)` : 0
            console.log(grayscale)
        }

    }
});


