const cats = ["Cat 1", "Cat 2", "Cat 3", "Cat 4", "Cat 5"];

let counts = [];
let currentCat = 0;

function displayCatList() {
  const catList = document.querySelector(".catList");
  cats.forEach((e, i) => {
    const p = document.createElement("p");
    p.textContent = e;
    p.addEventListener("click", updateCanvas.bind(null, i));
    catList.append(p);
    counts.push(0);
  });
}
displayCatList();

function updateCanvas(i) {
  currentCat = i;
  const catImg = document.querySelector(".canvas>img");
  const catTitle = document.querySelector(".canvas>.title");
  const catCounter = document.querySelector(".canvas>.counter");
  console.log(catImg);
  catImg.src = `./assets/cat${i + 1}.jpeg`;

  catTitle.textContent = cats[i];
  catCounter.textContent = "Count:" + counts[i];
}
document.querySelector(".canvas>img").addEventListener("click", (ev) => {
  counts[currentCat]++;
  updateCanvas(currentCat);
});
