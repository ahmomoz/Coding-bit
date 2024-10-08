import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-wrapper");

  setTimeout(() => {
    loader.classList.add("loader-hidden");
  }, 1500);
});
