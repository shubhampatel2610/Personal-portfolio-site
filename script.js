// toggle menu icon in navbar
let menuIcon = document.querySelectorAll("#menu-icon");
menuIcon.forEach((i) => {
  i.addEventListener("click", (e) => {
    e.target.classList.toggle("fa-x");
    navbar.classList.toggle("active");
  });
});

let navbar = document.querySelector(".navbar");

// scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // sticky header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
};

// // when click on navbar links, remove toggle icon and navbar
// menuIcon.forEach((i) => {
//   i.addEventListener("click", (e) => {
//     e.target.classList.remove("fa-x");
//     navbar.classList.remove("active");
//   });
// });
