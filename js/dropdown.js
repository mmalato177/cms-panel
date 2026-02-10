function openNav() {
  document.getElementById("mySidebar").style.width = "260px";
  document.getElementById("main").style.marginLeft = "260px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

/* Website switcher */
function toggleSites() {
  const list = document.getElementById("siteList");
  list.style.display = list.style.display === "block" ? "none" : "block";
}

function switchSite(name) {
  const current = document.getElementById("currentWebsite");
  const list = document.getElementById("siteList");

  list.innerHTML += `<div onclick="switchSite('${current.innerText}')">${current.innerText}</div>`;
  current.innerText = name;
  list.style.display = "none";
}
