function openNav() {
  document.getElementById("mySidebar").classList.remove("closed");
  document.getElementById("main").classList.remove("expanded");
}

function closeNav() {
  document.getElementById("mySidebar").classList.add("closed");
  document.getElementById("main").classList.add("expanded");
}


function toggleDropdown(e) {
  e.preventDefault();

  const menu = document.getElementById("siteList");
  const toggle = e.currentTarget;
  const current = document.getElementById("currentWebsite");

  // Abrir / fechar dropdown
  menu.classList.toggle("open");
  toggle.classList.toggle("active");

  // Evita adicionar múltiplos listeners
  if (!menu.dataset.listenerAdded) {

    menu.addEventListener("click", function (event) {
      event.preventDefault();

      const link = event.target.closest("a");
      if (!link || !link.dataset.site) return;

      const newSite = link.dataset.site;
      const oldSite = current.innerText;

      if (newSite === oldSite) return;

      // Atualiza o atual
      current.innerText = newSite;

      // Remove o selecionado da lista
      link.parentElement.remove();

      // Adiciona o antigo à lista
      const li = document.createElement("li");
      li.innerHTML = `<a href="#" data-site="${oldSite}">${oldSite}</a>`;
      menu.appendChild(li);

      // Fecha dropdown
      menu.classList.remove("open");
      toggle.classList.remove("active");
    });

    menu.dataset.listenerAdded = "true";
  }
}
window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

document.addEventListener("partial:loaded", () => {

  const sidebar = document.getElementById("mySidebar");
  const main = document.getElementById("main");

  if (!sidebar) return;

  if (window.innerWidth <= 768) {
    sidebar.classList.add("closed");
    main?.classList.add("expanded");
  }

});





