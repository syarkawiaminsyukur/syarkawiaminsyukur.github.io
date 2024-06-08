document.addEventListener("alpine:init", () => {
  Alpine.data("portfolio", () => ({
    items: [
      { id: 1, name: "Submission Dicoding", img: "project1.png", url: "https://syarkawiaminsyukur.github.io/submission-dicoding/" },
      { id: 2, name: "Portfolio with bootstrap", img: "project2.png", url: "https://syarkawiaminsyukur.github.io/Portfolio-with-bootstrap/" },
      { id: 3, name: "Portfolio with Tailwincss", img: "project3.png", url: "https://syarkawiaminsyukur.github.io/portfolio-with-tailwind/" },
      { id: 4, name: "Bookshelf app", img: "project4.png", url: "https://syarkawiaminsyukur.github.io/Bookshelf-app/" },
      { id: 5, name: "wedding invitation", img: "project5.png", url: "https://syarkawiaminsyukur.github.io/wedding-invitation/" },
      { id: 6, name: "CoffeShop Website", img: "project6.png", url: "https://syarkawiaminsyukur.github.io/cerita-kopi/" },
      { id: 7, name: "Travel Website", img: "project7.png" },
    ],
  }));
});
