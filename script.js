const cats = ["Cat 1", "Cat 2", "Cat 3", "Cat 4"];
const counters = document.querySelector(".counters");
const container = document.querySelector(".container");
let counts = [0];

function displayCats() {
  cats.forEach((e, i) => {
    const div = document.createElement("div");
    div.classList.add("cat-holder");
    div.innerHTML = `
        <p>${e}</p>
        <img src="${`./assets/cat${i + 1}.jpeg`}"/>`;
    container.appendChild(div);
  });
}
displayCats();

function displayCounter() {
  cats.forEach((e, i) => {
    const div = document.createElement("div");
    div.classList.add("counter" + (i + 1));
    div.textContent = `Counter ${i + 1}: 0`;
    counters.appendChild(div);
    counts.push(0);
  });
}
displayCounter();

function updateCounter(i) {
  document.querySelector(
    `.counter${i}`
  ).textContent = `Counter ${i}: ${++counts[i]}`;
}

document
  .querySelectorAll("img")
  .forEach((e, i) =>
    e.addEventListener("click", updateCounter.bind(null, i + 1))
  );
