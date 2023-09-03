const mobileOpenIcon = document.querySelector(".menu__icon");
const mobileCloseIcon = document.querySelector(".close__menu");
const navList = document.querySelector(".main-list");

mobileOpenIcon.addEventListener("click", () => {
  navList.classList.toggle("show");
});
mobileCloseIcon.addEventListener("click", () => {
  navList.classList.toggle("show");
});
const navLinks = document.querySelectorAll(".main-list a");

navLinks.forEach((link) => {
  link.onclick = () => {
    navList.classList.remove("show");
  };
});
