const favoriteIcon = document.querySelectorAll(".favorite");

favoriteIcon.forEach((item) => {
  let isFavorite = item.dataset.favorite;
  isFavorite === "true" ? (isFavorite = true) : (isFavorite = false);

  isFavorite ? item.classList.add("text-brand-01") : item.classList.add("text-gray-03");

  item.addEventListener("click", () => {
    isFavorite = !isFavorite;
    item.setAttribute("data-favorite", isFavorite);
    if (isFavorite) {
      item.classList.add("text-brand-01");
      item.classList.remove("text-gray-03");
    } else {
      item.classList.remove("text-brand-01");
      item.classList.add("text-gray-03");
    }
  });
});
