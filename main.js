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

  // console.log(e.target.dataset.link);
  // Scroll the element
  const scrollTo = document.querySelector(link);
  const top = scrollTo.offsetTop - navbarHeight < 0 ? 0 : scrollTo.offsetTop - navbarHeight + 16;  
  const left = scrollTo.offsetLeft;
  window.scrollTo({
    top:top,
    left:0,
    behavior: 'smooth'
  });
  // scrollTo.scrollIntoView({ behavior: 'smooth' });
})
