//validate search input

const form = document.querySelector(".hero__search-form");
const searchInput = document.querySelector(".hero__search-input");
const tooltip = document.querySelector(".hero__tooltip");
form.addEventListener("submit", checkSearch);

function checkSearch(e) {
  e.preventDefault();
  if (
    searchInput.value.length < 4 ||
    searchInput.value.length > 12 ||
    searchInput.value.match(/[!@#$%^&*()]/) !== null
  ) {
    tooltip.style.opacity = "1";
  }
}

searchInput.addEventListener("input", function () {
  if (tooltip.style.opacity === "1") {
    tooltip.style.opacity = "0";
  }
});

//animate flags
let flagsCircle = document.querySelector(".hero__animation-circle");
let flags = Array.from(document.getElementsByClassName("hero__animation-flag"));
const body = document.querySelector("body");
document.addEventListener("DOMContentLoaded", function () {
  flags.forEach(function (flag, index) {
    setTimeout(function () {
      timer(flag, index);
    }, 400 * ++index);
  });

  setTimeout(function () {
    infinite();
  }, 4000);
});

function infinite() {
  flagsCircle.classList.add("infinite");
}

function timer(flag, index) {
  flag.classList.remove("center-position");
  flag.classList.add(`flag-${index}`);
}

// toggle open menu
const burger = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__nav");
const navList = document.querySelector(".header__nav_list");
let isMenuOpen = false;
burger.addEventListener("click", toggleMenu);

const menuItems = Array.from(document.querySelectorAll(".header__nav_item"));
menuItems.forEach((item) => item.addEventListener("click", toggleMenu));
function toggleMenu() {
  burger.classList.toggle("is-active");
  burger.classList.toggle("burger-x");
  headerNav.classList.toggle("open");
  headerNav.style.height = isMenuOpen ? "0px" : navList.offsetHeight + "px";
  isMenuOpen = !isMenuOpen;
}


//ajax 
const underHeading = document.querySelector('.hero__underheading')
const requestURL = 'https://baconipsum.com/api/?type=lucky'
const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);
xhr.onreadystatechange = function() {
  if (xhr.readyState !== 4 || xhr.status !== 200) {
    return;
  }
  const response = xhr.response;
  const responseArray = JSON.parse(response);
  const randomText = Math.floor(Math.random() * (5 - 0) + 0);
console.log(randomText)
  underHeading.textContent = responseArray[randomText]

}
xhr.send();