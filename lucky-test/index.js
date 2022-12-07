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


let flagsCircle = document.querySelector('.hero__animation-circle')
let flags = Array.from(document.getElementsByClassName('hero__animation-flag'));
const body = document.querySelector('body')
document.addEventListener("DOMContentLoaded", function(){

flags.forEach(function(flag, index){
    setTimeout(function(){
       timer(flag, index);
    }, 400 * ++index)
 });

setTimeout(function(){
    infinite();
 }, 4000);
})

function infinite(){
    flagsCircle.classList.add('infinite')
}

function timer(flag, index){
    flag.classList.remove('center-position')
    flag.classList.add(`flag-${index}`)

}


