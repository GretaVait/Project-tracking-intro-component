const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const lineFirst = document.querySelector('#first');
const lineThird = document.querySelector('#third');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    hamburger.classList.toggle('hamburger-clicked');
    lineThird.classList.toggle('line-clicked');
    lineFirst.classList.toggle('close');
});