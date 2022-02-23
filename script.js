const tabMenu = document.querySelectorAll("nav img");

function activateTab() {
  const selectedContent = document.getElementById(this.getAttribute("alt"));

  const content = document.querySelectorAll(".content");
  content.forEach((item) => {
    item.classList.remove("active");
  });

  selectedContent.classList.add("active");
}

tabMenu.forEach((item) => {
  item.addEventListener("click", activateTab);
});
