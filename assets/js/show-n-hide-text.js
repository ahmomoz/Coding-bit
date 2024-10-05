const showMoreBtns = document.querySelectorAll(".tab-content .show-more");

showMoreBtns.forEach((btn) => {
  let isShow = btn.dataset.show;
  isShow === "true" ? (isShow = true) : (isShow = false);
  const clickText = btn.querySelector("p");
  const clickIcon = btn.querySelector(".material-symbols-outlined");
  const textDetails = btn.closest(".tab-pane").querySelector(".tab-details");
  btn.addEventListener("click", (event) => {
    isShow = !isShow;
    btn.setAttribute("data-show", isShow);
    if (isShow) {
      clickText.innerText = "更少";
      clickIcon.innerText = "keyboard_arrow_up";
      textDetails.classList.remove("text-hide");
    } else {
      clickText.innerText = "更多";
      clickIcon.innerText = "stat_minus_1";
      textDetails.classList.add("text-hide");
    }
  });
});
