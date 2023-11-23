const bar = document.querySelector(".burger");
const removeBtn = document.querySelector(".remove");
const menu = document.querySelector(".nav-links");

bar.addEventListener("click", () => {
  menu.classList.add("active-vlass");
});
removeBtn.addEventListener("click", () => {
  menu.classList.remove("active-vlass");
});
