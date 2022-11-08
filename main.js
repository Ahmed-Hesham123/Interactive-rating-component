const submiState = document.getElementById("submit");
const ratingState = document.getElementById("ratingstate");
const thankState = document.getElementById("thankstate");

const numbers = document.querySelectorAll(".numbers");

submiState.addEventListener("click", (eo) => {
  ratingState.style.display = "none";
  thankState.style.display = "flex";
});

numbers.forEach((item) => {
  item.addEventListener("click", (eo) => {
    rating.innerHTML = item.innerHTML;
  });
});
