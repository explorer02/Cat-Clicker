(function () {
  const model = {
    selectedCat: null,
    cats: [
      { name: "Cat 1", count: 0, src: "./assets/cat1.jpeg" },
      { name: "Cat 2", count: 0, src: "./assets/cat2.jpeg" },
      { name: "Cat 3", count: 0, src: "./assets/cat3.jpeg" },
      { name: "Cat 4", count: 0, src: "./assets/cat4.jpeg" },
    ],
    getAllCats() {
      return this.cats;
    },
  };

  const octopus = {
    init() {
      model.selectedCat = model.cats[0];
      viewCatList.init();
      viewCanvas.init();
    },
    getAllCats() {
      return model.getAllCats();
    },
    getSelectedCatData() {
      return model.selectedCat;
    },
    updateCounter() {
      model.selectedCat.count++;
      viewCanvas.render();
    },
    updateSelectedCat(newCat) {
      model.selectedCat = newCat;
      viewCanvas.render();
    },
  };
  const viewCatList = {
    init() {
      this.catList = document.querySelector(".catList");
      this.render();
    },
    render() {
      const allCats = octopus.getAllCats();
      allCats.forEach((cat) => {
        const p = document.createElement("p");
        p.textContent = cat.name;
        this.catList.append(p);
        p.addEventListener("click", (ev) => {
          octopus.updateSelectedCat(cat);
        });
      });
    },
  };
  const viewCanvas = {
    init() {
      const canvas = document.querySelector(".canvas");
      this.catImage = canvas.querySelector("img");
      this.catTitle = canvas.querySelector(".title");
      this.catCount = canvas.querySelector(".counter");

      viewCanvas.render();
      this.catImage.addEventListener("click", (ev) => {
        octopus.updateCounter();
      });
    },
    render() {
      const { name, count, src } = octopus.getSelectedCatData();
      this.catImage.src = src;
      this.catTitle.textContent = name;
      this.catCount.textContent = `Count: ${count}`;
    },
  };

  octopus.init();
})();
