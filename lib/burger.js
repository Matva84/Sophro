var burgerBtn = document.getElementById("topnav_hamburger_icon");
var itemBtn = document.querySelectorAll(".item")

itemBtn.forEach((element) => {
  element.addEventListener('click', (event) => {
     showResponsiveMenu();
  });
});

burgerBtn.addEventListener("click", (event) => {
  showResponsiveMenu();
});

function showResponsiveMenu() {
  var menu = document.getElementById("topnav_responsive_menu");
  var icon = document.getElementById("topnav_hamburger_icon");
  var root = document.getElementById("root");
  if (menu.className === "") {
    menu.className = "open";
    icon.className = "open";
    root.style.overflowY = "hidden";
  } else {
    menu.className = "";
    icon.className = "";
    root.style.overflowY = "";
  }
}
