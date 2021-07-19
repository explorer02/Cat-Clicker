(function () {
  const model = {
    selectedCat: null,
    isAdminMode: false,
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
      viewAdminMode.init();
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
      viewAdminMode.render();
    },
    updateSelectedCat(newCat) {
      model.selectedCat = newCat;
      viewCanvas.render();
      viewAdminMode.render();
    },
    isAdminModeEnabled() {
      return model.isAdmin;
    },
    toggleAdminMode() {
      model.isAdmin = !model.isAdmin;
      viewAdminMode.render();
    },
    updateCatData(cat) {
      for (let key in cat) {
        model.selectedCat[key] = cat[key];
      }
      viewCatList.render();
      viewCanvas.render();
      viewCanvas.render();
    },
  };
  const viewCatList = {
    init() {
      this.catList = document.querySelector(".catList");
      this.render();
    },
    render() {
      this.catList.innerHTML = "";
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

  const viewAdminMode = {
    init() {
      this.btnAdminMode = document.querySelector(".btn-admin-mode");
      this.adminForm = document.querySelector(".admin>form");
      this.inputName = document.querySelector(".admin-form-name");
      this.inputURL = document.querySelector(".admin-form-url");
      this.inputCount = document.querySelector(".admin-form-count");
      this.cancelForm = document.querySelector(".admin-form-cancel");
      this.saveForm = document.querySelector(".admin-form-save");

      this.btnAdminMode.addEventListener("click", octopus.toggleAdminMode);
      this.cancelForm.addEventListener("click", octopus.toggleAdminMode);
      this.saveForm.addEventListener("click", () => {
        const name = this.inputName.value;
        const count = this.inputCount.value;
        const src = this.inputURL.value;
        octopus.updateCatData({ name, count, src });
      });
      this.adminForm.addEventListener("submit", (ev) => ev.preventDefault());

      this.render();
    },
    render() {
      if (!octopus.isAdminModeEnabled()) {
        this.adminForm.style.display = "none";
        return;
      }
      this.adminForm.style.display = "block";
      const { name, count, src } = octopus.getSelectedCatData();
      this.inputName.value = name;
      this.inputURL.value = src;
      this.inputCount.value = count;
    },
  };

  octopus.init();
})();
