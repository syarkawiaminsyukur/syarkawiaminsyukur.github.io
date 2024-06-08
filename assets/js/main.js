/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add("blur-header") : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

const contactButton = document.querySelector(".contact__button");

const sendEmail = (e) => {
  e.preventDefault();

  Swal.fire({
    title: "Thank you!",
    text: "for now, I haven't activated the contact me feature.",
    icon: "warning",
    confirmButtonText: "Thank's!",
  });
  contactForm.reset();
};
contactButton.addEventListener("click", sendEmail);

/*=============== SHOW SCROLL UP ===============*/
const scrolUp = document.getElementById("scroll-up");
window.addEventListener("scroll", () => {
  this.scrollY >= 350 ? scrolUp.classList.add("show-scroll") : scrolUp.classList.remove("show-scroll");
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});
sr.reveal(`.home__data, .home__social`);
sr.reveal(`.home__image`, { origin: "bottom" });
sr.reveal(`.about__data`, { origin: "left" });
sr.reveal(`.about__image`, { origin: "right" });
sr.reveal(`.skill__data`, { origin: "top" });
