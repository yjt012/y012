setTimeout(function() {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    alert("This website is not optimized for mobile devices, please access it through computer or PC.");
  }
}, 5000); // 15000 milliseconds = 15 seconds

// Get the initial viewport width and height
var initialWidth = window.visualViewport.width;
var initialHeight = window.visualViewport.height;

// Add an event listener to detect changes in the viewport size
window.visualViewport.addEventListener('resize', function() {
  // Get the new viewport width and height
  var newWidth = window.visualViewport.width;
  var newHeight = window.visualViewport.height;

  // Calculate the difference between the initial and new viewport dimensions
  var widthDiff = Math.abs(newWidth - initialWidth);
  var heightDiff = Math.abs(newHeight - initialHeight);

  // Set a threshold for the difference
  var threshold = 50;

  // If the difference exceeds the threshold, display a warning message
  if (widthDiff > threshold || heightDiff > threshold) {
    alert("Please note that zooming may affect the appearance of this website.");
  }
});



gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('.yash', { opacity: 0, scale: 0.5}, { opacity: 1, scale: 1, duration: 1, ease: "power4.out"});


const navLinks = document.querySelectorAll('.nav a img');

gsap.set(navLinks, { scale: 0, rotation: -180, opacity: 0 });

// Create a ScrollTrigger to trigger the animation when the element enters the viewport
ScrollTrigger.create({
  trigger: '.nav',
  start: 'top center', // start the animation when the top of the element reaches the center of the viewport
  onEnter: () => {gsap.to(navLinks, { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "back.out(1.7)", stagger: 0.2});}});



// Define the animation
gsap.from('.insta_pic', {opacity: 0, x: -50, duration: 3, ease: 'power2.out', scrollTrigger: { trigger: '.insta_pic', start: 'top 50%', end: 'center center', scrub: true}});

gsap.from('.aboutme', {opacity: 0, x: 50, duration: 3, ease: 'power2.out', scrollTrigger: { trigger: '.insta_pic', start: 'top 50%', end: 'center center', scrub: true}});

window.addEventListener("load", function(){
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});

// Get all the image tags and child divs
const project1Image = document.querySelector('.project_1 img');
const project1About = document.querySelector('.project_1_about');
const project2Image = document.querySelector('.project_2 img');
const project2About = document.querySelector('.project_2_about');
const project3Image = document.querySelector('.project_3 img');
const project3About = document.querySelector('.project_3_about');

// Add animations to the image tags and child divs
gsap.from(project1Image, {
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: project1Image,
    start: "top 90%",
    scrub: true,
  },
});

gsap.from(project1About, {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: project1About,
    start: "top 95%",
    scrub: true,
  },
});

gsap.from(project2Image, {
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: project2Image,
    start: "top 90%",
    scrub: true,
  },
});

gsap.from(project2About, {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: project2About,
    start: "top 90%",
    scrub: true,
  },
});

gsap.from(project3Image, {
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: project3Image,
    start: "top 90%",
    scrub: true,
  },
});

gsap.from(project3About, {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: project3About,
    start: "top 90%",
    scrub: true,
  },
});


const container3 = document.querySelector('.Container_3');
const container3Heading = container3.querySelector('h1');

gsap.to(container3Heading, {
  duration: 2,
  ease: 'power2.inOut',
  stagger: 0.1,
  onComplete: function() {
    gsap.from(container3Heading, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power2.out',
      repeat: -1,
      yoyo: true
    });
  }
});