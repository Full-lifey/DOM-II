// Your code goes here

// Selectors
const logoHeading = document.querySelector('.logo-heading')
const navLinks = document.querySelectorAll('.nav-link')
const container = document.querySelector('.home')
const intro = document.querySelector('.intro')
const introP = document.querySelector('.intro p')
const images = document.querySelectorAll('.img-content')
const funImg = document.querySelector('.img-fluid')
const buttons = document.querySelectorAll('.btn')
const form = document.querySelector('.form')
const formInput = document.querySelectorAll('input')
const destImg = document.querySelector('.img-destination')
const divDestination = document.querySelectorAll('.destination')

console.log(divDestination)
// Nav mouseover
navLinks.forEach(link => link.addEventListener('mouseover', event => {
    // console.log(event.target)
    event.target.style.background = '#17A2B8';
    event.target.style.color = 'white';
    event.target.style.borderRadius = '5px';
}))
// Nav mouseleave
navLinks.forEach(link => link.addEventListener('mouseleave', event => {
    // console.log('mouseleave')
    event.target.style.background = ''
    event.target.style.color = '';
    event.target.style.borderRadius = '';
}))

images.forEach(image => image.addEventListener('wheel', event => event.target.style.border = '1px solid red'))
// introP.addEventListener('select', event => {
//     console.log(event.target)
//     alert('You cannot select this content')
// })
images.forEach(image => image.addEventListener('drag', event => event.target.src = 'https://i.ytimg.com/vi/MXIhkn5QRNE/hqdefault.jpg'))
destImg.addEventListener('dblclick', image => event.target.style.borderRadius = '100px')
buttons.forEach(button => button.addEventListener('click', event => {
    form.classList.toggle('hidden')
    event.stopImmediatePropagation()
}))
divDestination.forEach(button => button.addEventListener('click', event => event.target.style.background = 'purple'))

formInput.forEach(input => input.addEventListener('focus', event => event.target.style.background = 'pink'))
formInput.forEach(input => input.addEventListener('blur', event => event.target.style.background = ''))
formInput.forEach(input => input.addEventListener('keydown', event => event.target.style.color = 'green'))
formInput.forEach(input => input.addEventListener('select', event => alert('You cannot select this content')))
window.addEventListener('scroll', event => introP.style.background = 'green')
window.addEventListener('load', event => alert('The page has finished loading'))
window.addEventListener('resize', event => intro.style.background = 'lightgrey')

