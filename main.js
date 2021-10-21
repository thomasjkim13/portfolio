'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if(window.scrollY > navbarHeight) {
      navbar.classList.add('navbar-dark');
  } else {
    navbar.classList.remove('navbar-dark');
  }
})


// Handle scrolling when tappingo the navbar menu
const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (e) => {
  const target = e.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  
  // Scroll the element to exact position
  const scrollTo = document.querySelector(link);
  // To have no white spaces in between 
  const top = scrollTo.offsetTop - navbarHeight < 0 ? 0 : scrollTo.offsetTop - navbarHeight + 16;  
  const left = scrollTo.offsetLeft;
  window.scrollTo({
    top:top,
    left:0,
    behavior: 'smooth'
  });
  navbarMenu.classList.remove('open');
})

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar_toggle-btn');
const toggleMenu = document.querySelector('.navbar_menu')
navbarToggleBtn.addEventListener('click', () => {
  toggleMenu.classList.toggle('open');
})

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home_contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact')
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home_container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
})

// Show 'arrow up' button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight /2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
})

// Handle click on the 'arrow up' button
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home')
})

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}