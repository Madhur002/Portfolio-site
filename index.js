// =======_toggle icon navbar =====
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick= () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections =document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
                 //  sticky header
            let header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 100);


            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
};

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


const typed = new Typed('.multiple-text', {
    strings: ['Full stack Developer', 'Artist', 'Graphic Desginer'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
    });



    const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let counter = 0;
const slideWidth = carouselImages[0].clientWidth;

// Set initial position of the carousel slide
carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
carouselImages[counter].parentElement.classList.add("active");

// Add event listener to the next button
nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselImages[counter].parentElement.classList.remove("active");
  counter++;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
  carouselImages[counter].parentElement.classList.add("active");
});

// Add event listener to the previous button
prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselImages[counter].parentElement.classList.remove("active");
  counter--;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
  carouselImages[counter].parentElement.classList.add("active");
});

// Add event listener to the carousel slide for when the transition ends
carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].parentElement.classList.contains("active")) {
    carouselSlide.style.transition = "none";
  }
});
