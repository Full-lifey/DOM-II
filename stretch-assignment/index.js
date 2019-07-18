// Selectors
const blocks = document.querySelector('.blocks');
const theBlocks = document.querySelectorAll('.block');
const redBlock = document.querySelector('.block--red')
const blueBlock = document.querySelector('.block--blue')
const greenBlock = document.querySelector('.block--green')
const pinkBlock = document.querySelector('.block--pink')
const grayBlock = document.querySelector('.block--gray')

console.log(theBlocks)
// Click to Top
let topCounter = 0
theBlocks.forEach(block => block.addEventListener('click', event => {
    topCounter--
    // console.log(event.target);
    event.target.style.order = topCounter.toString()
}))

// Blast Off Sideways
let mouseDown 
theBlocks.forEach(block => block.addEventListener('mousedown', event => {
    mouseDown = true
    console.log('mousedown', event.target)
    // while (mouseDown === true){
    //     let sidewaysCounter = counter()
    //     marginLeftVar = sidewaysCounter()//setInterval(sidewaysCounter, 10)
    //     console.log(marginLeftVar)
    //     event.target.style.marginLeft = marginLeftVar.toString()
    // }

    // let sidewaysCounter = counter()
    // marginLeftVar = setInterval(sidewaysCounter, 10)
    // console.log(marginLeftVar)
    // event.target.style.marginLeft = marginLeftVar.toString()
}))
theBlocks.forEach(block => block.addEventListener('mouseup', event => {
    mouseDown = false
    console.log(mouseDown)
    clearInterval(marginLeftVar)
}))

// Counter function
function counter () {
    let count = 0;
    return function() {
        count = count + 1;
        return count
    }
}

console.log()

