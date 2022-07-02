const toggleNavBtn = document.querySelector(".nav-toggle-btn");
const menu = document.querySelector(".nav-list");

toggleNavBtn.addEventListener("click", toggleNav);

let isOpen = false;
function toggleNav() {
  menu.classList.toggle("show");
  isOpen = !isOpen;
  console.log(isOpen);
  return (toggleNavBtn.src = isOpen
    ? "./images/icon-close.svg"
    : "./images/icon-hamburger.svg");
}
