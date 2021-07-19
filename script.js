const cat = document.querySelector("img");
const counter = document.querySelector(".counter");
let count = 0;

function updateCounter() {
  counter.textContent = `Counter: ${count++}`;
}
updateCounter();

cat.addEventListener("click", updateCounter);
