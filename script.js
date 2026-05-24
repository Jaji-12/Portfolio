// Loader

window.addEventListener("load", () => {

  const loader =
  document.getElementById("loader");

  loader.style.opacity = "0";

  setTimeout(() => {

    loader.style.display = "none";

  },500);

});

// Theme Toggle

const themeToggle =
document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")){

    themeToggle.innerHTML =
    '<i class="fas fa-sun"></i>';

  }else{

    themeToggle.innerHTML =
    '<i class="fas fa-moon"></i>';

  }

});

// Reveal Animation

function revealSections(){

  const reveals =
  document.querySelectorAll(".reveal");

  reveals.forEach((section) => {

    const windowHeight =
    window.innerHeight;

    const revealTop =
    section.getBoundingClientRect().top;

    const revealPoint = 120;

    if(revealTop < windowHeight - revealPoint){

      section.classList.add("active");

    }

  });

}

window.addEventListener(
  "scroll",
  revealSections
);

revealSections();

// Scroll Top Button

const scrollBtn =
document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){

    scrollBtn.style.display = "flex";

  }else{

    scrollBtn.style.display = "none";

  }

});

scrollBtn.addEventListener("click", () => {

  window.scrollTo({

    top:0,
    behavior:"smooth"

  });

});

// Contact Form

const contactForm =
document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Message Sent Successfully!");

  contactForm.reset();

});