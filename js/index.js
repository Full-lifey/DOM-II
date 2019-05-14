// Your code goes here

// Selectors
const logoHeading = document.querySelector('.logo-heading')
const navLinks = document.querySelectorAll('.nav-link')
const container = document.querySelector('.home')
const intro = document.querySelector('.intro')
const images = document.querySelectorAll('.img-content')
const funImg = document.querySelector('.img-fluid')
const buttons = document.querySelectorAll('.btn')
const form = document.querySelector('.form')
const formInput = document.querySelectorAll('input')

// console.log(images)
// Nav mouseover
navLinks.forEach(link => link.addEventListener('mouseover', event => {
    // console.log(event.target)
    event.target.style.background = '#17A2B8';
    event.target.style.color = 'white';
    event.target.style.borderRadius = '5px';
}))

navLinks.forEach(link => link.addEventListener('mouseleave', event => {
    // console.log('mouseleave')
    event.target.style.background = ''
    event.target.style.color = '';
    event.target.style.borderRadius = '';
}))

container.addEventListener('keydown', event => {
    console.log(event.target, 'keydown')
    event.target.style.border = '1px solid red'
})

images.forEach(image => image.addEventListener('wheel', event => event.target.style.border = '1px solid red'))

images.forEach(image => image.addEventListener('dragover', event => event.preventDefault()))
funImg.addEventListener('drop', image => event.preventDefault())

buttons.forEach(button => button.addEventListener('click', event => form.classList.toggle('hidden')))
formInput.forEach(input => input.addEventListener('focus', event => event.target.style.background = 'pink'))
formInput.forEach(input => input.addEventListener('blur', event => event.target.style.background = ''))



