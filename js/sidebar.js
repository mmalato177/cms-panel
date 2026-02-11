function openNav() {
  const sidebar = document.getElementById("mySidebar");
  const btn = document.querySelector(".openbtn");

  sidebar.classList.remove("closed");
  btn.classList.remove("show");
}

function closeNav() {
  const sidebar = document.getElementById("mySidebar");
  const btn = document.querySelector(".openbtn");

  sidebar.classList.add("closed");
  btn.classList.add("show");
}

function toggleDropdown(e) {
  e.preventDefault();

  const menu = document.getElementById("siteList");
  const toggle = e.currentTarget;

  menu.classList.toggle("open");
  toggle.classList.toggle("active");
}

function switchSite(name) {
  document.getElementById("currentWebsite").innerText = name;
  document.getElementById("siteList").classList.remove("open");
}


window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});
