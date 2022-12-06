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
